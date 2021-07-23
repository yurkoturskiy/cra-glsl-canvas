import raw from "raw.macro";
import { styled } from "@stitches/react";
import ShaderCanvas from "@signal-noise/react-shader-canvas";
import { Link } from "react-router-dom";

const glsl = (shader) => shader[0];

const third = glsl`
#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot(vec2 st, float pct){
  return  smoothstep( pct-0.02, pct, st.y) -
          smoothstep( pct, pct+0.02, st.y);
}


void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;

    // Smooth interpolation between 0.1 and 0.9
    float y = smoothstep(0.1,0.9,st.x);

    vec3 color = vec3(y);

    float pct = plot(st,y);
    color = (1.0-pct)*color+pct*vec3(0.0,1.0,0.0);

    gl_FragColor = vec4(color,1.0);
}
`;

const shaders = [
  raw("../shaders/first.frag"),
  raw("../shaders/second.frag"),
  third,
];

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
  const cards = shaders.map((shader, index) => (
    <Card>
      <Link to={`/shaders/${index}`}>
        <ShaderCanvas width="320" height="320" fragShader={shader} />
      </Link>
    </Card>
  ));
  return <ShadersWrapper>{cards}</ShadersWrapper>;
}
