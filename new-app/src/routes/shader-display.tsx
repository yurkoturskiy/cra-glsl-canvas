import { Surface } from "gl-react-dom"; // for React DOM
import { Node } from "gl-react";
import { useParams } from "react-router-dom";
import { getShader } from "../shaders/index";

export default function Shader() {
  const { id } = useParams<{ id: string }>();
  const shader = getShader(id);

  return (
    <Surface width={300} height={300}>
      <Node shader={shader} uniforms={{ blue: 0.5 }} />
    </Surface>
  );
}
