import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
	Img, staticFile,
} from 'remotion';
import {Arc} from './Arc';
import {Atom} from './Atom';

export const Logo: React.FC = () => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const logo = staticFile(`/logo.webp`);

	const development = spring({
		config: {
			damping: 100,
			mass: 0.5,
		},
		fps: videoConfig.fps,
		frame,
	});

	const rotationDevelopment = spring({
		config: {
			damping: 100,
			mass: 0.5,
		},
		fps: videoConfig.fps,
		frame,
	});

	const scale = spring({
		frame,
		config: {
			mass: 0.5,
		},
		fps: videoConfig.fps,
	});

	const logoRotation = interpolate(
		frame,
		[0, videoConfig.durationInFrames],
		[0, 360]
	);

	return (
		<AbsoluteFill
			style={{
				transform: `scale(${scale}) rotate(${logoRotation}deg)`,
			}}
		>
			<Img 
			  src={logo} />
		</AbsoluteFill>
	);
};
