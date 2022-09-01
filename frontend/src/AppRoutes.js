import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Splash } from "./components/Splash"

const AppRoutes = [
  {
    path: '/',
    element: <Splash />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;
