import {Title} from "../HelloWorld/Title";
import {Sequence} from "remotion";

export const SequenceVideo = () => {
  return (
      <>
        <Sequence from={0} durationInFrames={40} name="Sequence 1">
          <Title titleText="Sequence 1" titleColor="white" />
        </Sequence>

        <Sequence from={41} durationInFrames={40} name="Sequence 2">
          <Title titleText="Sequence 2" titleColor="white" />
        </Sequence>

        <Sequence from={81} durationInFrames={40} name="Sequence 3">
          <Title titleText="Sequence 3" titleColor="white" />
        </Sequence>

        <Sequence from={121} durationInFrames={40} name="Sequence 4">
          <Title titleText="Sequence 4" titleColor="white" />
        </Sequence>
      </>
  );
};
