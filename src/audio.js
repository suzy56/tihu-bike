// Web Audio API Procedural Sound Engine
// 100% self-contained synthesized audio - zero external audio assets required

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = true;
    this.bgmPlaying = false;
    this.bgmTimer = null;
    this.windNode = null;
    this.windGain = null;
    this.windFilter = null;
    this.oceanGain = null;
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    this.ctx = new AudioContext();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = 0.8;
    this.masterGain.connect(this.ctx.destination);

    this.setupWind();
    this.setupOcean();
    this.initialized = true;
  }

  resume() {
    if (!this.initialized) this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isMuted = false;
  }

  mute(mute = true) {
    this.isMuted = mute;
    if (this.masterGain) {
      this.masterGain.gain.setTargetAtTime(mute ? 0 : 0.8, this.ctx.currentTime, 0.05);
    }
  }

  toggleMute() {
    this.resume();
    this.mute(!this.isMuted);
    return !this.isMuted;
  }

  // Realistic Bicycle Bell (Dual strike: Ding-Ding!)
  playBell() {
    if (!this.initialized) this.init();
    this.resume();
    if (this.isMuted) return;

    const now = this.ctx.currentTime;
    this._strikeBell(now, 2350, 2890, 0.7);
    this._strikeBell(now + 0.14, 2520, 3100, 0.9);
  }

  _strikeBell(time, freq1, freq2, vol) {
    [freq1, freq2].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, time);
      // subtle vibrato
      osc.frequency.exponentialRampToValueAtTime(freq * 0.998, time + 1.2);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(freq, time);
      filter.Q.setValueAtTime(15, time);

      gain.gain.setValueAtTime(vol * (idx === 0 ? 0.7 : 0.5), time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + (idx === 0 ? 1.5 : 1.1));

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(time);
      osc.stop(time + 1.6);
    });
  }

  // Funny Pelican Honk / Squawk
  playHonk() {
    if (!this.initialized) this.init();
    this.resume();
    if (this.isMuted) return;

    const now = this.ctx.currentTime;
    const dur = 0.38;

    // Dual oscillator with formant filter sweep
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const formant = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc1.type = 'sawtooth';
    osc2.type = 'triangle';

    // Pelican vocal pitch modulation: starts raspy mid, drops down
    osc1.frequency.setValueAtTime(320, now);
    osc1.frequency.linearRampToValueAtTime(420, now + 0.08);
    osc1.frequency.exponentialRampToValueAtTime(180, now + dur);

    osc2.frequency.setValueAtTime(160, now);
    osc2.frequency.linearRampToValueAtTime(210, now + 0.08);
    osc2.frequency.exponentialRampToValueAtTime(90, now + dur);

    // Formant vocal filter
    formant.type = 'bandpass';
    formant.frequency.setValueAtTime(1100, now);
    formant.frequency.linearRampToValueAtTime(1450, now + 0.1);
    formant.frequency.exponentialRampToValueAtTime(650, now + dur);
    formant.Q.setValueAtTime(6, now);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.65, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

    osc1.connect(formant);
    osc2.connect(formant);
    formant.connect(gain);
    gain.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + dur);
    osc2.stop(now + dur);
  }

  // Chain and freewheel tick sound
  playChainTick(speedFactor = 1) {
    if (!this.initialized || this.isMuted) return;
    const now = this.ctx.currentTime;
    const bufferSize = this.ctx.sampleRate * 0.012; // 12ms burst
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(2800 + Math.random() * 400, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.06 * Math.min(speedFactor, 1.5), now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.015);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(now);
  }

  // Continuous Wind Rush sound scaling with speed
  setupWind() {
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    // Pinkish noise
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (last + 0.02 * white) / 1.02;
      last = data[i];
      data[i] *= 2.5;
    }

    this.windNode = this.ctx.createBufferSource();
    this.windNode.buffer = buffer;
    this.windNode.loop = true;

    this.windFilter = this.ctx.createBiquadFilter();
    this.windFilter.type = 'bandpass';
    this.windFilter.frequency.setValueAtTime(200, this.ctx.currentTime);
    this.windFilter.Q.setValueAtTime(1.5, this.ctx.currentTime);

    this.windGain = this.ctx.createGain();
    this.windGain.gain.setValueAtTime(0.001, this.ctx.currentTime);

    this.windNode.connect(this.windFilter);
    this.windFilter.connect(this.windGain);
    this.windGain.connect(this.masterGain);

    this.windNode.start();
  }

  updateSpeed(speedRatio) {
    if (!this.initialized || !this.windGain || this.isMuted) return;
    const now = this.ctx.currentTime;
    const clamped = Math.max(0, Math.min(speedRatio, 2.5));
    const targetFreq = 180 + clamped * 650;
    const targetGain = 0.02 + clamped * 0.12;

    this.windFilter.frequency.setTargetAtTime(targetFreq, now, 0.1);
    this.windGain.gain.setTargetAtTime(targetGain, now, 0.1);
  }

  // Ocean wave background ambiance
  setupOcean() {
    const bufferSize = this.ctx.sampleRate * 3;
    const buffer = this.ctx.createBuffer(2, bufferSize, this.ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const data = buffer.getChannelData(ch);
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99 * b0 + white * 0.05;
        b1 = 0.97 * b1 + white * 0.08;
        b2 = 0.92 * b2 + white * 0.12;
        data[i] = (b0 + b1 + b2) * 0.4;
      }
    }

    const oceanNode = this.ctx.createBufferSource();
    oceanNode.buffer = buffer;
    oceanNode.loop = true;

    const lowpass = this.ctx.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.setValueAtTime(450, this.ctx.currentTime);

    this.oceanGain = this.ctx.createGain();
    this.oceanGain.gain.setValueAtTime(0.04, this.ctx.currentTime);

    oceanNode.connect(lowpass);
    lowpass.connect(this.oceanGain);
    this.oceanGain.connect(this.masterGain);

    oceanNode.start();
  }

  // Procedural Chill Lo-fi Tropical Music Generator
  toggleBGM() {
    if (!this.initialized) this.init();
    this.resume();
    if (this.bgmPlaying) {
      this.stopBGM();
      return false;
    } else {
      this.startBGM();
      return true;
    }
  }

  startBGM() {
    if (this.bgmPlaying) return;
    this.bgmPlaying = true;
    let step = 0;
    const bpm = 84;
    const stepDuration = 60 / bpm / 2; // 16th notes

    // Chill chord progression in F Major / D Minor: Fmaj7 - Am7 - Bbmaj7 - C7
    const chords = [
      [174.61, 220.00, 261.63, 329.63], // Fmaj7 (F3, A3, C4, E4)
      [164.81, 220.00, 246.94, 293.66], // E7 / Am7 variant
      [116.54, 174.61, 220.00, 261.63], // Bbmaj7 (Bb2, F3, A3, C4)
      [130.81, 164.81, 196.00, 246.94]  // C7sus
    ];

    const bassNotes = [87.31, 110.00, 58.27, 65.41]; // F2, A2, Bb1, C2

    const playStep = () => {
      if (!this.bgmPlaying) return;
      const now = this.ctx.currentTime;
      const bar = Math.floor(step / 16) % 4;
      const beatInBar = step % 16;

      // Play Rhodes chord pad on beat 0 and beat 8
      if (beatInBar === 0 || beatInBar === 8) {
        const chord = chords[bar];
        chord.forEach(freq => {
          this._playRhodesNote(freq, now, stepDuration * 7.5, 0.08);
        });
      }

      // Play Mellow Bass on beats 0, 6, 10
      if (beatInBar === 0 || beatInBar === 6 || beatInBar === 10) {
        this._playBassNote(bassNotes[bar], now, stepDuration * 3.5, 0.12);
      }

      // Lo-fi Kick on 0, 8, 14
      if (beatInBar === 0 || beatInBar === 8 || beatInBar === 14) {
        this._playLoFiKick(now);
      }

      // Soft Snare / Rim on 4, 12
      if (beatInBar === 4 || beatInBar === 12) {
        this._playLoFiSnare(now);
      }

      // Soft Hi-hat on every even 16th note with swing
      if (beatInBar % 2 === 0) {
        this._playLoFiHat(now, beatInBar % 4 === 2 ? 0.03 : 0.018);
      }

      step++;
      this.bgmTimer = setTimeout(playStep, stepDuration * 1000);
    };

    playStep();
  }

  stopBGM() {
    this.bgmPlaying = false;
    if (this.bgmTimer) {
      clearTimeout(this.bgmTimer);
      this.bgmTimer = null;
    }
  }

  _playRhodesNote(freq, time, dur, vol) {
    if (this.isMuted) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(900, time);
    filter.frequency.exponentialRampToValueAtTime(450, time + dur);

    gain.gain.setValueAtTime(0.001, time);
    gain.gain.linearRampToValueAtTime(vol, time + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + dur);
  }

  _playBassNote(freq, time, dur, vol) {
    if (this.isMuted) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(vol, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + dur);
  }

  _playLoFiKick(time) {
    if (this.isMuted) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.frequency.setValueAtTime(110, time);
    osc.frequency.exponentialRampToValueAtTime(35, time + 0.15);

    gain.gain.setValueAtTime(0.2, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.18);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.2);
  }

  _playLoFiSnare(time) {
    if (this.isMuted) return;
    const bufferSize = this.ctx.sampleRate * 0.08;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400, time);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.08, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.08);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(time);
  }

  _playLoFiHat(time, vol) {
    if (this.isMuted) return;
    const bufferSize = this.ctx.sampleRate * 0.03;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.15));
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(6000, time);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(vol, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.03);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(time);
  }
}

export const soundEngine = new SoundEngine();
