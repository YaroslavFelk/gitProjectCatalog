import styled from "styled-components";
import {Colors} from "../../../constants/colors";
import {BREAKPOINTS} from "../../../constants/breakpoints";
import {Fonts} from "../../../constants/fonts";

export const SortAndStockBlock = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  
  @media(${BREAKPOINTS.TILL_MD}) {
    margin-bottom: 40px;
  }
`

export const ActiveFilterBLock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 55px;
  
  @media (${BREAKPOINTS.TILL_MD}) {
    margin-bottom: 40px;
  }
`

export const ActiveFilterClose = styled.div`
  background: #fff;
  padding: 6px 10px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 0.1s;
  border: 2px solid ${Colors.BORDER_PRIMARY};
  cursor: pointer;
  font:${Fonts.OS_400_14_14};
  margin-bottom: 5px;


  
  &:hover {
    border: 2px solid ${Colors.BRAND};
  }
`

