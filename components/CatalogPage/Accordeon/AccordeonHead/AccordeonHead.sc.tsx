import styled from "styled-components";
import {Col} from "../../../Grid";
import {Fonts} from "../../../../constants/fonts";

export const AccordeonToggle = styled.span<{active: boolean}>`
  cursor: pointer;
  transform: ${props => props.active ? 'rotate(0)' : 'rotate(180deg)'};
  position: relative;
  z-index: 2;
  width: 10px;
  height: 6px;
  display: flex;
  align-items: center;
  transition: all 0.1s;
  user-select: none;
`

export const  AccordeonBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  margin-top: 10px;
  cursor: pointer;
  user-select: none;
  font: ${Fonts.LA_400_16_24};
  margin-bottom: 10px;
`