import styled from "styled-components";

import {VariationsBlock} from "../VariableProductPolaroid.sc";
import {Colors} from "../../../../constants/colors";
import {Fonts} from "../../../../constants/fonts";
import {BREAKPOINTS} from "../../../../constants/breakpoints";

export const VariationsColorBlock = styled(VariationsBlock)`
  display: flex;
  order: -2;
  align-items: center;
`

export const Color = styled.div<{ color?: string | boolean; name: string; active: boolean; img? : string | boolean; isExist : boolean, }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  cursor: pointer;
  //display: inline-block;
  margin-right: 12px;
  position: relative;
  pointer-events: ${props => props.isExist ? 'auto' : 'none'};
  border: ${p => p.active ? `2px solid ${Colors.BRAND}` : 'none'};

  @media( ${BREAKPOINTS.TILL_MD}) { 
   margin-right: 15px;
  }
  
  //&:last-of-type {
  //  margin-right: 0;
  //}
  
  &:after {
    content: '';  
    position: absolute;
    top: ${p => p.active ? `50%` : '0'};
    left: ${p => p.active ? `50%` : '0'};
    transform: translate(${p => p.active ? `-50%, -50%` : '0'});
    width: ${p => p.active ? `8px` : '16px'};
    height: ${p => p.active ? `8px` : '16px'};
    border-radius: 50%;
    z-index: 2;
    background-color: ${props =>  props.isExist ? props.img ? '#fff' : '#fff' : '#000'};
    opacity:  ${props =>  props.isExist ? '1' : '0.5'};
    background-image: ${props =>  `url("${props.img}")` };
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  &:before {
    content: '';
    width: 30px;
    height: 30px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
`;

export const ColorLength = styled.div`
  width: 31px;
  height: 31px;
  border-radius: 50%;
  background-color: #FFF;
  cursor: pointer;
  margin-right: 5px;
  position: relative;
  border: 2px solid ${Colors.BORDER_PRIMARY};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ColorCount = styled.a`
  font: ${Fonts.OS_400_12_12};
  color: ${Colors.TEXT_PRIMARY};
`