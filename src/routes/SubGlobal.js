import React from "react";
import styled from "styled-components";

import SubVisual from "../components/SubVisual";
import SubMenu from "../components/SuvMenu";
import SamWooAdd from "../components/SamWooAdd";
import SanDongAdd from "../components/SanDongAdd";
import GlobalInfo from "../components/GlobalInfo";


class SubGlobal extends React.Component {
  render() {
    return (
      <>
        <Contents>
            <SubVisual />
            <SubMenu />
            <SamWooAdd />
            <SanDongAdd />
            <GlobalInfo />
        </Contents>   
      </>  
    );
  }
}


const Contents = styled.div`

  margin: 0 auto; 
  overflow: hidden;

  `;


export default SubGlobal;