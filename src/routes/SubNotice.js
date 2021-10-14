import React from "react";
import styled from "styled-components";

import Sub5V from "../components/Sub/Sub5/Sub5V";
import Sub5S from "../components/Sub/Sub5/Sub5S";
import Noti from "../components/Sub/Sub5/Noti"






class Home extends React.Component {
  render() {
    return (
      <>
        <Contents>
          <Sub5V />
          <Sub5S />
          <Noti />
        </Contents>   
      </>  
    );
  }
}


const Contents = styled.div`

  margin: 0 auto; 
  overflow: hidden;

  `;


export default Home;
