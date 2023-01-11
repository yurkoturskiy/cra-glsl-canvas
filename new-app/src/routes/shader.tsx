import { Surface } from "gl-react-dom"; // for React DOM
import HelloBlue from "../components/HelloBlue";

export default function Shader() {
  return (
    <Surface width={300} height={300}>
      <HelloBlue blue={0.5} />
    </Surface>
  );
}
