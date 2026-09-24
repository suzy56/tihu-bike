import * as THREE from 'three';

// Procedural 2D Canvas Texture Generator
// Zero external asset dependencies - generates studio-grade PBR texture maps dynamically

export class TextureGenerator {
  // 1. Procedural Asphalt Road Map (Diffuse & Bump)
  static createAsphaltTexture() {
    const size = 512;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    // Base dark asphalt grey
    ctx.fillStyle = '#22252a';
    ctx.fillRect(0, 0, size, size);

    // Fine mineral grain
    const imgData = ctx.getImageData(0, 0, size, size);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 40;
      data[i] = Math.max(0, Math.min(255, data[i] + noise));
      data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise));
      data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise));
    }
    ctx.putImageData(imgData, 0, 0);

    // Subtle aggregate flecks / pebbles
    for (let i = 0; i < 600; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const r = Math.random() * 1.5 + 0.5;
      const brightness = Math.floor(Math.random() * 80 + 70);
      ctx.fillStyle = `rgb(${brightness},${brightness},${brightness})`;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(16, 2);
    return texture;
  }

  // 2. Pelican Beak Keratin Texture (Gradient + Longitudinal Ridges)
  static createBeakTexture() {
    const w = 512, h = 128;
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');

    // Gradient along beak: base (golden yellow) -> mid (warm apricot) -> tip (deep crimson)
    const grad = ctx.createLinearGradient(0, 0, w, 0);
    grad.addColorStop(0.0, '#ffb703'); // Golden yellow base
    grad.addColorStop(0.35, '#fb8500'); // Vibrant apricot mid
    grad.addColorStop(0.75, '#e63946'); // Deep amber red
    grad.addColorStop(1.0, '#9e0012'); // Dark hooked tip
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Natural keratin striations / fine bill ridges
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1;
    for (let i = 0; i < h; i += 4) {
      ctx.beginPath();
      ctx.moveTo(0, i + (Math.random() - 0.5) * 2);
      ctx.lineTo(w, i + (Math.random() - 0.5) * 2);
      ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }

  // 3. Vintage Saddle Leather (Crinkle texture & Stitching)
  static createLeatherTexture() {
    const size = 256;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    // Rich warm saddle tan/brown
    ctx.fillStyle = '#653a1e';
    ctx.fillRect(0, 0, size, size);

    // Leather pores & crinkles
    const imgData = ctx.getImageData(0, 0, size, size);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 35;
      data[i] = Math.max(0, Math.min(255, data[i] + noise));
      data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise * 0.7));
      data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise * 0.4));
    }
    ctx.putImageData(imgData, 0, 0);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(3, 3);
    return texture;
  }

  // 4. Bicycle Tire Rubber Tread Bump Map
  static createTireTreadTexture() {
    const w = 512, h = 64;
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');

    // Neutral height
    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, w, h);

    // Chevron / Arrowhead tread grooves (white = raised, black = groove)
    ctx.strokeStyle = '#202020';
    ctx.lineWidth = 3;
    const spacing = 16;

    for (let x = 0; x < w; x += spacing) {
      // Left chevron
      ctx.beginPath();
      ctx.moveTo(x, h * 0.5);
      ctx.lineTo(x + 10, 4);
      ctx.stroke();

      // Right chevron
      ctx.beginPath();
      ctx.moveTo(x, h * 0.5);
      ctx.lineTo(x + 10, h - 4);
      ctx.stroke();
    }

    // Center continuous rib
    ctx.fillStyle = '#d0d0d0';
    ctx.fillRect(0, h * 0.46, w, h * 0.08);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(12, 1);
    return texture;
  }

  // 5. Wicker Basket Woven Pattern
  static createWickerTexture() {
    const size = 128;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#caa472';
    ctx.fillRect(0, 0, size, size);

    // Woven reed bands
    ctx.fillStyle = '#a27b4b';
    const bandSize = 16;
    for (let x = 0; x < size; x += bandSize * 2) {
      for (let y = 0; y < size; y += bandSize * 2) {
        ctx.fillRect(x, y, bandSize, bandSize);
        ctx.fillRect(x + bandSize, y + bandSize, bandSize, bandSize);
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4);
    return texture;
  }

  // 6. Dynamic IBL Environment Skybox Texture (Equirectangular)
  static createEnvironmentMap(theme = 'sunset') {
    const w = 1024, h = 512;
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, 0, h);

    if (theme === 'day') {
      grad.addColorStop(0.0, '#1d8cf8'); // Zenit Blue
      grad.addColorStop(0.45, '#90e0ef'); // Horizon cyan
      grad.addColorStop(0.50, '#caf0f8'); // Seafoam horizon
      grad.addColorStop(0.55, '#0077b6'); // Sea reflection
      grad.addColorStop(1.0, '#023e8a'); // Deep sea ground
    } else if (theme === 'sunset') {
      grad.addColorStop(0.0, '#3a0ca3'); // Violet upper sky
      grad.addColorStop(0.35, '#f72585'); // Magenta glow
      grad.addColorStop(0.48, '#ff9e00'); // Blazing golden horizon
      grad.addColorStop(0.52, '#ff6000'); // Sun water specular
      grad.addColorStop(0.70, '#5f0f40'); // Dark purple sea
      grad.addColorStop(1.0, '#0f051d'); // Deep ground
    } else if (theme === 'cyberpunk') {
      grad.addColorStop(0.0, '#10002b'); // Night indigo
      grad.addColorStop(0.45, '#7209b7'); // Neon purple
      grad.addColorStop(0.50, '#f72585'); // Hot pink horizon
      grad.addColorStop(0.55, '#4cc9f0'); // Cyan reflection
      grad.addColorStop(1.0, '#03071e');
    } else { // night
      grad.addColorStop(0.0, '#03071e'); // Deep black-blue
      grad.addColorStop(0.45, '#0d1b2a'); // Navy horizon
      grad.addColorStop(0.50, '#1b263b'); // Moonlight line
      grad.addColorStop(0.55, '#415a77'); // Silver water reflection
      grad.addColorStop(1.0, '#050a12');
    }

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Glowing sun disc on the horizon
    if (theme === 'sunset' || theme === 'day') {
      const sunX = w * 0.45;
      const sunY = h * 0.48;
      const sunGrad = ctx.createRadialGradient(sunX, sunY, 4, sunX, sunY, 80);
      sunGrad.addColorStop(0, '#ffffff');
      sunGrad.addColorStop(0.2, '#ffe066');
      sunGrad.addColorStop(0.6, 'rgba(255, 120, 0, 0.4)');
      sunGrad.addColorStop(1, 'rgba(255, 120, 0, 0)');
      ctx.fillStyle = sunGrad;
      ctx.fillRect(sunX - 100, sunY - 100, 200, 200);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.mapping = THREE.EquirectangularReflectionMapping;
    return texture;
  }
}
