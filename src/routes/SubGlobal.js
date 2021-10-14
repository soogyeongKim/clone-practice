import React from "react";
import styled from "styled-components";

import SubVisual from "../components/Sub/SubVisual";
import SubMenu from "../components/Sub/SuvMenu";
import SamWooAdd from "../components/Sub/Sub3/SamWooAdd";
import SanDongAdd from "../components/Sub/Sub3/SanDongAdd";
import GlobalInfo from "../components/Sub/Sub3/GlobalInfo";


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