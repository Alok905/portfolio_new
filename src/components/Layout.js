import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const LayoutContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
`;

const Layout = ({setCursorScale}) => {
  return (
    <LayoutContainer>
      <Sidebar setCursorScale={setCursorScale} />
      <Outlet />
    </LayoutContainer>
  );
};

export default Layout;
