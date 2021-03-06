import styled from "styled-components";
import {Colors} from "../../../../constants/colors";
import {Fonts} from "../../../../constants/fonts";
import {BREAKPOINTS} from "../../../../constants/breakpoints";
export const Color = styled.div<{ color: string; active: boolean;  isset:boolean}>`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  cursor: pointer;
  display: inline-block;
  margin-right: 12px;
  position: relative;
  border: ${p => p.active ? `2px solid ${Colors.BRAND}` : 'none'};

  pointer-events: ${props => props.isset ? 'none' : 'auto'};
  opacity: ${props => props.isset ? 0.5 : 1};
  user-select: none;
  
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
    background-color: ${props => props.color};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const ColorItem = styled.div`
  
`

export const AccordeonBlockCheckbox = styled.div`
  width: 16px;
  height: 16px;
  
  box-sizing: border-box;
  border-radius: 50%;

  margin-right: 10px;
  background-position: center;
  background-repeat: no-repeat  ;
`

export const RadioItem = styled.div<{active: boolean, isset: boolean, more?, isMore?}>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  font: ${Fonts.OS_400_14_14};
  color: ${props => props.isset ? Colors.TEXT_DISABLED : props.active ? Colors.TEXT_PRIMARY : Colors.TEXT_SECONDARY};
  pointer-events: ${props => props.isset ? 'none' : 'auto'};
  user-select: none;
  cursor: pointer;

  
  
  & ${AccordeonBlockCheckbox} {
    background-image:  ${props => props.active
        ? 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik05Ljg1MzU2IDAuNDc0NTE5QzkuNjU4MzEgMC4yNzkyNDYgOS4zNDE3NSAwLjI3OTI0NiA5LjE0NjQ1IDAuNDc0NTE5TDMuMTU2MTQgNi40NjQ4OUwwLjg1MzU2NCA0LjE2MjMxQzAuNjU4MzExIDMuOTY3MDQgMC4zNDE3NDggMy45NjcwNiAwLjE0NjQ1NSA0LjE2MjMxQy0wLjA0ODgxODQgNC4zNTc1NiAtMC4wNDg4MTg0IDQuNjc0MTMgMC4xNDY0NTUgNC44Njk0TDIuODAyNTkgNy41MjU0OUMyLjk5Nzc4IDcuNzIwNzUgMy4zMTQ1OCA3LjcyMDYxIDMuNTA5NyA3LjUyNTQ5TDkuODUzNTYgMS4xODE2M0MxMC4wNDg4IDAuOTg2Mzc0IDEwLjA0ODggMC42Njk3OTIgOS44NTM1NiAwLjQ3NDUxOVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=")'
        : '#fff'};
    background-color: ${props => props.active ? Colors.BRAND : '#fff'};
    border: ${props => props.active ? 'none' : `2px solid ${Colors.BORDER_PRIMARY}` } ;
  }
  
  
  
  @media( ${BREAKPOINTS.FROM_LG}) { 
    &:hover {
      color: ${Colors.HOVER_TEXT};
    }
    
    
    &:hover ${AccordeonBlockCheckbox} {
      border-color: ${Colors.BRAND};
    }
  }
`



export const PricesRadio = styled.div`
  margin-bottom: 20px;
`

export const ShowRadioBlock = styled.div<{active, more?, isMore?}>`
  max-height: ${props => props.isMore ? props.more && props.active ? '1000px' : '0' : props.active ? '400px' : '0'};
  overflow: hidden;
  transition: all 0.2s;
`
