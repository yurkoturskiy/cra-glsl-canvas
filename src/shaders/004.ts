const glsl = (shader: TemplateStringsArray) => shader[0];

export default glsl`
      precision highp float;
      varying vec2 uv;
      uniform float blue;
      void main() {
        gl_FragColor = vec4(uv.x, uv.y, blue, 1.0);
      }
`;
