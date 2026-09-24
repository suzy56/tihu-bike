import * as THREE from 'three';

export class Bicycle {
  constructor() {
    this.group = new THREE.Group();

    // Key dimensions (meters)
    this.wheelRadius = 0.42;
    this.wheelBase = 1.25;
    this.bbHeight = 0.32; // Bottom bracket height from ground
    this.crankLength = 0.19;
    this.pedalSpread = 0.22; // Distance from center to left/right pedal

    // State & Rotation tracking
    this.wheelAngle = 0;
    this.crankAngle = 0;
    this.steerAngle = 0;
    this.speed = 0;
    this.wheelieAngle = 0;

    this.createMaterials();
    this.buildBicycle();
  }

  createMaterials() {
    // Vintage Turquoise / Seafoam Enamel Frame
    this.frameMat = new THREE.MeshStandardMaterial({
      color: 0x18a999,
      roughness: 0.2,
      metalness: 0.6,
      envMapIntensity: 1.2
    });

    // Bright Chrome for handlebars, rims, spokes, bell, crank
    this.chromeMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.1,
      metalness: 0.95
    });

    // Dark Vintage Leather for Saddle & Grips
    this.leatherMat = new THREE.MeshStandardMaterial({
      color: 0x5c3317,
      roughness: 0.6,
      metalness: 0.1
    });

    // Rubber Tires
    this.rubberMat = new THREE.MeshStandardMaterial({
      color: 0x1f1f22,
      roughness: 0.85,
      metalness: 0.05
    });

    // Brass Bell
    this.brassMat = new THREE.MeshStandardMaterial({
      color: 0xe6b800,
      roughness: 0.25,
      metalness: 0.9
    });

    // Wicker Basket
    this.wickerMat = new THREE.MeshStandardMaterial({
      color: 0xd4a373,
      roughness: 0.8,
      metalness: 0.05
    });

    // Silvery Fish
    this.fishMat = new THREE.MeshStandardMaterial({
      color: 0xa8dadc,
      roughness: 0.2,
      metalness: 0.8
    });

    // Headlight glowing glass
    this.glassMat = new THREE.MeshStandardMaterial({
      color: 0xfffae0,
      roughness: 0.1,
      metalness: 0.1,
      emissive: 0xffe680,
      emissiveIntensity: 0.6,
      transparent: true,
      opacity: 0.9
    });
  }

  buildBicycle() {
    // Root bicycle frame container
    this.bikeBody = new THREE.Group();
    this.group.add(this.bikeBody);

    // Bottom Bracket Position (World center of drivetrain)
    this.bbPos = new THREE.Vector3(0, this.bbHeight, 0);

    // Front & Rear Axle Positions relative to BB
    this.rearAxlePos = new THREE.Vector3(-this.wheelBase * 0.52, this.wheelRadius, 0);
    this.frontAxlePos = new THREE.Vector3(this.wheelBase * 0.48, this.wheelRadius, 0);

    // Head Tube Top & Bottom
    this.headTubeBottom = new THREE.Vector3(this.wheelBase * 0.40, this.wheelRadius + 0.38, 0);
    this.headTubeTop = new THREE.Vector3(this.wheelBase * 0.36, this.wheelRadius + 0.56, 0);

    // Seat Post Cluster
    this.seatClusterPos = new THREE.Vector3(-this.wheelBase * 0.14, this.bbHeight + 0.46, 0);

    this.buildFrame();
    this.buildWheels();
    this.buildForkAndHandlebars();
    this.buildDrivetrain();
    this.buildSaddle();
    this.buildBasketAndFish();
    this.buildFendersAndRack();
  }

  buildFrame() {
    const frameGroup = new THREE.Group();

    // Helper to build a cylinder between two 3D points
    const addTube = (p1, p2, radius, mat = this.frameMat) => {
      const dir = new THREE.Vector3().subVectors(p2, p1);
      const len = dir.length();
      const geom = new THREE.CylinderGeometry(radius, radius, len, 16);
      const mesh = new THREE.Mesh(geom, mat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      // Position at midpoint
      mesh.position.copy(p1).addScaledVector(dir, 0.5);
      // Orient along dir vector
      mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
      frameGroup.add(mesh);
      return mesh;
    };

    // Bottom bracket shell
    const bbGeom = new THREE.CylinderGeometry(0.032, 0.032, 0.12, 16);
    const bbMesh = new THREE.Mesh(bbGeom, this.chromeMat);
    bbMesh.rotation.x = Math.PI / 2;
    bbMesh.position.copy(this.bbPos);
    frameGroup.add(bbMesh);

    // Seat Tube (BB -> Seat Cluster)
    addTube(this.bbPos, this.seatClusterPos, 0.022);

    // Down Tube (BB -> Head Tube Bottom)
    addTube(this.bbPos, this.headTubeBottom, 0.024);

    // Head Tube
    addTube(this.headTubeBottom, this.headTubeTop, 0.026);

    // Curved Top Tube (Twin sweeping cruiser tubes)
    [-0.018, 0.018].forEach(zOffset => {
      const pStart = this.seatClusterPos.clone().add(new THREE.Vector3(0, -0.04, zOffset));
      const pMid = new THREE.Vector3(
        (this.seatClusterPos.x + this.headTubeTop.x) * 0.5,
        this.headTubeTop.y - 0.06,
        zOffset * 1.5
      );
      const pEnd = this.headTubeTop.clone().add(new THREE.Vector3(0, -0.05, zOffset));

      const curve = new THREE.QuadraticBezierCurve3(pStart, pMid, pEnd);
      const tubeGeom = new THREE.TubeGeometry(curve, 20, 0.014, 12, false);
      const tubeMesh = new THREE.Mesh(tubeGeom, this.frameMat);
      tubeMesh.castShadow = true;
      frameGroup.add(tubeMesh);
    });

    // Rear Chainstays (BB -> Rear Axle, Left & Right)
    [-0.055, 0.055].forEach(z => {
      const p1 = this.bbPos.clone().add(new THREE.Vector3(0, 0, z * 0.7));
      const p2 = this.rearAxlePos.clone().add(new THREE.Vector3(0, 0, z));
      addTube(p1, p2, 0.015);
    });

    // Rear Seatstays (Seat Cluster -> Rear Axle, Left & Right)
    [-0.055, 0.055].forEach(z => {
      const p1 = this.seatClusterPos.clone().add(new THREE.Vector3(0, -0.03, z * 0.5));
      const p2 = this.rearAxlePos.clone().add(new THREE.Vector3(0, 0, z));
      addTube(p1, p2, 0.014);
    });

    this.bikeBody.add(frameGroup);
  }

  createSpokedWheel() {
    const wheel = new THREE.Group();

    // Tire (torus)
    const tireGeom = new THREE.TorusGeometry(this.wheelRadius - 0.035, 0.035, 18, 48);
    const tire = new THREE.Mesh(tireGeom, this.rubberMat);
    tire.castShadow = true;
    wheel.add(tire);

    // Rim (inner torus with chrome)
    const rimGeom = new THREE.TorusGeometry(this.wheelRadius - 0.045, 0.016, 12, 48);
    const rim = new THREE.Mesh(rimGeom, this.chromeMat);
    wheel.add(rim);

    // Center Hub
    const hubGeom = new THREE.CylinderGeometry(0.024, 0.024, 0.08, 16);
    const hub = new THREE.Mesh(hubGeom, this.chromeMat);
    hub.rotation.x = Math.PI / 2;
    wheel.add(hub);

    // Spokes (32 spokes in classic cross pattern)
    const spokeCount = 28;
    const spokeGeom = new THREE.CylinderGeometry(0.0018, 0.0018, this.wheelRadius - 0.05, 4);

    for (let i = 0; i < spokeCount; i++) {
      const angle = (i / spokeCount) * Math.PI * 2;
      const isRightSide = i % 2 === 0;
      const spoke = new THREE.Mesh(spokeGeom, this.chromeMat);

      // Offset slightly left/right on hub
      const zOffset = isRightSide ? 0.025 : -0.025;
      const rimTarget = new THREE.Vector3(
        Math.cos(angle) * (this.wheelRadius - 0.045),
        Math.sin(angle) * (this.wheelRadius - 0.045),
        0
      );
      const hubTarget = new THREE.Vector3(
        Math.cos(angle + 0.3) * 0.02,
        Math.sin(angle + 0.3) * 0.02,
        zOffset
      );

      const dir = new THREE.Vector3().subVectors(rimTarget, hubTarget);
      spoke.position.copy(hubTarget).addScaledVector(dir, 0.5);
      spoke.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
      wheel.add(spoke);
    }

    return wheel;
  }

  buildWheels() {
    // Rear Wheel
    this.rearWheelGroup = new THREE.Group();
    this.rearWheelGroup.position.copy(this.rearAxlePos);
    this.rearWheelMesh = this.createSpokedWheel();
    this.rearWheelGroup.add(this.rearWheelMesh);
    this.bikeBody.add(this.rearWheelGroup);

    // Rear Sprocket
    const cogGeom = new THREE.CylinderGeometry(0.045, 0.045, 0.006, 18);
    const cogMesh = new THREE.Mesh(cogGeom, this.chromeMat);
    cogMesh.rotation.x = Math.PI / 2;
    cogMesh.position.set(0, 0, 0.035);
    this.rearWheelMesh.add(cogMesh);
  }

  buildForkAndHandlebars() {
    // Steering assembly rotates around the head tube axis
    this.steerGroup = new THREE.Group();
    this.steerGroup.position.copy(this.headTubeBottom);

    // Calculate head tube angle
    const forkDir = new THREE.Vector3().subVectors(this.frontAxlePos, this.headTubeBottom);
    this.forkAngle = Math.atan2(forkDir.x, -forkDir.y);

    // Steerer tube through head tube
    const steererLen = 0.38;
    const steererGeom = new THREE.CylinderGeometry(0.018, 0.018, steererLen, 16);
    const steerer = new THREE.Mesh(steererGeom, this.chromeMat);
    steerer.position.set(0, steererLen * 0.5, 0);
    this.steerGroup.add(steerer);

    // Crown
    const crownGeom = new THREE.BoxGeometry(0.05, 0.03, 0.12);
    const crown = new THREE.Mesh(crownGeom, this.frameMat);
    crown.position.set(0, 0, 0);
    this.steerGroup.add(crown);

    // Fork Blades (Twin blades running down to front axle)
    const forkBladeLen = forkDir.length();
    [-0.05, 0.05].forEach(z => {
      const bladeGeom = new THREE.CylinderGeometry(0.016, 0.012, forkBladeLen, 12);
      const blade = new THREE.Mesh(bladeGeom, this.frameMat);
      blade.castShadow = true;
      blade.position.set(forkDir.x * 0.5, forkDir.y * 0.5, z);
      blade.rotation.z = -this.forkAngle;
      this.steerGroup.add(blade);
    });

    // Front Wheel inside Fork
    this.frontWheelGroup = new THREE.Group();
    this.frontWheelGroup.position.set(forkDir.x, forkDir.y, 0);
    this.frontWheelMesh = this.createSpokedWheel();
    this.frontWheelGroup.add(this.frontWheelMesh);
    this.steerGroup.add(this.frontWheelGroup);

    // Stem (rising up and curving forward from steerer)
    const stemGeom = new THREE.CylinderGeometry(0.016, 0.016, 0.16, 12);
    const stem = new THREE.Mesh(stemGeom, this.chromeMat);
    stem.position.set(0.02, steererLen + 0.04, 0);
    stem.rotation.z = -0.2;
    this.steerGroup.add(stem);

    // Swept-Back Cruiser Handlebars
    const hbCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.06, steererLen + 0.12, -0.28),
      new THREE.Vector3(-0.02, steererLen + 0.13, -0.18),
      new THREE.Vector3(0.02, steererLen + 0.12, 0),
      new THREE.Vector3(-0.02, steererLen + 0.13, 0.18),
      new THREE.Vector3(-0.06, steererLen + 0.12, 0.28)
    ]);
    const hbGeom = new THREE.TubeGeometry(hbCurve, 24, 0.012, 12, false);
    const handlebars = new THREE.Mesh(hbGeom, this.chromeMat);
    handlebars.castShadow = true;
    this.steerGroup.add(handlebars);

    // Rubber Grips
    [-0.24, 0.24].forEach(z => {
      const gripGeom = new THREE.CylinderGeometry(0.016, 0.016, 0.09, 12);
      const grip = new THREE.Mesh(gripGeom, this.leatherMat);
      grip.position.set(-0.04, steererLen + 0.12, z);
      grip.rotation.z = Math.PI / 2;
      grip.rotation.y = z > 0 ? 0.3 : -0.3;
      this.steerGroup.add(grip);
    });

    // Brass Bell on Left Handlebar
    this.bellMesh = new THREE.Group();
    const bellDome = new THREE.Mesh(new THREE.SphereGeometry(0.024, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.6), this.brassMat);
    const bellBase = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.022, 0.01, 16), this.chromeMat);
    const bellLever = new THREE.Mesh(new THREE.BoxGeometry(0.006, 0.012, 0.025), this.chromeMat);
    bellLever.position.set(-0.015, 0.01, -0.018);
    this.bellMesh.add(bellDome, bellBase, bellLever);
    this.bellMesh.position.set(-0.02, steererLen + 0.14, -0.16);
    this.steerGroup.add(this.bellMesh);

    // Vintage Bullet Headlight mounted above fork crown
    this.headlightGroup = new THREE.Group();
    this.headlightGroup.position.set(0.08, 0.08, 0);

    const hlBodyGeom = new THREE.ConeGeometry(0.045, 0.10, 16);
    const hlBody = new THREE.Mesh(hlBodyGeom, this.chromeMat);
    hlBody.rotation.z = -Math.PI / 2;
    this.headlightGroup.add(hlBody);

    const hlLens = new THREE.Mesh(new THREE.CircleGeometry(0.045, 16), this.glassMat);
    hlLens.position.set(0.05, 0, 0);
    hlLens.rotation.y = Math.PI / 2;
    this.headlightGroup.add(hlLens);

    // Actual Light Source
    this.headlight = new THREE.SpotLight(0xfffae0, 2.8, 18, Math.PI * 0.22, 0.4, 1.2);
    this.headlight.position.set(0.08, 0, 0);
    this.headlight.target.position.set(6, -1.2, 0);
    this.headlight.castShadow = true;
    this.headlight.shadow.mapSize.width = 512;
    this.headlight.shadow.mapSize.height = 512;
    this.headlightGroup.add(this.headlight);
    this.headlightGroup.add(this.headlight.target);

    this.steerGroup.add(this.headlightGroup);

    // Handlebar Grip Targets for Pelican Wings (World-relative hooks)
    this.leftGripTarget = new THREE.Vector3(-0.04, steererLen + 0.12, -0.23);
    this.rightGripTarget = new THREE.Vector3(-0.04, steererLen + 0.12, 0.23);

    this.bikeBody.add(this.steerGroup);
  }

  buildDrivetrain() {
    this.crankGroup = new THREE.Group();
    this.crankGroup.position.copy(this.bbPos);

    // Chainring (Big drive gear)
    const ringGeom = new THREE.CylinderGeometry(0.095, 0.095, 0.005, 24);
    const ring = new THREE.Mesh(ringGeom, this.chromeMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.set(0, 0, 0.045);
    this.crankGroup.add(ring);

    // Spider cutouts
    for (let i = 0; i < 5; i++) {
      const armGeom = new THREE.BoxGeometry(0.015, 0.08, 0.008);
      const arm = new THREE.Mesh(armGeom, this.chromeMat);
      arm.position.set(0, 0, 0.046);
      arm.rotation.z = (i / 5) * Math.PI * 2;
      this.crankGroup.add(arm);
    }

    // Right Crank Arm & Pedal
    this.rightCrankArm = new THREE.Group();
    const armGeomR = new THREE.BoxGeometry(0.018, this.crankLength, 0.012);
    const armMeshR = new THREE.Mesh(armGeomR, this.chromeMat);
    armMeshR.position.set(0, -this.crankLength * 0.5, 0.065);
    this.rightCrankArm.add(armMeshR);

    // Right Pedal
    this.rightPedal = new THREE.Group();
    this.rightPedal.position.set(0, -this.crankLength, 0.065 + 0.045);
    const pedalGeom = new THREE.BoxGeometry(0.065, 0.02, 0.09);
    const pedalMeshR = new THREE.Mesh(pedalGeom, this.rubberMat);
    pedalMeshR.castShadow = true;
    this.rightPedal.add(pedalMeshR);
    this.rightCrankArm.add(this.rightPedal);

    // Left Crank Arm & Pedal (180 deg opposite)
    this.leftCrankArm = new THREE.Group();
    const armGeomL = new THREE.BoxGeometry(0.018, this.crankLength, 0.012);
    const armMeshL = new THREE.Mesh(armGeomL, this.chromeMat);
    armMeshL.position.set(0, this.crankLength * 0.5, -0.065);
    this.leftCrankArm.add(armMeshL);

    // Left Pedal
    this.leftPedal = new THREE.Group();
    this.leftPedal.position.set(0, this.crankLength, -0.065 - 0.045);
    const pedalMeshL = new THREE.Mesh(pedalGeom, this.rubberMat);
    pedalMeshL.castShadow = true;
    this.leftPedal.add(pedalMeshL);
    this.leftCrankArm.add(this.leftPedal);

    this.crankGroup.add(this.rightCrankArm);
    this.crankGroup.add(this.leftCrankArm);
    this.bikeBody.add(this.crankGroup);

    // Simulated Chain Guard / Cover
    const guardShape = new THREE.Shape();
    guardShape.moveTo(0, 0.1);
    guardShape.lineTo(-0.48, 0.05);
    guardShape.lineTo(-0.48, -0.05);
    guardShape.lineTo(0, -0.1);
    guardShape.closePath();
    const guardGeom = new THREE.ExtrudeGeometry(guardShape, { depth: 0.012, bevelEnabled: false });
    const guard = new THREE.Mesh(guardGeom, this.frameMat);
    guard.position.copy(this.bbPos).add(new THREE.Vector3(0, 0, 0.048));
    this.bikeBody.add(guard);
  }

  buildSaddle() {
    this.saddleGroup = new THREE.Group();
    this.saddleGroup.position.copy(this.seatClusterPos).add(new THREE.Vector3(0, 0.10, 0));

    // Chrome Seatpost
    const postGeom = new THREE.CylinderGeometry(0.015, 0.015, 0.14, 12);
    const post = new THREE.Mesh(postGeom, this.chromeMat);
    post.position.set(0, -0.06, 0);
    this.saddleGroup.add(post);

    // Classic wide cruiser saddle top
    const saddleShape = new THREE.Shape();
    saddleShape.moveTo(-0.12, -0.09);
    saddleShape.quadraticCurveTo(-0.16, 0, -0.12, 0.09);
    saddleShape.quadraticCurveTo(-0.04, 0.10, 0.04, 0.035);
    saddleShape.quadraticCurveTo(0.14, 0.02, 0.16, 0);
    saddleShape.quadraticCurveTo(0.14, -0.02, 0.04, -0.035);
    saddleShape.quadraticCurveTo(-0.04, -0.10, -0.12, -0.09);

    const saddleGeom = new THREE.ExtrudeGeometry(saddleShape, {
      depth: 0.04,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.015,
      bevelThickness: 0.015
    });
    const saddleMesh = new THREE.Mesh(saddleGeom, this.leatherMat);
    saddleMesh.rotation.x = Math.PI / 2;
    saddleMesh.rotation.z = Math.PI;
    saddleMesh.position.set(0.02, 0.02, 0.02);
    saddleMesh.castShadow = true;
    this.saddleGroup.add(saddleMesh);

    // Dual Rear Springs under Saddle
    [-0.045, 0.045].forEach(z => {
      const springGeom = new THREE.CylinderGeometry(0.016, 0.016, 0.06, 12);
      const spring = new THREE.Mesh(springGeom, this.chromeMat);
      spring.position.set(-0.08, -0.02, z);
      this.saddleGroup.add(spring);
    });

    this.bikeBody.add(this.saddleGroup);

    // Hook position where pelican's pelvis/butt sits
    this.saddleSeatingPoint = new THREE.Vector3(
      this.seatClusterPos.x,
      this.seatClusterPos.y + 0.15,
      0
    );
  }

  buildBasketAndFish() {
    this.basketGroup = new THREE.Group();
    // Attached in front of handlebars
    this.basketGroup.position.set(0.16, 0.38, 0);

    // Wicker basket container
    const basketBox = new THREE.BoxGeometry(0.18, 0.16, 0.28);
    const basketMesh = new THREE.Mesh(basketBox, this.wickerMat);
    basketMesh.castShadow = true;
    this.basketGroup.add(basketMesh);

    // Basket rim
    const rimGeom = new THREE.BoxGeometry(0.19, 0.02, 0.29);
    const rimMesh = new THREE.Mesh(rimGeom, this.wickerMat);
    rimMesh.position.y = 0.08;
    this.basketGroup.add(rimMesh);

    // The Silvery Fish ("Bubbles" - with sunglasses!)
    this.fishGroup = new THREE.Group();
    this.fishGroup.position.set(0, 0.05, 0);
    this.fishGroup.rotation.y = 0.4;
    this.fishGroup.rotation.z = 0.2;

    // Fish Body
    const fishBodyGeom = new THREE.ConeGeometry(0.045, 0.18, 12);
    const fishBody = new THREE.Mesh(fishBodyGeom, this.fishMat);
    fishBody.rotation.z = Math.PI / 2;
    this.fishGroup.add(fishBody);

    // Fish Tail
    this.fishTail = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.08, 8), this.fishMat);
    this.fishTail.position.set(-0.11, 0, 0);
    this.fishTail.rotation.z = -Math.PI / 2;
    this.fishGroup.add(this.fishTail);

    // Fish Sunglasses! (Hilarious touch)
    const shadesMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
    const shadesMesh = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.015, 0.07), shadesMat);
    shadesMesh.position.set(0.05, 0.015, 0);
    this.fishGroup.add(shadesMesh);

    this.basketGroup.add(this.fishGroup);
    this.steerGroup.add(this.basketGroup);
  }

  buildFendersAndRack() {
    // Front Fender
    const frontFenderCurve = new THREE.EllipseCurve(
      0, 0,
      this.wheelRadius + 0.025, this.wheelRadius + 0.025,
      Math.PI * 0.12, Math.PI * 0.72,
      false, 0
    );
    const ffPoints = frontFenderCurve.getPoints(24);
    const ffShape = new THREE.BufferGeometry().setFromPoints(ffPoints);
    const ffMesh = new THREE.Line(ffShape, new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 3 }));
    this.frontWheelGroup.add(ffMesh);

    // Rear Fender
    const rearFenderCurve = new THREE.EllipseCurve(
      0, 0,
      this.wheelRadius + 0.025, this.wheelRadius + 0.025,
      Math.PI * 0.45, Math.PI * 1.15,
      false, 0
    );
    const rfPoints = rearFenderCurve.getPoints(24);
    const rfShape = new THREE.BufferGeometry().setFromPoints(rfPoints);
    const rfMesh = new THREE.Line(rfShape, new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 3 }));
    this.rearWheelGroup.add(rfMesh);

    // Rear Luggage Rack
    const rackGroup = new THREE.Group();
    rackGroup.position.set(this.seatClusterPos.x - 0.22, this.wheelRadius + 0.18, 0);

    const rackTop = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.015, 0.16), this.chromeMat);
    rackGroup.add(rackTop);

    // Rolled beach towel on the rack
    const towelGeom = new THREE.CylinderGeometry(0.05, 0.05, 0.20, 16);
    const towelMat = new THREE.MeshStandardMaterial({ color: 0xff6b6b, roughness: 0.8 });
    const towel = new THREE.Mesh(towelGeom, towelMat);
    towel.rotation.x = Math.PI / 2;
    towel.position.set(0, 0.055, 0);
    rackGroup.add(towel);

    this.bikeBody.add(rackGroup);
  }

  // Update kinematics and animations every frame
  update(delta, currentSpeed, steerInput, isWheelie = false) {
    this.speed = currentSpeed;

    // Angular velocity: omega = speed / radius
    const wheelRotSpeed = this.speed / this.wheelRadius;
    this.wheelAngle += wheelRotSpeed * delta;
    this.rearWheelMesh.rotation.z = -this.wheelAngle;
    this.frontWheelMesh.rotation.z = -this.wheelAngle;

    // Crank rotation: gear ratio ~2.4:1
    const crankRotSpeed = wheelRotSpeed / 2.4;
    this.crankAngle += crankRotSpeed * delta;
    this.crankGroup.rotation.z = -this.crankAngle;

    // Keep pedals horizontal as crank rotates
    this.rightPedal.rotation.z = this.crankAngle;
    this.leftPedal.rotation.z = this.crankAngle;

    // Steering smoothing
    const targetSteer = steerInput * 0.35;
    this.steerAngle += (targetSteer - this.steerAngle) * Math.min(delta * 12, 1);
    this.steerGroup.rotation.y = this.steerAngle;

    // Bike Frame Roll/Bank when steering
    const targetRoll = -this.steerAngle * Math.min(this.speed * 0.14, 0.28);
    this.bikeBody.rotation.z = targetRoll;

    // Wheelie Physics
    const targetWheelie = isWheelie ? 0.42 : 0;
    this.wheelieAngle += (targetWheelie - this.wheelieAngle) * Math.min(delta * 8, 1);
    this.bikeBody.position.y = Math.sin(this.wheelieAngle) * 0.35;
    this.bikeBody.rotation.z += this.wheelieAngle * 0.9;

    // Subtle road vibration bump
    if (this.speed > 0.5) {
      const bump = Math.sin(Date.now() * 0.02) * 0.003 * Math.min(this.speed * 0.2, 1);
      this.bikeBody.position.y += bump;
    }

    // Floppy fish tail wagging
    if (this.fishTail) {
      this.fishTail.rotation.y = Math.sin(Date.now() * 0.012 * (1 + this.speed * 0.2)) * 0.4;
    }
  }

  // Get current world coordinates of left and right pedals for the Pelican's feet
  getPedalWorldPositions() {
    const leftPos = new THREE.Vector3();
    const rightPos = new THREE.Vector3();

    this.leftPedal.getWorldPosition(leftPos);
    this.rightPedal.getWorldPosition(rightPos);

    return { left: leftPos, right: rightPos };
  }

  // Get handlebar grip positions for Pelican's wings
  getHandlebarGripWorldPositions() {

    // Transform local grip targets through steerGroup & bikeBody world matrices
    const lLocal = this.leftGripTarget.clone();
    const rLocal = this.rightGripTarget.clone();

    this.steerGroup.localToWorld(lLocal);
    this.steerGroup.localToWorld(rLocal);

    return { left: lLocal, right: rLocal };
  }
}
