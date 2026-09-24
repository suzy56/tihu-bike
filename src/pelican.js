import * as THREE from 'three';
import { TextureGenerator } from './textures.js';

export class Pelican {
  constructor(bicycle) {
    this.bicycle = bicycle;
    this.group = new THREE.Group();

    // IK Bone Lengths for Pelican Legs (meters)
    this.thighLen = 0.32;
    this.shinLen = 0.30;
    this.hipOffsetZ = 0.11; // Distance from center to left/right hip

    // Animation & Physics States
    this.pouchY = 0;
    this.pouchVel = 0;
    this.blinkTimer = 0;
    this.isBlinking = false;
    this.blinkProgress = 0;
    this.honkAmount = 0;
    this.headBobPhase = 0;
    this.cadenceSway = 0;

    this.createMaterials();
    this.buildPelican();
  }

  createMaterials() {
    // Body Feathers: Warm Snowy White with Velvety Sheen
    this.featherWhiteMat = new THREE.MeshPhysicalMaterial({
      color: 0xf8f9fa,
      roughness: 0.72,
      metalness: 0.02,
      sheen: 0.85,
      sheenColor: new THREE.Color(0xffffff),
      sheenRoughness: 0.5
    });

    // Dark Wing Tips & Tail Feathers: Slate Charcoal with Sheen
    this.featherDarkMat = new THREE.MeshPhysicalMaterial({
      color: 0x2b2d42,
      roughness: 0.8,
      metalness: 0.05,
      sheen: 0.5,
      sheenColor: new THREE.Color(0x8d99ae)
    });

    // Upper Bill: Procedural Keratin Texture with Gradient and Ridges
    this.billMat = new THREE.MeshStandardMaterial({
      map: TextureGenerator.createBeakTexture(),
      roughness: 0.28,
      metalness: 0.15,
      envMapIntensity: 1.3
    });

    // Bill Hook Tip: Crimson Amber
    this.billTipMat = new THREE.MeshStandardMaterial({
      color: 0x9e0012,
      roughness: 0.25,
      metalness: 0.2
    });

    // Throat Pouch (Gular Sac): Stretchy Soft Apricot with Subsurface Scattering
    this.pouchMat = new THREE.MeshPhysicalMaterial({
      color: 0xfda855,
      roughness: 0.45,
      metalness: 0.05,
      transmission: 0.15,
      thickness: 0.35,
      side: THREE.DoubleSide
    });

    // Webbed Feet & Leathery Legs: Bright Tangerine
    this.legMat = new THREE.MeshStandardMaterial({
      color: 0xf26419,
      roughness: 0.6,
      metalness: 0.1
    });

    // Eye Sclera: White Gloss
    this.eyeWhiteMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.1,
      metalness: 0.1
    });

    // Iris: Azure Blue
    this.irisMat = new THREE.MeshStandardMaterial({
      color: 0x1d3557,
      roughness: 0.2,
      metalness: 0.1
    });

    // Pupil: Pure Black
    this.pupilMat = new THREE.MeshBasicMaterial({ color: 0x000000 });

    // Aviator / Cycling Goggles (Brown Leather & Brass)
    this.goggleStrapMat = new THREE.MeshStandardMaterial({ color: 0x3d2614, roughness: 0.8 });
    this.goggleRimMat = new THREE.MeshStandardMaterial({ color: 0xc8963e, roughness: 0.3, metalness: 0.85 });
    this.goggleLensMat = new THREE.MeshStandardMaterial({
      color: 0x90e0ef,
      roughness: 0.1,
      metalness: 0.4,
      transparent: true,
      opacity: 0.85
    });
  }

  buildPelican() {
    // Pelican Root anchored to bicycle saddle
    this.root = new THREE.Group();
    this.root.position.copy(this.bicycle.saddleSeatingPoint);
    this.group.add(this.root);

    // Pelvis & Lower Torso
    this.pelvis = new THREE.Group();
    this.root.add(this.pelvis);

    this.buildTorso();
    this.buildTail();
    this.buildNeckAndHead();
    this.buildWings();
    this.buildLegs();
  }

  buildTorso() {
    this.torso = new THREE.Group();
    this.pelvis.add(this.torso);

    // Plump aerodynamic body
    const bodyGeom = new THREE.SphereGeometry(0.24, 24, 18);
    bodyGeom.scale(1.2, 0.95, 0.85);
    const bodyMesh = new THREE.Mesh(bodyGeom, this.featherWhiteMat);
    bodyMesh.castShadow = true;
    bodyMesh.receiveShadow = true;
    bodyMesh.rotation.z = -0.22; // Aerodynamic forward lean
    bodyMesh.position.set(0.08, 0.16, 0);
    this.torso.add(bodyMesh);

    // Fluffy chest highlight
    const chestGeom = new THREE.SphereGeometry(0.18, 16, 12);
    chestGeom.scale(1.0, 1.2, 0.75);
    const chestMesh = new THREE.Mesh(chestGeom, this.featherWhiteMat);
    chestMesh.position.set(0.18, 0.18, 0);
    chestMesh.rotation.z = -0.3;
    this.torso.add(chestMesh);
  }

  buildTail() {
    this.tail = new THREE.Group();
    this.tail.position.set(-0.20, 0.14, 0);

    // Fan of tail feathers
    for (let i = -3; i <= 3; i++) {
      const featherGeom = new THREE.ConeGeometry(0.038, 0.22, 6);
      featherGeom.scale(1.0, 1.0, 0.3);
      const feather = new THREE.Mesh(featherGeom, this.featherDarkMat);
      feather.rotation.z = Math.PI * 0.65;
      feather.rotation.y = i * 0.14;
      feather.position.set(-0.06, i * 0.012, (i / 3) * 0.09);
      feather.castShadow = true;
      this.tail.add(feather);
    }

    this.torso.add(this.tail);
  }

  buildNeckAndHead() {
    // S-Curved Neck Base
    this.neckBase = new THREE.Group();
    this.neckBase.position.set(0.24, 0.24, 0);
    this.torso.add(this.neckBase);

    // Lower Neck Segment
    const neck1Geom = new THREE.CylinderGeometry(0.085, 0.11, 0.18, 16);
    const neck1 = new THREE.Mesh(neck1Geom, this.featherWhiteMat);
    neck1.position.set(0.04, 0.09, 0);
    neck1.rotation.z = -0.45;
    neck1.castShadow = true;
    this.neckBase.add(neck1);

    // Mid Neck Joint
    this.neckMid = new THREE.Group();
    this.neckMid.position.set(0.10, 0.18, 0);
    this.neckBase.add(this.neckMid);

    const neck2Geom = new THREE.CylinderGeometry(0.075, 0.085, 0.18, 16);
    const neck2 = new THREE.Mesh(neck2Geom, this.featherWhiteMat);
    neck2.position.set(0.02, 0.09, 0);
    neck2.rotation.z = 0.35; // Curves forward-upward
    neck2.castShadow = true;
    this.neckMid.add(neck2);

    // Head Group
    this.headGroup = new THREE.Group();
    this.headGroup.position.set(0.04, 0.19, 0);
    this.neckMid.add(this.headGroup);

    // Skull
    const skullGeom = new THREE.SphereGeometry(0.12, 20, 16);
    skullGeom.scale(1.15, 0.95, 0.88);
    const skull = new THREE.Mesh(skullGeom, this.featherWhiteMat);
    skull.castShadow = true;
    this.headGroup.add(skull);

    // Cute Crest Feathers on back of head
    for (let i = 0; i < 4; i++) {
      const crestGeom = new THREE.ConeGeometry(0.025, 0.14 - i * 0.02, 6);
      const crest = new THREE.Mesh(crestGeom, this.featherWhiteMat);
      crest.rotation.z = Math.PI * 0.65 + i * 0.12;
      crest.position.set(-0.10, 0.04 - i * 0.02, (i - 1.5) * 0.02);
      this.headGroup.add(crest);
    }

    this.buildEyes();
    this.buildBeakAndPouch();
    this.buildGoggles();
  }

  buildEyes() {
    this.eyes = [];
    [-0.075, 0.075].forEach(z => {
      const eyeGroup = new THREE.Group();
      eyeGroup.position.set(0.065, 0.04, z);

      // White Sclera
      const scleraGeom = new THREE.SphereGeometry(0.038, 16, 12);
      const sclera = new THREE.Mesh(scleraGeom, this.eyeWhiteMat);
      eyeGroup.add(sclera);

      // Iris
      const irisGeom = new THREE.CircleGeometry(0.022, 16);
      const iris = new THREE.Mesh(irisGeom, this.irisMat);
      iris.position.set(0.036, 0, 0);
      iris.rotation.y = Math.PI / 2;
      eyeGroup.add(iris);

      // Pupil
      const pupilGeom = new THREE.CircleGeometry(0.012, 16);
      const pupil = new THREE.Mesh(pupilGeom, this.pupilMat);
      pupil.position.set(0.037, 0, 0);
      pupil.rotation.y = Math.PI / 2;
      eyeGroup.add(pupil);

      // Cute Eyelid for Blinking
      const lidGeom = new THREE.SphereGeometry(0.040, 16, 8, 0, Math.PI * 2, 0, Math.PI * 0.5);
      const eyelid = new THREE.Mesh(lidGeom, this.featherWhiteMat);
      eyelid.rotation.z = Math.PI;
      eyelid.position.set(0, 0.015, 0);
      eyelid.scale.set(1.05, 0.05, 1.05); // Closed when scale.y goes to 1.0
      eyeGroup.add(eyelid);

      this.eyes.push({ group: eyeGroup, eyelid: eyelid, iris: iris, pupil: pupil });
      this.headGroup.add(eyeGroup);
    });
  }

  buildBeakAndPouch() {
    this.beakGroup = new THREE.Group();
    this.beakGroup.position.set(0.11, -0.01, 0);
    this.headGroup.add(this.beakGroup);

    // Upper Bill: Long, aerodynamic, characteristic pelican shape
    const upperBillGeom = new THREE.ConeGeometry(0.055, 0.54, 16);
    upperBillGeom.scale(1.0, 1.0, 0.45);
    const upperBill = new THREE.Mesh(upperBillGeom, this.billMat);
    upperBill.rotation.z = -Math.PI / 2;
    upperBill.position.set(0.27, 0.015, 0);
    upperBill.castShadow = true;
    this.beakGroup.add(upperBill);

    // Hook Tip on Upper Bill
    const tipGeom = new THREE.ConeGeometry(0.028, 0.08, 12);
    const tipMesh = new THREE.Mesh(tipGeom, this.billTipMat);
    tipMesh.rotation.z = -Math.PI * 0.82;
    tipMesh.position.set(0.53, -0.01, 0);
    this.beakGroup.add(tipMesh);

    // Lower Beak & Elastic Gular Pouch (Rotates open when squawking)
    this.lowerBeakGroup = new THREE.Group();
    this.lowerBeakGroup.position.set(0.02, -0.02, 0);
    this.beakGroup.add(this.lowerBeakGroup);

    // Lower mandible struts (Left and right thin jaw bones)
    [-0.038, 0.038].forEach(z => {
      const jawGeom = new THREE.CylinderGeometry(0.012, 0.008, 0.50, 8);
      const jaw = new THREE.Mesh(jawGeom, this.billMat);
      jaw.rotation.z = -Math.PI / 2;
      jaw.position.set(0.25, -0.01, z);
      this.lowerBeakGroup.add(jaw);
    });

    // The Famous Giant Gular Pouch (Throat Sac)
    // Procedural lofted mesh with spring physics
    const pouchGeom = new THREE.SphereGeometry(0.18, 20, 16);
    pouchGeom.scale(1.8, 0.95, 0.45);
    this.pouchMesh = new THREE.Mesh(pouchGeom, this.pouchMat);
    this.pouchMesh.position.set(0.24, -0.09, 0);
    this.pouchMesh.castShadow = true;
    this.lowerBeakGroup.add(this.pouchMesh);
  }

  buildGoggles() {
    this.gogglesGroup = new THREE.Group();
    this.gogglesGroup.position.set(0.04, 0.09, 0);

    // Leather Strap around head
    const strapCurve = new THREE.EllipseCurve(0, 0, 0.12, 0.09, 0, Math.PI * 2, false, 0);
    const strapPoints = strapCurve.getPoints(24);
    const strapGeom = new THREE.BufferGeometry().setFromPoints(strapPoints);
    const strap = new THREE.Line(strapGeom, new THREE.LineBasicMaterial({ color: 0x3d2614, linewidth: 4 }));
    strap.rotation.x = Math.PI / 2;
    this.gogglesGroup.add(strap);

    // Twin Goggle Lenses pushed up on forehead
    [-0.05, 0.05].forEach(z => {
      // Brass Rim
      const rimGeom = new THREE.TorusGeometry(0.032, 0.007, 10, 20);
      const rim = new THREE.Mesh(rimGeom, this.goggleRimMat);
      rim.position.set(0.08, 0.03, z);
      rim.rotation.y = Math.PI / 2;
      this.gogglesGroup.add(rim);

      // Glass Lens
      const lensGeom = new THREE.CircleGeometry(0.030, 16);
      const lens = new THREE.Mesh(lensGeom, this.goggleLensMat);
      lens.position.set(0.082, 0.03, z);
      lens.rotation.y = Math.PI / 2;
      this.gogglesGroup.add(lens);
    });

    this.headGroup.add(this.gogglesGroup);
  }

  buildWings() {
    this.leftWing = new THREE.Group();
    this.rightWing = new THREE.Group();

    // Wings anchored at shoulders
    this.leftWing.position.set(0.12, 0.22, -0.16);
    this.rightWing.position.set(0.12, 0.22, 0.16);

    const makeWing = (wingGroup, isRight) => {
      const sign = isRight ? 1 : -1;

      // Shoulder to Elbow (Upper Wing)
      const upperWingGeom = new THREE.CylinderGeometry(0.045, 0.06, 0.28, 12);
      upperWingGeom.scale(1.0, 1.0, 0.5);
      const upperWing = new THREE.Mesh(upperWingGeom, this.featherWhiteMat);
      upperWing.position.set(0.06, -0.10, sign * 0.04);
      upperWing.rotation.z = -0.55;
      upperWing.rotation.x = sign * 0.3;
      wingGroup.add(upperWing);

      // Forearm to Hand/Handlebars
      const forearmGeom = new THREE.CylinderGeometry(0.035, 0.045, 0.32, 12);
      forearmGeom.scale(1.0, 1.0, 0.4);
      const forearm = new THREE.Mesh(forearmGeom, this.featherWhiteMat);
      forearm.position.set(0.24, -0.16, sign * 0.08);
      forearm.rotation.z = -1.25;
      wingGroup.add(forearm);

      // Primary Feather Hand Tips grasping handlebars
      const handGeom = new THREE.BoxGeometry(0.06, 0.04, 0.12);
      const hand = new THREE.Mesh(handGeom, this.featherDarkMat);
      hand.position.set(0.38, -0.14, sign * 0.10);
      hand.rotation.y = sign * 0.25;
      wingGroup.add(hand);
    };

    makeWing(this.leftWing, false);
    makeWing(this.rightWing, true);

    this.torso.add(this.leftWing);
    this.torso.add(this.rightWing);
  }

  buildLegs() {
    this.leftLeg = this.createLeg(false);
    this.rightLeg = this.createLeg(true);

    this.pelvis.add(this.leftLeg.root);
    this.pelvis.add(this.rightLeg.root);
  }

  createLeg(isRight) {
    const sign = isRight ? 1 : -1;
    const legRoot = new THREE.Group();
    // Hip joint position
    legRoot.position.set(0.02, 0.04, sign * this.hipOffsetZ);

    // Thigh (Upper Leg)
    const thighGroup = new THREE.Group();
    legRoot.add(thighGroup);

    const thighGeom = new THREE.CylinderGeometry(0.032, 0.028, this.thighLen, 12);
    const thighMesh = new THREE.Mesh(thighGeom, this.featherWhiteMat);
    thighMesh.position.set(0, -this.thighLen * 0.5, 0);
    thighMesh.castShadow = true;
    thighGroup.add(thighMesh);

    // Knee Joint
    const kneeGroup = new THREE.Group();
    kneeGroup.position.set(0, -this.thighLen, 0);
    thighGroup.add(kneeGroup);

    const kneeCap = new THREE.Mesh(new THREE.SphereGeometry(0.030, 10, 8), this.legMat);
    kneeGroup.add(kneeCap);

    // Shin (Lower Leg)
    const shinGroup = new THREE.Group();
    kneeGroup.add(shinGroup);

    const shinGeom = new THREE.CylinderGeometry(0.024, 0.020, this.shinLen, 12);
    const shinMesh = new THREE.Mesh(shinGeom, this.legMat);
    shinMesh.position.set(0, -this.shinLen * 0.5, 0);
    shinMesh.castShadow = true;
    shinGroup.add(shinMesh);

    // Ankle & Webbed Foot
    const footGroup = new THREE.Group();
    footGroup.position.set(0, -this.shinLen, 0);
    shinGroup.add(footGroup);

    // Ankle joint
    const ankleMesh = new THREE.Mesh(new THREE.SphereGeometry(0.022, 10, 8), this.legMat);
    footGroup.add(ankleMesh);

    // Webbed Pelican Foot (3 splayed orange toes with web)
    const webbedFoot = new THREE.Group();
    const toeGeom = new THREE.BoxGeometry(0.12, 0.012, 0.022);

    // Center toe
    const toeC = new THREE.Mesh(toeGeom, this.legMat);
    toeC.position.set(0.06, 0, 0);
    webbedFoot.add(toeC);

    // Left toe
    const toeL = new THREE.Mesh(toeGeom, this.legMat);
    toeL.position.set(0.055, 0, -0.035);
    toeL.rotation.y = -0.35;
    webbedFoot.add(toeL);

    // Right toe
    const toeR = new THREE.Mesh(toeGeom, this.legMat);
    toeR.position.set(0.055, 0, 0.035);
    toeR.rotation.y = 0.35;
    webbedFoot.add(toeR);

    // Webbing Membrane (Thin triangular fan)
    const webShape = new THREE.Shape();
    webShape.moveTo(0, 0);
    webShape.lineTo(0.11, -0.05);
    webShape.lineTo(0.12, 0);
    webShape.lineTo(0.11, 0.05);
    webShape.closePath();
    const webGeom = new THREE.ShapeGeometry(webShape);
    const webMesh = new THREE.Mesh(webGeom, this.legMat);
    webMesh.rotation.x = Math.PI / 2;
    webMesh.position.set(0, -0.002, 0);
    webbedFoot.add(webMesh);

    footGroup.add(webbedFoot);

    return {
      root: legRoot,
      thighGroup,
      kneeGroup,
      shinGroup,
      footGroup,
      isRight
    };
  }

  // Two-Bone Analytical Inverse Kinematics Solver
  solveLegIK(leg, targetWorldPos) {
    // Convert target pedal position into hip's local coordinate frame
    const hipWorldPos = new THREE.Vector3();
    leg.root.getWorldPosition(hipWorldPos);

    // Target vector from hip to pedal
    const toTarget = new THREE.Vector3().subVectors(targetWorldPos, hipWorldPos);
    let dist = toTarget.length();

    // Prevent singularity: clamp distance to reach limit
    const maxReach = (this.thighLen + this.shinLen) * 0.995;
    const minReach = Math.abs(this.thighLen - this.shinLen) * 1.05;
    dist = Math.max(minReach, Math.min(dist, maxReach));

    // Law of Cosines to calculate internal angles
    // cos(thighAngle) = (L1^2 + D^2 - L2^2) / (2 * L1 * D)
    const cosThigh = (this.thighLen * this.thighLen + dist * dist - this.shinLen * this.shinLen) /
      (2 * this.thighLen * dist);
    const thighAngle = Math.acos(Math.max(-1, Math.min(1, cosThigh)));

    // cos(kneeAngle) = (L1^2 + L2^2 - D^2) / (2 * L1 * L2)
    const cosKnee = (this.thighLen * this.thighLen + this.shinLen * this.shinLen - dist * dist) /
      (2 * this.thighLen * this.shinLen);
    const kneeAngle = Math.PI - Math.acos(Math.max(-1, Math.min(1, cosKnee)));

    // Direction vector in world space
    const dir = toTarget.clone().normalize();

    // Pitch & Yaw of leg direction
    const pitch = Math.atan2(dir.x, -dir.y);
    const roll = Math.atan2(dir.z, Math.sqrt(dir.x * dir.x + dir.y * dir.y));

    // Apply rotation to Thigh
    leg.thighGroup.rotation.set(0, 0, 0);
    leg.thighGroup.rotation.z = pitch - thighAngle;
    leg.thighGroup.rotation.x = roll * (leg.isRight ? 0.4 : -0.4);

    // Apply rotation to Knee
    leg.kneeGroup.rotation.set(0, 0, 0);
    leg.kneeGroup.rotation.z = kneeAngle;

    // Foot alignment to pedal surface (keep foot flat)
    leg.footGroup.rotation.set(0, 0, 0);
    leg.footGroup.rotation.z = -(leg.thighGroup.rotation.z + leg.kneeGroup.rotation.z);
  }

  // Squawk / Honk animation trigger
  honk() {
    this.honkAmount = 1.0;
  }

  // Frame update
  update(delta, speed, isWheelie = false) {
    // 1. Cadence & Body Sway Dynamics
    // Body sways gently side-to-side in rhythm with pedal strokes
    const crankAngle = this.bicycle.crankAngle;
    const swayTarget = Math.sin(crankAngle) * 0.07;
    this.cadenceSway += (swayTarget - this.cadenceSway) * Math.min(delta * 10, 1);
    this.pelvis.rotation.z = this.cadenceSway;
    this.pelvis.rotation.x = Math.sin(crankAngle * 0.5) * 0.03;

    // Aerodynamic Racing Tuck when sprinting
    const sprintTuck = Math.max(0, Math.min((speed - 4.5) * 0.035, 0.22));
    this.torso.rotation.z = -0.22 - sprintTuck;
    this.neckBase.rotation.z = -sprintTuck * 0.7;
    // Head bobs forward and back with determination
    this.headBobPhase += delta * Math.max(speed * 3.5, 2.0);
    const headBobX = Math.cos(this.headBobPhase) * 0.03;
    const headBobY = Math.sin(this.headBobPhase * 2) * 0.02;
    this.headGroup.position.x = 0.04 + headBobX;
    this.headGroup.position.y = 0.19 + headBobY;

    // Bird Gyro Head Stabilization: counter-rotate head against body sway
    this.headGroup.rotation.z = -this.pelvis.rotation.z * 0.6;

    // 2. Throat Pouch Elastic Spring Physics
    // Jiggles when riding, bounces on bumps, expands during honk
    const springK = 60.0;
    const damping = 7.5;
    const bumpForce = (Math.random() - 0.5) * speed * 0.15;
    const targetY = (this.honkAmount * -0.06) + bumpForce;

    const force = -springK * (this.pouchY - targetY) - damping * this.pouchVel;
    this.pouchVel += force * delta;
    this.pouchY += this.pouchVel * delta;

    this.pouchMesh.position.y = -0.09 + this.pouchY;
    this.pouchMesh.scale.set(
      1.8 + this.honkAmount * 0.4,
      0.95 + Math.abs(this.pouchY) * 2.0 + this.honkAmount * 0.5,
      0.45 + this.honkAmount * 0.3
    );

    // 3. Beak Squawk Animation
    if (this.honkAmount > 0.01) {
      this.honkAmount -= delta * 3.2;
      this.lowerBeakGroup.rotation.z = -this.honkAmount * 0.45; // Opens beak wide!
    } else {
      this.lowerBeakGroup.rotation.z = 0;
      this.honkAmount = 0;
    }

    // 4. Random Eye Blinking
    this.blinkTimer += delta;
    if (!this.isBlinking && this.blinkTimer > 3.5 + Math.random() * 3.0) {
      this.isBlinking = true;
      this.blinkTimer = 0;
      this.blinkProgress = 0;
    }

    if (this.isBlinking) {
      this.blinkProgress += delta * 12.0; // Fast blink
      const lidScale = Math.sin(this.blinkProgress) * 0.95;
      this.eyes.forEach(eye => {
        eye.eyelid.scale.y = 0.05 + lidScale * 0.95;
      });
      if (this.blinkProgress >= Math.PI) {
        this.isBlinking = false;
        this.eyes.forEach(eye => { eye.eyelid.scale.y = 0.05; });
      }
    }
    // Pupil micro-saccades / tracking road
    const glance = Math.sin(Date.now() * 0.002) * 0.003;
    this.eyes.forEach(eye => {
      eye.pupil.position.y = glance;
    });

    // 5. Wings Adaptation (Wheelie / Gliding)
    if (isWheelie) {
      // Wings spread wide in joy during turbo wheelie!
      this.leftWing.rotation.z = Math.PI * 0.25;
      this.rightWing.rotation.z = Math.PI * 0.25;
      this.leftWing.rotation.y = -0.4;
      this.rightWing.rotation.y = 0.4;
    } else {
      this.leftWing.rotation.set(0, 0, 0);
      this.rightWing.rotation.set(0, 0, 0);
    }

    // 6. Two-Bone Inverse Kinematics for Pedaling Legs
    const pedals = this.bicycle.getPedalWorldPositions();
    this.solveLegIK(this.leftLeg, pedals.left);
    this.solveLegIK(this.rightLeg, pedals.right);
  }
}
