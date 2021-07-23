import generateID from "../utilities/generateID";
import raw from "raw.macro";
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
  {
    id: generateID("sha"),
    file: raw("../shaders/first.frag"),
  },
  {
    id: generateID("sha"),
    file: raw("../shaders/second.frag"),
  },
  {
    id: generateID("sha"),
    file: third,
  },
];

export const getShader = (id) => shaders.find((sh) => sh.id === id);

export default shaders;
