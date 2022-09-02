import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Jerseys } from "./components/Jerseys";
import { Splash } from "./components/Splash"

const AppRoutes = [
  {
    path: '/',
    element: <Splash />
  },
  {
    path: '/jerseys/nfl',
    element: <Jerseys type="nfl"/>
  },
  {
    path: '/jerseys/mlb',
    element: <Jerseys type="mlb"/>
  },
  {
    path: '/jerseys/nba',
    element: <Jerseys type="nba"/>
  },
  {
    path: '/jerseys/nhl',
    element: <Jerseys type="nhl"/>
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
