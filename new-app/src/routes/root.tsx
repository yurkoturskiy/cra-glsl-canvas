import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <header className="p-4 leading-6 bg-blue-200">Hello</header>
      <main className="my-6 mx-10">
        <Outlet />
      </main>
    </div>
  );
}
