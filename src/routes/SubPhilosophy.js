import React from "react";
import styled from "styled-components";

import SubVisual from "../components/SubVisual";
import SubMenu from "../components/SuvMenu";
import Passion from "../components/Passion";
import Trust from "../components/Trust";

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
