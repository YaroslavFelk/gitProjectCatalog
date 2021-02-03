import styled from "styled-components";
import {Col, Row} from "../Grid";
import {Colors} from "../../constants/colors";
import {BREAKPOINTS} from "../../constants/breakpoints";
import {Fonts} from "../../constants/fonts";

export const Heading = styled(Col)`
  font: ${Fonts.LA_600_36_36};
  color: ${Colors.TEXT_PRIMARY};
  
  & span {
      font: ${Fonts.OS_400_12_12};
      color: ${Colors.TEXT_SUP};
      position: absolute;
      top: 0;
      margin-left: 5px;
  }
  
  @media (${BREAKPOINTS.TILL_MD}) {
    margin-bottom: 40px;
    font: ${Fonts.LA_600_24_24};
 
  }
`

export const CatalogCol = styled(Col)`
  margin-bottom: 40px;
  
  @media (${BREAKPOINTS.TILL_MD}) {
      margin-bottom: 30px;
  
    &:nth-of-type(2n + 1) {
      padding-right: 11.5px;
    }    
    
    &:nth-of-type(2n ) {
      padding-left: 11.5px;
    }
  }
  
  @media (${BREAKPOINTS.TILL_SM}) {
    &:nth-last-of-type(1) {
      margin-bottom: 0;
    } 
    
    &:nth-last-of-type(2) {
      margin-bottom: 0;
    }
  }
`

export const CatalogRow = styled(Row)`
  margin-top: 20px;
`

export const CatalogItems = styled(Col)`
  flex-grow: 1;

  @media (${BREAKPOINTS.FROM_LG}) {
    padding-left: 45px !important;
  }
`

export const CatalogBlock = styled(Row)`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  position: relative;
  color: ${Colors.TEXT_PRIMARY};
  
  @media (${BREAKPOINTS.TILL_MD}) {
    margin-top: 0;
  }
`

export const SMS = styled.div<{active : boolean}>`
  position: fixed;
  left:  15px;
  width: 50px;
  height: 50px;
  background: #0086A8;
  border-radius: 3px;
  z-index: 50;
  transition: bottom 0.1s ;
  animation:  0.5s ${props => props.active ? 'slide-down' : 'slide-in' }   ease-in-out forwards;

  @keyframes slide-down {
    from {
      bottom: -50px;
    }
    60% {
       bottom: -50px;
    }
    to {
       bottom: 10px;
    }
  }

  @keyframes slide-in {
    from {
      bottom: 10px;
    }
    20% {
       bottom: -50px;
    }
    to {
       bottom: -50px;
    }
  }
`

export const ForFixedItems = styled.div<{isHidden? : boolean}>`
  position: fixed;
  bottom: ${props => props.isHidden ? '-70px' : '0'};
  height: 70px;
  width: 100%;
  left: 0;
  right: 0;
  display: none;
  z-index: 49;
  transition: bottom 0.1s;
 
  @media(${BREAKPOINTS.TILL_SM}) {
    display: block;
  }
`

export const Background = styled.div`
  width: 100%;
  height: 70px;
  background: rgba(255, 255, 255, 0.8);
  padding: 0;
`

export const TEmpBlock = styled.div<{isHidden}>`
background: #5FD975;
border-radius: 3px;
position:fixed;
bottom: 10px;
right: 15px;
left: 80px;
color: #fff;
height: 50px;
align-items: center;
justify-content: center;
z-index: 100;
cursor: pointer;
display: ${p => p.isHidden ? 'none': 'flex'};

@media(${BREAKPOINTS.FROM_LG}) {
display: none;
}

`