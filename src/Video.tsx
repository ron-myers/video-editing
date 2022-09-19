import {Audio, Composition, Sequence, useVideoConfig} from 'remotion';
import {HelloWorld} from './HelloWorld';
import {Logo} from './HelloWorld/Logo';
import {Title} from "./HelloWorld/Title";
import {SequenceVideo} from "./Sequence/Sequence";

// Each <Composition> is an entry in the sidebar!

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.tsx <id> out/video.mp4
				id="SequenceVideo"
				component={SequenceVideo}
				durationInFrames={160}
				fps={30}
				width={1920}
				height={1080}
			/>
			{/* Mount any React component to make it show up in the sidebar and work on it individually!
			<Composition
				id="OnlyLogo"
				component={Logo}
				durationInFrames={180}
				fps={30}
				width={1920}
				height={1080}
			/>
			{ */}
		</>
	);
};
