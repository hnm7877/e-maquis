import { Outlet } from 'react-router-dom';
import { SideBar } from '../components/SideBar';
import {Bilan} from "./bilan";

export const App = () => {
  return (
    <div className='home'>
      <SideBar />
      <div className='home__right'>
        <Outlet />
        <Bilan />
      </div>

    </div>
  );
};
