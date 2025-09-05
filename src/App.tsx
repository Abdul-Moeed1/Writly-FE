import { useRoutes } from "react-router-dom";
import { getRoutes } from "./routes";

const App = () => {
  const appRoutes = useRoutes(getRoutes());

  return (
    <>
      {appRoutes}
    </>
  );
};

export default App;
