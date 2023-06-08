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

const Layout = () => {
  return (
    <LayoutContainer>
      <Sidebar />
      <Outlet />
    </LayoutContainer>
  );
};

export default Layout;
