import { Link } from "react-router-dom";
import { Node } from "gl-react";
import { Surface } from "gl-react-dom"; // for React DOM
import shaders from "../shaders/index";

export default function ShadersList() {
  return (
    <div className="flex gap-4 p-0">
      {shaders.map((shader: { id: string; frag: string }, index: number) => (
        <Link
          to={`/${shader.id}`}
          className="overflow-hidden p-2 rounded-lg ring-1 transition-shadow hover:ring-2 hover:ring-blue-400 w-[256px] ring-neutral-200"
          key={index}
        >
          <Surface width={240} height={240}>
            <Node shader={shader} uniforms={{ blue: 0.5 }} />
          </Surface>
        </Link>
      ))}
    </div>
  );
}
