import Tone from 'tone';

const synths = [
  {
    id: 0,
    name: 'AM',
    synth: new Tone.AMSynth().toMaster(),
  },
  {
    id: 1,
    name: 'Basic',
    synth: new Tone.Synth().toMaster(),
  },
  {
    id: 2,
    name: 'Duo',
    synth: new Tone.DuoSynth().toMaster(),
  },
  {
    id: 3,
    name: 'Membrane',
    synth: new Tone.MembraneSynth().toMaster(),
  },
  {
    id: 4,
    name: 'Poly',
    synth: new Tone.PolySynth().toMaster(),
  },
  {
    id: 5,
    name: 'Pluck',
    synth: new Tone.PluckSynth().toMaster(),
  },
];

const FREQ_BASE = 200;
const FREQ_RANGE = 400;
let playInterval = null;

const start = (synth) => {
  playInterval = window.setInterval(() => {
    const freq = Math.random() * FREQ_RANGE + FREQ_BASE;
    synth.triggerAttackRelease(freq, 0.05);
  }, 50);
};

const stop = () => {
  window.clearInterval(playInterval);
};

export {
  start,
  stop,
  synths,
};
