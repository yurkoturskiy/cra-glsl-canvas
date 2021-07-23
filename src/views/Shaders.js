import { styled } from "@stitches/react";
import ShaderCanvas from "@signal-noise/react-shader-canvas";
import { Link } from "react-router-dom";
import shaders from "../shaders";

const ShadersWrapper = styled("div", {
  display: "flex",
  padding: "12px",
});

const Card = styled("div", {
  backgroundColor: "white",
  borderRadius: "2px",
  width: "320px",
  overflow: "hidden",
  height: "320px",
  border: "1px solid lightgrey",
  margin: "12px",
});

export default function Shaders() {
  const cards = shaders.map((shader) => (
    <Card>
      <Link to={`/shaders/${shader.id}`}>
        <ShaderCanvas width="320" height="320" fragShader={shader.file} />
      </Link>
    </Card>
  ));
  return <ShadersWrapper>{cards}</ShadersWrapper>;
}
