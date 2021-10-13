import React from "react";
import styled from "styled-components";

import SubVisual from "../components/Sub/SubVisual";
import SubMenu from "../components/Sub/SuvMenu";
import Summary from "../components/Sub/Sub1/Summary";
import History from "../components/Sub/Sub1/History";
import Ceo from "../components/Sub/Sub1/Ceo";



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
