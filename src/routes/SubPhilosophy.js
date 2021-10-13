import React from "react";
import styled from "styled-components";

import SubVisual from "../components/Sub/SubVisual";
import SubMenu from "../components/Sub/SuvMenu";
import Passion from "../components/Sub/Sub2/Passion";
import Trust from "../components/Sub/Sub2/Trust";

class SubPhilosophy extends React.Component {
  render() {
    return (
      <>
        <Contents>
            <SubVisual />
            <SubMenu />
            <Passion />
            <Trust />
        </Contents>   
      </>  
    );
  }
}


const Contents = styled.div`

  margin: 0 auto; 
  overflow: hidden;

  `;


export default SubPhilosophy;
