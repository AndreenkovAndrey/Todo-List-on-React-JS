import { MainContainer } from "./MainContainer";

export const Layout = () => {
  return (
    <div className="layoutDiv">
      <div className="header">To do list</div>
      <div className="stylingBox">
        <MainContainer />
      </div>
    </div>
  );
};
