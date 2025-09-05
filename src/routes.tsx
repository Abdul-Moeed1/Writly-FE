import { Welcome } from "./pages/welcome/Welcome";

export const getRoutes = () => {
  return [
    {
      path: "/",
      element: <Welcome />,
    },
    {
      path: "/about",
      element: <div className="text-xl text-sky-500">about</div>,
    },
  ];
};
