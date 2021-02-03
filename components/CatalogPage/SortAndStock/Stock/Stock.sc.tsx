import styled from "styled-components";
import {Colors} from "../../../../constants/colors";
import {Fonts} from "../../../../constants/fonts";
import {BREAKPOINTS} from "../../../../constants/breakpoints";

// export const ToggleSelect = styled.div<{active : boolean}>`
//   width: 38px;
//   height: 21px;
//   background: ${props => props.active ? Colors.BRAND  : Colors.BACKGROUND_FABRICS_SAMPLES}; ;
//   border-radius: 24px;
//   margin-right: 12px;
//   position: relative;
//   transition: all 0.1s;
//
//
//   &:before {
//     position: absolute;
//     content: '';
//     width: 13px;
//     height: 13px;
//     left: ${props => props.active ? 'calc(100% - 17px)'  : '4px'};
//     top: 4px;
//     border-radius: 50%;
//     background: #fff;
//     transition: left 0.1s;
//   }
// `
//
// export const StockBlock = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   cursor: pointer;
//   font: ${Fonts.OS_400_14_21};
//   color: ${Colors.TEXT_SECONDARY};
//   margin-bottom: 20px;
//
//
//   @media(${BREAKPOINTS.TILL_LG}) {
//     margin-bottom: 0;
//   }
// `