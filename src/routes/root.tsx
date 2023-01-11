import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <header className="bg-blue-200 flex">
        <Link to="/" className="bg-purple-100 leading-[64px] px-4 cursor-pointer">
          Shaders lib
        </Link>
      </header>
      <main className="my-6 mx-10">
        <Outlet />
      </main>
    </div>
  );
}
