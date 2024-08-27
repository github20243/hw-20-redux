import { AppTitle } from "../../components/UI/Title";
import { Outlet } from "react-router-dom";

export const Students = () => {
  return (
    <div>
      <AppTitle>Students</AppTitle>
      <Outlet/>
    </div>
  );
};
