import { Link } from "react-router-dom";

export default function ShadersList() {
  return (
    <div className="flex">
      <Link to="/test-shader" className="p-4 rounded-lg ring-1 transition-shadow hover:ring-2 hover:ring-blue-400 w-[256px] ring-neutral-200">
        Test shader
      </Link>
    </div>
  );
}
