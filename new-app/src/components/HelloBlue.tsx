import { Shaders, Node } from "gl-react";
import first from "../shaders/004";

const shaders = Shaders.create({
  helloBlue: {
    frag: first,
  },
});

export default function HelloBlue({ blue }: { blue: number }) {
  return <Node shader={shaders.helloBlue} uniforms={{ blue }} />;
}
