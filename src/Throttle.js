import Tone from 'tone';

const throttleSynth = new Tone.MonoSynth().toMaster();
throttleSynth.triggerAttack(0);

const noise = new Tone.Noise({
	volume: 0,
	type: 'white'
}).chain(
	Tone.Master
);

const throttle = (freq) => {
	throttleSynth.setNote(freq);
};

const boost = (freq) => {
	if (noise.state === 'stopped') {
		noise.start();
	} else {
		noise.mute = !noise.mute;
	}
};

window.throttle = throttle;

export {
	throttle,
	boost,
};
