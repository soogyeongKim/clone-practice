import React from "react";
import styled from "styled-components";

import SubVisual from "../components/SubVisual";
import SubMenu from "../components/SuvMenu";
import Summary from "../components/Summary";
import History from "../components/History";
import Ceo from "../components/Ceo";



class SubCompany extends React.Component {
  render() {
    return (
      <>
        <Contents>
          <SubVisual />
          <SubMenu />
          <Summary />
          <History />
          <Ceo />
        </Contents>   
      </>  
    );
  }
}


const Contents = styled.div`

  margin: 0 auto; 
  overflow: hidden;

  `;

  
export default SubCompany;
