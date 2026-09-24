import * as THREE from 'three';
import { TextureGenerator } from './textures.js';

export class World {
  constructor(scene) {
    this.scene = scene;
    this.time = 0;
    this.roadSegments = [];
    this.roadSegmentLength = 40;
    this.totalSegments = 5;
    this.roadWidth = 7.0;

    this.seagulls = [];
    this.palmTrees = [];
    this.streetLamps = [];
    this.clouds = [];
    this.particles = null;
    this.beaconBeam = null;

    this.currentTimeOfDay = 'sunset'; // 'day', 'sunset', 'night', 'cyberpunk'

    this.createMaterials();
    this.buildWorld();
  }

  createMaterials() {
    // Road Asphalt with Procedural Granular Map
    this.asphaltMat = new THREE.MeshStandardMaterial({
      map: TextureGenerator.createAsphaltTexture(),
      roughness: 0.85,
      metalness: 0.12
    });
    // Road Markings (Yellow & White)
    this.markingYellowMat = new THREE.MeshStandardMaterial({
      color: 0xffd166,
      roughness: 0.4,
      metalness: 0.05
    });

    this.markingWhiteMat = new THREE.MeshStandardMaterial({
      color: 0xf8f9fa,
      roughness: 0.4,
      metalness: 0.05
    });

    // Sidewalk & Curb (Concrete)
    this.concreteMat = new THREE.MeshStandardMaterial({
      color: 0x8d99ae,
      roughness: 0.8,
      metalness: 0.1
    });

    // Sandy Beach
    this.sandMat = new THREE.MeshStandardMaterial({
      color: 0xf4a261,
      roughness: 0.95,
      metalness: 0.02
    });

    // Green Grass / Verge
    this.grassMat = new THREE.MeshStandardMaterial({
      color: 0x2a9d8f,
      roughness: 0.85,
      metalness: 0.05
    });

    // Ocean Water Material (with custom specular & transparency)
    this.oceanMat = new THREE.MeshStandardMaterial({
      color: 0x0077b6,
      roughness: 0.15,
      metalness: 0.85,
      transparent: true,
      opacity: 0.92,
      flatShading: true
    });

    // Palm Trunk
    this.trunkMat = new THREE.MeshStandardMaterial({
      color: 0x6f4e37,
      roughness: 0.9,
      metalness: 0.05
    });

    // Palm Leaves
    this.leafMat = new THREE.MeshStandardMaterial({
      color: 0x38b000,
      roughness: 0.6,
      metalness: 0.1,
      side: THREE.DoubleSide
    });

    // Boardwalk Wood
    this.woodMat = new THREE.MeshStandardMaterial({
      color: 0xa67c52,
      roughness: 0.8,
      metalness: 0.05
    });

    // Street Lamp Cast Iron
    this.ironMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a24,
      roughness: 0.4,
      metalness: 0.8
    });

    // Street Lamp Glass (Glowing)
    this.lampGlowMat = new THREE.MeshStandardMaterial({
      color: 0xfffae0,
      roughness: 0.1,
      emissive: 0xffcc00,
      emissiveIntensity: 0.8
    });

    // Fluffy White Clouds
    this.cloudMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.95,
      metalness: 0.02,
      flatShading: true
    });
  }

  buildWorld() {
    this.worldGroup = new THREE.Group();
    this.scene.add(this.worldGroup);

    this.buildInfiniteRoad();
    this.buildOcean();
    this.buildClouds();
    this.buildSeagulls();
    this.buildAtmosphericParticles();
    this.buildDistantCoastAndLighthouse();
    this.setupLighting();
  }

  setupLighting() {
    // Ambient Light
    this.ambientLight = new THREE.AmbientLight(0xffeedd, 0.6);
    this.scene.add(this.ambientLight);

    // Directional Sun / Moon Light
    this.sunLight = new THREE.DirectionalLight(0xfffaed, 1.8);
    this.sunLight.position.set(40, 50, -30);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 2048;
    this.sunLight.shadow.mapSize.height = 2048;
    this.sunLight.shadow.camera.near = 1;
    this.sunLight.shadow.camera.far = 150;
    this.sunLight.shadow.camera.left = -25;
    this.sunLight.shadow.camera.right = 25;
    this.sunLight.shadow.camera.top = 25;
    this.sunLight.shadow.camera.bottom = -25;
    this.sunLight.shadow.bias = -0.0005;
    this.scene.add(this.sunLight);

    // Hemisphere Light for natural skylight / ground bounce
    this.hemiLight = new THREE.HemisphereLight(0x87ceeb, 0xf4a261, 0.5);
    this.scene.add(this.hemiLight);

    // Distance Fog
    this.scene.fog = new THREE.FogExp2(0xffe8d6, 0.012);

    this.setTimeOfDay(this.currentTimeOfDay);
  }

  setTimeOfDay(timeKey) {
    this.currentTimeOfDay = timeKey;

    // Generate dynamic IBL environment sky texture
    const envMap = TextureGenerator.createEnvironmentMap(timeKey);
    this.scene.environment = envMap;
    this.scene.background = envMap;

    switch (timeKey) {
      case 'day':
        this.scene.fog.color = new THREE.Color(0x9bd8ff);
        this.scene.fog.density = 0.007;
        this.ambientLight.color.setHex(0xffffff);
        this.ambientLight.intensity = 0.75;
        this.sunLight.color.setHex(0xfffaed);
        this.sunLight.intensity = 2.2;
        this.sunLight.position.set(20, 60, -20);
        this.hemiLight.color.setHex(0x70c1ff);
        this.hemiLight.groundColor.setHex(0xf4a261);
        this.oceanMat.color.setHex(0x0077b6);
        this.setLampsEmissive(0);
        break;

      case 'sunset':
        this.scene.fog.color = new THREE.Color(0xfb8b24);
        this.scene.fog.density = 0.010;
        this.ambientLight.color.setHex(0xffeedd);
        this.ambientLight.intensity = 0.65;
        this.sunLight.color.setHex(0xff6b35);
        this.sunLight.intensity = 2.6;
        this.sunLight.position.set(-50, 18, -40); // Low sunset angle
        this.hemiLight.color.setHex(0xf77f00);
        this.hemiLight.groundColor.setHex(0xd62828);
        this.oceanMat.color.setHex(0x005f73);
        this.setLampsEmissive(0.8);
        break;

      case 'cyberpunk':
        this.scene.fog.color = new THREE.Color(0x240046);
        this.scene.fog.density = 0.013;
        this.ambientLight.color.setHex(0x9d4edd);
        this.ambientLight.intensity = 0.5;
        this.sunLight.color.setHex(0xff007f);
        this.sunLight.intensity = 1.8;
        this.sunLight.position.set(-30, 25, 20);
        this.hemiLight.color.setHex(0x00f5d4);
        this.hemiLight.groundColor.setHex(0x7b2cbf);
        this.oceanMat.color.setHex(0x10002b);
        this.setLampsEmissive(1.8, 0x00f5d4);
        break;

      case 'night':
        this.scene.fog.color = new THREE.Color(0x0a1128);
        this.scene.fog.density = 0.011;
        this.ambientLight.color.setHex(0x1c2541);
        this.ambientLight.intensity = 0.3;
        this.sunLight.color.setHex(0x8da9c4);
        this.sunLight.intensity = 0.9; // Moonlight
        this.sunLight.position.set(30, 45, -30);
        this.hemiLight.color.setHex(0x0b2545);
        this.hemiLight.groundColor.setHex(0x011627);
        this.oceanMat.color.setHex(0x03045e);
        this.setLampsEmissive(2.2, 0xffd166);
        break;
    }
  }

  setLampsEmissive(intensity, color = 0xffcc00) {
    this.lampGlowMat.emissiveIntensity = intensity;
    this.lampGlowMat.emissive.setHex(color);
  }

  // Create one modular chunk of road and scenery
  createRoadSegment(startX) {
    const segGroup = new THREE.Group();
    segGroup.position.x = startX;

    const len = this.roadSegmentLength;

    // 1. Asphalt Roadway
    const roadGeom = new THREE.PlaneGeometry(len, this.roadWidth);
    const roadMesh = new THREE.Mesh(roadGeom, this.asphaltMat);
    roadMesh.rotation.x = -Math.PI / 2;
    roadMesh.receiveShadow = true;
    segGroup.add(roadMesh);

    // 2. Yellow Center Dashed Line
    const dashCount = 8;
    const dashLen = len / (dashCount * 2);
    for (let i = 0; i < dashCount; i++) {
      const dashGeom = new THREE.PlaneGeometry(dashLen, 0.16);
      const dash = new THREE.Mesh(dashGeom, this.markingYellowMat);
      dash.rotation.x = -Math.PI / 2;
      dash.position.set(-len * 0.5 + (i * 2 + 1) * dashLen, 0.002, 0);
      segGroup.add(dash);
    }

    // 3. White Solid Edge Stripes
    [-this.roadWidth * 0.45, this.roadWidth * 0.45].forEach(z => {
      const edgeGeom = new THREE.PlaneGeometry(len, 0.14);
      const edge = new THREE.Mesh(edgeGeom, this.markingWhiteMat);
      edge.rotation.x = -Math.PI / 2;
      edge.position.set(0, 0.002, z);
      segGroup.add(edge);
    });
    // Right Green Lawn / Flowerbeds
    const lawnGeom = new THREE.PlaneGeometry(len, 18);
    const lawn = new THREE.Mesh(lawnGeom, this.grassMat);
    lawn.rotation.x = -Math.PI / 2;
    lawn.position.set(0, 0.05, this.roadWidth * 0.5 + 11.5);
    lawn.receiveShadow = true;
    segGroup.add(lawn);

    // 5. Left Ocean Boardwalk Guardrail (z < 0 side)
    const postCount = 6;
    const postSpacing = len / postCount;
    for (let i = 0; i < postCount; i++) {
      const x = -len * 0.5 + i * postSpacing;
      // Wooden vertical post
      const postGeom = new THREE.BoxGeometry(0.14, 0.95, 0.14);
      const post = new THREE.Mesh(postGeom, this.woodMat);
      post.position.set(x, 0.47, -this.roadWidth * 0.5 - 0.12);
      post.castShadow = true;
      segGroup.add(post);
    }
    // Horizontal Rails
    [0.45, 0.85].forEach(y => {
      const railGeom = new THREE.BoxGeometry(len, 0.08, 0.10);
      const rail = new THREE.Mesh(railGeom, this.woodMat);
      rail.position.set(0, y, -this.roadWidth * 0.5 - 0.12);
      rail.castShadow = true;
      segGroup.add(rail);
    });
    // Hanging Nautical Catenary Ropes between posts
    const ropeMat = new THREE.MeshStandardMaterial({ color: 0x8b6c42, roughness: 0.9 });
    for (let i = 0; i < postCount - 1; i++) {
      const x1 = -len * 0.5 + i * postSpacing;
      const x2 = -len * 0.5 + (i + 1) * postSpacing;
      const midX = (x1 + x2) * 0.5;
      const curve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(x1, 0.65, -this.roadWidth * 0.5 - 0.12),
        new THREE.Vector3(midX, 0.48, -this.roadWidth * 0.5 - 0.12),
        new THREE.Vector3(x2, 0.65, -this.roadWidth * 0.5 - 0.12)
      );
      const ropeMesh = new THREE.Mesh(new THREE.TubeGeometry(curve, 10, 0.018, 6, false), ropeMat);
      segGroup.add(ropeMesh);
    }

    // 6. Sandy Beach Slope down to Ocean
    const beachGeom = new THREE.PlaneGeometry(len, 16);
    const beach = new THREE.Mesh(beachGeom, this.sandMat);
    beach.rotation.x = -Math.PI / 2 + 0.04;
    beach.position.set(0, -0.2, -this.roadWidth * 0.5 - 8);
    beach.receiveShadow = true;
    segGroup.add(beach);

    // 7. Scenery Props: Palm Trees & Victorian Street Lamps on outer sidewalk
    const palm = this.createPalmTree();
    palm.position.set(8, 0.14, this.roadWidth * 0.5 + 3.8);
    segGroup.add(palm);

    const lamp = this.createStreetLamp();
    lamp.position.set(-12, 0.14, this.roadWidth * 0.5 + 2.6);
    segGroup.add(lamp);

    // Beach Umbrellas down near the water on sand (z < -13.0)
    if (Math.random() > 0.4) {
      const umbrella = this.createBeachUmbrella();
      umbrella.position.set((Math.random() - 0.5) * 20, -0.4, -this.roadWidth * 0.5 - 9.5 - Math.random() * 4);
      segGroup.add(umbrella);
    }
    return segGroup;
  }

  buildInfiniteRoad() {
    for (let i = 0; i < this.totalSegments; i++) {
      const startX = (i - 2) * this.roadSegmentLength;
      const seg = this.createRoadSegment(startX);
      this.worldGroup.add(seg);
      this.roadSegments.push(seg);
    }
  }

  createPalmTree() {
    const palm = new THREE.Group();

    // Curved Trunk
    const trunkCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0.2, 2.0, 0.1),
      new THREE.Vector3(0.5, 4.2, 0.2),
      new THREE.Vector3(0.7, 5.8, 0.1)
    ]);
    const trunkGeom = new THREE.TubeGeometry(trunkCurve, 16, 0.18, 10, false);
    const trunk = new THREE.Mesh(trunkGeom, this.trunkMat);
    trunk.castShadow = true;
    palm.add(trunk);

    // Crown of Palm Fronds
    const crownPos = new THREE.Vector3(0.7, 5.8, 0.1);
    const frondCount = 9;

    for (let i = 0; i < frondCount; i++) {
      const angle = (i / frondCount) * Math.PI * 2;
      const frondGroup = new THREE.Group();
      frondGroup.position.copy(crownPos);
      frondGroup.rotation.y = angle;

      // Curved drooping frond
      const frondCurve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(1.4, 0.6, 0),
        new THREE.Vector3(2.6, -0.8, 0)
      );
      const stemGeom = new THREE.TubeGeometry(frondCurve, 12, 0.035, 6, false);
      const stem = new THREE.Mesh(stemGeom, this.leafMat);
      stem.castShadow = true;
      frondGroup.add(stem);

      // Frond leafy blades
      const leafShape = new THREE.PlaneGeometry(2.4, 0.6, 8, 2);
      const leafMesh = new THREE.Mesh(leafShape, this.leafMat);
      leafMesh.position.set(1.4, -0.1, 0);
      leafMesh.rotation.x = Math.PI / 2;
      leafMesh.rotation.z = -0.3;
      frondGroup.add(leafMesh);

      palm.add(frondGroup);
    }

    return palm;
  }

  createStreetLamp() {
    const lamp = new THREE.Group();

    // Base & Pole
    const baseGeom = new THREE.CylinderGeometry(0.18, 0.24, 0.45, 12);
    const base = new THREE.Mesh(baseGeom, this.ironMat);
    lamp.add(base);

    const poleGeom = new THREE.CylinderGeometry(0.06, 0.08, 4.2, 12);
    const pole = new THREE.Mesh(poleGeom, this.ironMat);
    pole.position.y = 2.3;
    lamp.add(pole);

    // Arched arm holding lantern
    const armGeom = new THREE.TorusGeometry(0.5, 0.04, 8, 16, Math.PI * 0.6);
    const arm = new THREE.Mesh(armGeom, this.ironMat);
    arm.position.set(-0.35, 4.4, 0);
    arm.rotation.z = -Math.PI * 0.3;
    lamp.add(arm);

    // Victorian Lantern
    const lanternGeom = new THREE.CylinderGeometry(0.16, 0.10, 0.42, 6);
    const lantern = new THREE.Mesh(lanternGeom, this.lampGlowMat);
    lantern.position.set(-0.65, 4.3, 0);
    lamp.add(lantern);

    // Lantern cap
    const capGeom = new THREE.ConeGeometry(0.24, 0.16, 6);
    const cap = new THREE.Mesh(capGeom, this.ironMat);
    cap.position.set(-0.65, 4.55, 0);
    lamp.add(cap);

    return lamp;
  }

  createBeachUmbrella() {
    const umbrella = new THREE.Group();

    // Pole
    const poleGeom = new THREE.CylinderGeometry(0.03, 0.03, 2.4, 8);
    const pole = new THREE.Mesh(poleGeom, this.woodMat);
    pole.position.y = 1.2;
    pole.rotation.z = 0.15; // Slanted in sand
    umbrella.add(pole);

    // Striped Canopy
    const canopyGeom = new THREE.ConeGeometry(1.4, 0.5, 12, 1, true);
    const canopyMat = new THREE.MeshStandardMaterial({
      color: 0xef476f,
      roughness: 0.6,
      side: THREE.DoubleSide
    });
    const canopy = new THREE.Mesh(canopyGeom, canopyMat);
    canopy.position.set(0.18, 2.3, 0);
    canopy.rotation.z = 0.15;
    canopy.castShadow = true;
    umbrella.add(canopy);

    return umbrella;
  }

  buildOcean() {
    // Vast animated ocean surface
    this.oceanGeom = new THREE.PlaneGeometry(350, 220, 64, 48);
    this.oceanMesh = new THREE.Mesh(this.oceanGeom, this.oceanMat);
    this.oceanMesh.rotation.x = -Math.PI / 2;
    this.oceanMesh.position.set(0, -0.65, -118);
    this.worldGroup.add(this.oceanMesh);

    // Cache initial vertex positions for wave displacement
    this.oceanPosAttr = this.oceanGeom.attributes.position;
    this.oceanInitY = new Float32Array(this.oceanPosAttr.count);
    for (let i = 0; i < this.oceanPosAttr.count; i++) {
      this.oceanInitY[i] = this.oceanPosAttr.getY(i);
    }
  }

  buildClouds() {
    this.cloudGroup = new THREE.Group();
    this.worldGroup.add(this.cloudGroup);

    for (let i = 0; i < 18; i++) {
      const cloud = this.createCloud();
      cloud.position.set(
        (Math.random() - 0.5) * 300,
        28 + Math.random() * 22,
        -50 - Math.random() * 120
      );
      this.clouds.push({
        mesh: cloud,
        speed: 1.2 + Math.random() * 1.5
      });
      this.cloudGroup.add(cloud);
    }
  }

  createCloud() {
    const group = new THREE.Group();
    const puffCount = 5 + Math.floor(Math.random() * 4);

    for (let i = 0; i < puffCount; i++) {
      const puffSize = 3.5 + Math.random() * 4.5;
      const puffGeom = new THREE.DodecahedronGeometry(puffSize, 1);
      const puff = new THREE.Mesh(puffGeom, this.cloudMat);
      puff.position.set(
        (i - puffCount * 0.5) * 3.5,
        (Math.random() - 0.5) * 1.8,
        (Math.random() - 0.5) * 2.2
      );
      group.add(puff);
    }

    return group;
  }

  buildSeagulls() {
    this.seagullGroup = new THREE.Group();
    this.worldGroup.add(this.seagullGroup);

    for (let i = 0; i < 6; i++) {
      const g = this.createSeagull();
      g.mesh.position.set(
        15 + Math.random() * 30,
        10 + Math.random() * 14,
        -15 - Math.random() * 25
      );
      this.seagulls.push(g);
      this.seagullGroup.add(g.mesh);
    }
  }

  createSeagull() {
    const mesh = new THREE.Group();

    // Body
    const bodyGeom = new THREE.ConeGeometry(0.12, 0.6, 6);
    bodyGeom.scale(1.0, 1.0, 0.4);
    const body = new THREE.Mesh(bodyGeom, this.markingWhiteMat);
    body.rotation.z = Math.PI / 2;
    mesh.add(body);

    // Beak
    const beakGeom = new THREE.ConeGeometry(0.04, 0.18, 5);
    const beak = new THREE.Mesh(beakGeom, this.markingYellowMat);
    beak.rotation.z = -Math.PI / 2;
    beak.position.set(0.36, 0, 0);
    mesh.add(beak);

    // Flapping Wings
    const wingGeom = new THREE.PlaneGeometry(0.8, 0.28, 4, 1);
    const wingMat = new THREE.MeshStandardMaterial({
      color: 0xf8f9fa,
      side: THREE.DoubleSide,
      roughness: 0.8
    });

    const leftWing = new THREE.Mesh(wingGeom, wingMat);
    leftWing.position.set(0, 0.05, -0.42);
    mesh.add(leftWing);

    const rightWing = new THREE.Mesh(wingGeom, wingMat);
    rightWing.position.set(0, 0.05, 0.42);
    mesh.add(rightWing);

    return {
      mesh,
      leftWing,
      rightWing,
      flapSpeed: 4.5 + Math.random() * 3.0,
      flapOffset: Math.random() * Math.PI * 2,
      flySpeed: 5.0 + Math.random() * 3.0,
      circleRadius: 18 + Math.random() * 15,
      angle: Math.random() * Math.PI * 2
    };
  }

  buildAtmosphericParticles() {
    const count = 350;
    const geom = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = Math.random() * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
      scales[i] = Math.random() * 0.18 + 0.08;
    }

    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const pMat = new THREE.PointsMaterial({
      color: 0xfffae0,
      size: 0.15,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });

    this.particles = new THREE.Points(geom, pMat);
    this.worldGroup.add(this.particles);
  }
  buildDistantCoastAndLighthouse() {
    this.coastGroup = new THREE.Group();
    this.worldGroup.add(this.coastGroup);

    // Distant mountain islands silhouettes
    const islandMat = new THREE.MeshStandardMaterial({
      color: 0x1b4332,
      roughness: 0.95,
      metalness: 0.05,
      flatShading: true
    });

    [-120, -40, 50, 130].forEach((x, idx) => {
      const islandGeom = new THREE.ConeGeometry(32 + idx * 8, 26 + idx * 5, 7);
      const island = new THREE.Mesh(islandGeom, islandMat);
      island.position.set(x, 5, -170 - idx * 10);
      island.scale.set(1.5, 0.8, 1.0);
      this.coastGroup.add(island);
    });

    // Red & White Striped Lighthouse on headland
    this.lighthouse = new THREE.Group();
    this.lighthouse.position.set(45, 10, -145);

    // Base rock
    const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(12, 1), this.woodMat);
    rock.position.y = -6;
    this.lighthouse.add(rock);

    // Tower bands
    for (let b = 0; b < 5; b++) {
      const bandMat = new THREE.MeshStandardMaterial({
        color: b % 2 === 0 ? 0xef233c : 0xffffff,
        roughness: 0.7
      });
      const band = new THREE.Mesh(new THREE.CylinderGeometry(2.2 - b * 0.2, 2.5 - b * 0.2, 4, 16), bandMat);
      band.position.y = b * 4;
      this.lighthouse.add(band);
    }

    // Lantern Room & Rotating Beacon
    const lanternMat = new THREE.MeshStandardMaterial({
      color: 0xfffae0,
      emissive: 0xffea00,
      emissiveIntensity: 2.0
    });
    const lantern = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.6, 2.5, 12), lanternMat);
    lantern.position.y = 21;
    this.lighthouse.add(lantern);

    // Rotating Beacon Beam Cone
    this.beaconBeam = new THREE.Group();
    this.beaconBeam.position.y = 21;
    const beamGeom = new THREE.ConeGeometry(12, 140, 16, 1, true);
    beamGeom.translate(0, -70, 0);
    beamGeom.rotateX(-Math.PI / 2);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0xffea00,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const beamMesh = new THREE.Mesh(beamGeom, beamMat);
    this.beaconBeam.add(beamMesh);
    this.lighthouse.add(this.beaconBeam);

    this.coastGroup.add(this.lighthouse);
  }

  // Update world simulation per frame
  update(delta, bicycleSpeed) {
    this.time += delta;

    // 1. Scroll Road Segments beneath the bicycle (Endless loop)
    const moveDist = bicycleSpeed * delta;
    const halfSpan = (this.totalSegments * this.roadSegmentLength) * 0.5;

    this.roadSegments.forEach(seg => {
      seg.position.x -= moveDist;

      // Wrap around when past rear boundary
      if (seg.position.x < -halfSpan) {
        seg.position.x += this.totalSegments * this.roadSegmentLength;
      }
    });

    // 2. Animate Ocean Waves with harmonic sinusoidal displacement
    const pos = this.oceanPosAttr;
    const t = this.time * 1.8;
    for (let i = 0; i < pos.count; i++) {
      const u = pos.getX(i);
      const v = pos.getY(i);
      // Dual sine wave interference
      const wave = Math.sin(u * 0.08 + t) * 0.45 +
                   Math.cos(v * 0.06 + t * 0.8) * 0.35 +
                   Math.sin((u + v) * 0.04 + t * 1.4) * 0.2;
      pos.setZ(i, wave);
    }
    pos.needsUpdate = true;
    this.oceanGeom.computeVertexNormals();

    // 3. Animate Seagulls soaring & flapping
    this.seagulls.forEach(g => {
      g.angle += delta * 0.18;
      g.mesh.position.x = Math.cos(g.angle) * g.circleRadius + 10;
      g.mesh.position.z = Math.sin(g.angle) * g.circleRadius - 25;
      g.mesh.rotation.y = -g.angle + Math.PI / 2;

      // Wing Flapping
      const flap = Math.sin(this.time * g.flapSpeed + g.flapOffset) * 0.6;
      g.leftWing.rotation.x = flap;
      g.rightWing.rotation.x = -flap;
    });

    // 4. Animate Clouds drifting
    this.clouds.forEach(c => {
      c.mesh.position.x -= c.speed * delta;
      if (c.mesh.position.x < -160) {
        c.mesh.position.x = 160;
      }
    });

    // 5. Animate Atmospheric Breeze Particles
    if (this.particles) {
      const pPos = this.particles.geometry.attributes.position;
      for (let i = 0; i < pPos.count; i++) {
        let x = pPos.getX(i) - (bicycleSpeed + 2.0) * delta;
        if (x < -40) x = 40;
        pPos.setX(i, x);

        // Gentle floating oscillation
        const y = pPos.getY(i) + Math.sin(this.time * 2 + i) * 0.005;
        pPos.setY(i, Math.max(0.2, Math.min(y, 14)));
      }
      pPos.needsUpdate = true;
    }
    // 6. Rotate Lighthouse Beacon Beam
    if (this.beaconBeam) {
      this.beaconBeam.rotation.y += delta * 0.8;
    }
  }
}
