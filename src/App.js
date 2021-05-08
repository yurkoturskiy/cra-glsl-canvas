import raw from "raw.macro";
import "./App.css";
import ShaderCanvas from "@signal-noise/react-shader-canvas";

function App() {
  const shader = raw("./shader.frag");

  return (
    <div>
      <ShaderCanvas
        width={window.innerWidth}
        height={window.innerHeight}
        fragShader={shader}
      />
    </div>
  );
}

export default App;
