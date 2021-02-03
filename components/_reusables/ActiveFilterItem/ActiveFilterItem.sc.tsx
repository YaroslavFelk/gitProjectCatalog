import styled from "styled-components";
import {Fonts} from "../../../constants/fonts";
import {Colors} from "../../../constants/colors";


export const ActiveFilterItemClose =styled.span`
  width: 14px;
  height: 14px;
  background:  #D5D5D5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-left: 12px;
`

export const Color = styled.span<{hex}>`
  width: 8px;
  height: 8px;
  background: ${p => p.hex};
  border-radius: 50%;
  margin-right: 12px;
`

export const ActiveFilterItemStyle = styled.div`
  background: ${Colors.BACKGROUND_ACTIVE_FILTER_ITEM};
  padding: 8px 12px;
  border-radius: 30px;
  color: ${Colors.TEXT_PRIMARY};
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 0.1s;
  margin-right: 5px;
  font: ${Fonts.OS_400_12_12};
  margin-bottom: 5px;
  cursor: pointer;
  text-transform: uppercase;
  
  &:hover {
    background: ${Colors.BRAND};  
    border-color:  ${Colors.BRAND};
    color: #fff;
  }
  
  & svg {
    fill: #fff;
    width: 6px;
    height: 6px;
  }
  
  &:hover svg {
   fill: ${Colors.BRAND};
  }
  
  &:hover ${ActiveFilterItemClose} {
    background: #fff;
  }
`

