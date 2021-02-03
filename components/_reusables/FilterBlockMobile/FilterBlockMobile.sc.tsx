import styled from "styled-components";
import {Colors} from "../../../constants/colors";
import {BREAKPOINTS} from "../../../constants/breakpoints";

export const FilterBlockMobileStyle =  styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  
  @media (${BREAKPOINTS.TILL_MD}) {
    display: flex;
  }
`

export const CallFilterMobile = styled.div<{active : boolean}>`
  display: flex;
  width: 46px;
  height: 30px;
  border: 2px solid ${ props => props.active ? Colors.BRAND : Colors.BORDER_PRIMARY};
  background-color: ${ props => props.active ? Colors.BRAND : '#fff'};
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  transition: all 0.1s;
  
  & svg {
    fill: ${ props => props.active ? '#fff' : Colors.TEXT_PRIMARY};
  }
`