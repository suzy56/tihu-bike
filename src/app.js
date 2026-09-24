import * as THREE from 'three';
import { Bicycle } from './bicycle.js';
import { Pelican } from './pelican.js';
import { World } from './world.js';
import { soundEngine } from './audio.js';

export class App {
  constructor() {
    this.container = document.getElementById('canvas-container');

    // State Variables
    this.speed = 4.5; // m/s (~16 km/h cruising)
    this.targetSpeed = 4.5;
    this.maxSpeed = 14.0; // ~50 km/h during turbo
    this.steer = 0;
    this.distance = 0;
    this.energy = 95;
    this.isWheelie = false;
    this.isBraking = false;
    this.isAccelerating = false;

    // Camera modes: 'follow', 'beak', 'side', 'front', 'orbit'
    this.cameraMode = 'follow';
    this.orbitRadius = 5.5;
    this.orbitTheta = 0.5;
    this.orbitPhi = 1.1;
    this.isDragging = false;
    this.lastPointer = { x: 0, y: 0 };

    this.lastChainTickAngle = 0;
    this.clock = new THREE.Clock();

    this.initThree();
    this.initSceneObjects();
    this.initEventListeners();
    this.initUI();

    this.animate = this.animate.bind(this);
    this.renderer.setAnimationLoop(this.animate);
    // Fallback animation pump for background/headless environments
    setInterval(() => {
      if (this.clock.getDelta() > 0.05) {
        this.animate();
      }
    }, 100);
    this.animate();
  }

  initThree() {
    this.scene = new THREE.Scene();

    // Responsive Camera
    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(48, aspect, 0.1, 400);
    this.camera.position.set(-2.8, 1.4, 1.9);
    this.camera.lookAt(0.3, 0.85, 0);
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      preserveDrawingBuffer: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;

    this.container.appendChild(this.renderer.domElement);
  }

  initSceneObjects() {
    // 1. Procedural Infinite World
    this.world = new World(this.scene);

    // 2. Vintage Cruiser Bicycle
    this.bicycle = new Bicycle();
    this.scene.add(this.bicycle.group);

    // 3. 3D Pelican Character
    this.pelican = new Pelican(this.bicycle);
    this.scene.add(this.pelican.group);
  }

  initEventListeners() {
    // Resize handler
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Keyboard controls
    this.keys = {};
    window.addEventListener('keydown', (e) => {
      soundEngine.resume();
      this.keys[e.code] = true;

      // Quick trigger actions
      if (e.code === 'Space') {
        e.preventDefault();
        this.ringBell();
      } else if (e.code === 'KeyH') {
        this.honkPelican();
      } else if (e.code === 'KeyC') {
        this.cycleCamera();
      } else if (e.code === 'KeyT') {
        this.cycleTimeOfDay();
      } else if (e.code === 'KeyM') {
        this.toggleSound();
      } else if (e.code === 'KeyB') {
        this.toggleBGM();
      }
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
    });

    // Pointer events for Orbit Camera & Touch Controls
    const canvas = this.renderer.domElement;

    canvas.addEventListener('pointerdown', (e) => {
      this.isDragging = true;
      this.lastPointer.x = e.clientX;
      this.lastPointer.y = e.clientY;
    });

    window.addEventListener('pointermove', (e) => {
      if (!this.isDragging) return;
      const dx = e.clientX - this.lastPointer.x;
      const dy = e.clientY - this.lastPointer.y;
      this.lastPointer.x = e.clientX;
      this.lastPointer.y = e.clientY;

      if (this.cameraMode === 'orbit') {
        this.orbitTheta -= dx * 0.008;
        this.orbitPhi = Math.max(0.2, Math.min(Math.PI * 0.48, this.orbitPhi - dy * 0.008));
      } else {
        // Slight interactive camera pan offset
        this.camera.position.x += dx * 0.003;
        this.camera.position.y -= dy * 0.003;
      }
    });

    window.addEventListener('pointerup', () => {
      this.isDragging = false;
    });

    // Wheel zoom for orbit camera
    canvas.addEventListener('wheel', (e) => {
      if (this.cameraMode === 'orbit') {
        this.orbitRadius = Math.max(2.5, Math.min(15.0, this.orbitRadius + e.deltaY * 0.005));
      }
    }, { passive: true });
  }

  initUI() {
    // DOM Elements
    this.speedNumEl = document.getElementById('speed-num');
    this.rpmNumEl = document.getElementById('rpm-num');
    this.distNumEl = document.getElementById('dist-num');
    this.energyBarEl = document.getElementById('energy-fill');
    this.camBadgeEl = document.getElementById('cam-badge');
    this.timeBadgeEl = document.getElementById('time-badge');
    this.audioBtnEl = document.getElementById('btn-sound');
    this.bgmBtnEl = document.getElementById('btn-bgm');

    // UI Buttons
    document.getElementById('btn-pedal')?.addEventListener('pointerdown', () => { this.isAccelerating = true; });
    document.getElementById('btn-pedal')?.addEventListener('pointerup', () => { this.isAccelerating = false; });
    document.getElementById('btn-pedal')?.addEventListener('pointerleave', () => { this.isAccelerating = false; });

    document.getElementById('btn-brake')?.addEventListener('pointerdown', () => { this.isBraking = true; });
    document.getElementById('btn-brake')?.addEventListener('pointerup', () => { this.isBraking = false; });
    document.getElementById('btn-brake')?.addEventListener('pointerleave', () => { this.isBraking = false; });

    document.getElementById('btn-bell')?.addEventListener('click', () => { this.ringBell(); });
    document.getElementById('btn-honk')?.addEventListener('click', () => { this.honkPelican(); });
    document.getElementById('btn-wheelie')?.addEventListener('click', () => { this.toggleWheelie(); });
    document.getElementById('btn-cam')?.addEventListener('click', () => { this.cycleCamera(); });
    document.getElementById('btn-time')?.addEventListener('click', () => { this.cycleTimeOfDay(); });
    document.getElementById('btn-sound')?.addEventListener('click', () => { this.toggleSound(); });
    document.getElementById('btn-bgm')?.addEventListener('click', () => { this.toggleBGM(); });

    // Speed Slider
    this.speedSlider = document.getElementById('speed-slider');
    if (this.speedSlider) {
      this.speedSlider.addEventListener('input', (e) => {
        this.targetSpeed = parseFloat(e.target.value);
      });
    }
  }

  ringBell() {
    soundEngine.playBell();
    // Jiggle bell lever
    if (this.bicycle.bellMesh) {
      this.bicycle.bellMesh.rotation.z = 0.35;
      setTimeout(() => {
        if (this.bicycle.bellMesh) this.bicycle.bellMesh.rotation.z = 0;
      }, 180);
    }
  }

  honkPelican() {
    soundEngine.playHonk();
    this.pelican.honk();
  }

  toggleWheelie() {
    this.isWheelie = !this.isWheelie;
    const btn = document.getElementById('btn-wheelie');
    if (btn) {
      btn.classList.toggle('active', this.isWheelie);
    }
  }

  toggleSound() {
    const unmuted = soundEngine.toggleMute();
    if (this.audioBtnEl) {
      this.audioBtnEl.innerHTML = unmuted ? '🔊' : '🔇';
      this.audioBtnEl.classList.toggle('active', unmuted);
    }
  }

  toggleBGM() {
    const playing = soundEngine.toggleBGM();
    if (this.bgmBtnEl) {
      this.bgmBtnEl.innerHTML = playing ? '🎵 音乐开启' : '🎵 音乐关闭';
      this.bgmBtnEl.classList.toggle('active', playing);
    }
  }

  cycleCamera() {
    const modes = ['follow', 'beak', 'side', 'front', 'orbit'];
    const idx = modes.indexOf(this.cameraMode);
    this.cameraMode = modes[(idx + 1) % modes.length];

    // Instantly snap camera position for dramatic view change
    switch (this.cameraMode) {
      case 'follow': this.camera.position.set(-2.8, 1.4, 1.9); break;
      case 'beak': this.camera.position.set(0.45, 1.48, 0); break;
      case 'side': this.camera.position.set(0, 1.0, 3.8); break;
      case 'front': this.camera.position.set(3.4, 0.7, 1.6); break;
      case 'orbit': this.camera.position.set(0, 2.5, 5.0); break;
    }

    if (this.camBadgeEl) {
      const titles = {
        follow: '追随视角 🎥',
        beak: '鹈鹕第一视角 🪿',
        side: '侧面特写 🚲',
        front: '正面英雄 📷',
        orbit: '360° 自由观察 🚁'
      };
      this.camBadgeEl.innerText = titles[this.cameraMode];
    }
    this.animate();
  }

  cycleTimeOfDay() {
    const times = ['day', 'sunset', 'cyberpunk', 'night'];
    const idx = times.indexOf(this.world.currentTimeOfDay);
    const nextTime = times[(idx + 1) % times.length];
    this.world.setTimeOfDay(nextTime);

    // Dynamic tone mapping exposure per time of day
    const exposures = { day: 1.05, sunset: 1.28, cyberpunk: 1.40, night: 1.18 };
    this.renderer.toneMappingExposure = exposures[nextTime] || 1.1;

    if (this.timeBadgeEl) {
      const titles = {
        day: '晴空正午 ☀️',
        sunset: '落日余晖 🌅',
        cyberpunk: '赛博霓虹 🌆',
        night: '静谧星空 🌙'
      };
      this.timeBadgeEl.innerText = titles[nextTime];
    }
    this.animate();
  }

  updatePhysics(delta) {
    // 1. Process Keyboard / Touch Inputs
    let accel = 0;
    if (this.keys['KeyW'] || this.keys['ArrowUp'] || this.isAccelerating) {
      accel += 4.5;
    }
    if (this.keys['KeyS'] || this.keys['ArrowDown'] || this.isBraking) {
      accel -= 8.0;
    }

    // Steering
    let steerTarget = 0;
    if (this.keys['KeyA'] || this.keys['ArrowLeft']) {
      steerTarget -= 1.0;
    }
    if (this.keys['KeyD'] || this.keys['ArrowRight']) {
      steerTarget += 1.0;
    }
    this.steer += (steerTarget - this.steer) * Math.min(delta * 8, 1);

    // Turbo Wheelie Key
    this.isWheelie = !!(this.keys['ShiftLeft'] || this.keys['ShiftRight'] || this.isWheelie);

    // Speed target calculation
    if (accel !== 0) {
      this.targetSpeed = Math.max(0.5, Math.min(this.maxSpeed, this.targetSpeed + accel * delta));
      if (this.speedSlider) this.speedSlider.value = this.targetSpeed.toFixed(1);
    }

    // Smooth speed interpolation with road friction & inertia
    const accelRate = accel > 0 ? 3.0 : (accel < 0 ? 7.0 : 1.5);
    this.speed += (this.targetSpeed - this.speed) * Math.min(delta * accelRate, 1);

    // Cap speed
    this.speed = Math.max(0.2, Math.min(this.isWheelie ? 16.0 : this.maxSpeed, this.speed));

    // Distance accumulation
    this.distance += this.speed * delta;

    // Energy / Fatigue depletion & recovery
    if (this.speed > 8.0) {
      this.energy = Math.max(10, this.energy - delta * 2.5);
    } else {
      this.energy = Math.min(100, this.energy + delta * 1.5);
    }

    // Sound updates: wind & chain ticks
    soundEngine.updateSpeed(this.speed / 5.0);

    // Periodic chain tick sound based on crank rotation
    const crankAngle = this.bicycle.crankAngle;
    if (Math.abs(crankAngle - this.lastChainTickAngle) > 0.45) {
      soundEngine.playChainTick(this.speed / 5.0);
      this.lastChainTickAngle = crankAngle;
    }
  }

  updateCamera(delta) {
    const target = new THREE.Vector3(0, 0.9, 0); // Focus point around pelican torso

    let idealPos = new THREE.Vector3();
    let lookTarget = target.clone();

    switch (this.cameraMode) {
      case 'follow':
        // Smooth cinematic chase camera
        idealPos.set(-2.8, 1.4, 1.9);
        lookTarget.set(0.3, 0.85, 0);
        // Slight dynamic bank with steering
        idealPos.z += this.steer * 0.8;
        break;

      case 'beak':
        // First Person Beak POV!
        // Camera placed right at pelican eyes looking forward
        idealPos.set(0.45, 1.48, 0);
        lookTarget.set(8.0, 1.25, this.steer * 2.5);
        break;

      case 'side':
        // Profile shot showing full pedaling leg IK and wheels
        idealPos.set(0, 1.0, 3.8);
        lookTarget.set(0, 0.85, 0);
        break;

      case 'front':
        // Low angle front hero shot looking back at pelican
        idealPos.set(3.4, 0.7, 1.6);
        lookTarget.set(0, 1.1, 0);
        break;

      case 'orbit':
        // Free 360 Orbit Camera
        const x = this.orbitRadius * Math.sin(this.orbitPhi) * Math.sin(this.orbitTheta);
        const y = this.orbitRadius * Math.cos(this.orbitPhi) + 0.6;
        const z = this.orbitRadius * Math.sin(this.orbitPhi) * Math.cos(this.orbitTheta);
        idealPos.set(x, y, z);
        break;
    }

    // Smooth Lerp Camera Position
    const lerpFactor = this.cameraMode === 'beak' ? 0.35 : Math.min(delta * 6.0, 1.0);
    this.camera.position.lerp(idealPos, lerpFactor);
    this.camera.lookAt(lookTarget);

    // High speed dynamic camera rumble
    if (this.speed > 8.5) {
      const rumble = (this.speed - 8.5) * 0.003;
      this.camera.position.x += (Math.random() - 0.5) * rumble;
      this.camera.position.y += (Math.random() - 0.5) * rumble;
    }
  }

  updateHUD() {
    // Speed in km/h
    const kmh = (this.speed * 3.6).toFixed(1);
    if (this.speedNumEl) this.speedNumEl.innerText = kmh;

    // Cadence (RPM): (speed / wheelRadius / gearRatio) * 60 / 2pi
    const rpm = Math.round((this.speed / this.bicycle.wheelRadius / 2.4) * (60 / (Math.PI * 2)));
    if (this.rpmNumEl) this.rpmNumEl.innerText = rpm;

    // Distance in km
    const km = (this.distance / 1000).toFixed(2);
    if (this.distNumEl) this.distNumEl.innerText = km;

    // Energy Fill
    if (this.energyBarEl) this.energyBarEl.style.width = `${this.energy.toFixed(0)}%`;
  }

  animate() {
    requestAnimationFrame(this.animate);

    const delta = Math.min(this.clock.getDelta(), 0.1); // clamp delta to avoid spiral

    // 1. Update Physics
    this.updatePhysics(delta);

    // 2. Update Bicycle
    this.bicycle.update(delta, this.speed, this.steer, this.isWheelie);

    // 3. Update Pelican (IK & Animations)
    this.pelican.update(delta, this.speed, this.isWheelie);

    // 4. Update Infinite World
    this.world.update(delta, this.speed);

    // 5. Update Camera
    this.updateCamera(delta);

    // 6. Update HUD
    this.updateHUD();

    // 7. Render Frame
    this.renderer.render(this.scene, this.camera);
  }
}

function startPelican() {
  if (!window.pelicanApp) {
    window.pelicanApp = new App();
  }
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', startPelican);
} else {
  startPelican();
}
