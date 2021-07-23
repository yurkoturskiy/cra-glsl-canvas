import { Link, useParams } from "react-router-dom";
import ShaderCanvas from "@signal-noise/react-shader-canvas";
import { getShader } from "../shaders";

export default function Shader() {
  const { id } = useParams();
  const shader = getShader(id);
  return (
    <div>
      <Link to="/">Go home</Link>
      <h1>I'm a shader {shader.id}</h1>
      <div>
        <ShaderCanvas width="640" height="640" fragShader={shader.file} />
      </div>
    </div>
  );
}
