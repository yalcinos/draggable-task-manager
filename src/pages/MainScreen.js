import React from "react";
import Header from "../components/Header/Header";
import Content from "../components/Containers/Content";
const MainScreen = () => {
  return (
    <div data-testid="mainscreen-container">
      <Header />
      <Content />
    </div>
  );
};
export default MainScreen;
