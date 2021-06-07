import raw from "raw.macro";
import "./App.css";
import ShaderCanvas from "@signal-noise/react-shader-canvas";
import { useState } from "react";
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

function App() {
  const [shader, setShader] = useState(raw("./shader/first.frag"));

  return (
    <div>
      <button onClick={() => setShader(raw("./shader/first.frag"))}>
        first
      </button>
      <button onClick={() => setShader(raw("./shader/second.frag"))}>
        second
      </button>
      <button onClick={() => setShader(third)}>third</button>
      <ShaderCanvas
        width={window.innerWidth}
        height={window.innerHeight}
        fragShader={shader}
      />
    </div>
  );
}

export default App;
