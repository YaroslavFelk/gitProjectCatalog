import styled from "styled-components";
import {Colors} from "../../../constants/colors";
import {BREAKPOINTS} from "../../../constants/breakpoints";
import {Fonts} from "../../../constants/fonts";

export const FilterSliderStyle = styled.div`
 display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  width: 100%;
  position: relative;
  flex-wrap: wrap;
  
  & .rc-slider-dot {
    visibility: hidden;
  }
  
  & .rc-slider {
     height: 35px;
     order: 2;
     width: calc(100% - 15px);
     margin-left: 7.5px;
     max-width: 100%;
     margin-top: 5px;
  }
  
  & .rc-slider-mark-text {
    display: none;
  }
  
  & .rc-slider-rail {
    top: calc(50% - 1px);
    width: calc(100% + 15px);
    margin-left: -7.5px;
    height: 2px;
    background-color: ${Colors.BACKGROUND_RANGE_SLIDER};
  }
  
  & .rc-slider-track {
    top: calc(50% - 1px);
    height: 2px;
    background-color: ${Colors.BRAND};
  }
  
  & .rc-slider-step {
    top: calc(50% - 1px);
    height: 2px;
  }
  
  & .rc-slider-handle {
   top: calc( 50% - 2px);
   width: 15px;
   height: 15px;
   line-height: 15px;
   border-radius: 50%;
   background: #fff;
   border: 2px solid ${Colors.BRAND} !important;
   box-shadow: none !important;
   
    &:before {
       content: '';
       position: absolute;
       opacity: 0;
       width: 50px;
       height: 35px;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
    }
  }

  & .rc-slider-handle-dragging {
     border-color: ${Colors.BRAND};
 
  }
`

export const FilterSliderInput = styled.input`
  background: #FFFFFF;
  border: 2px solid #E3E3E3;
  box-sizing: border-box;
  border-radius: 3px;
  width: calc(50% - 7.5px);
  height: 30px;
  outline: none;
  display:flex;
  align-items: center;
  justify-content: center;
  font: ${Fonts.OS_400_12_18};
  text-align: center;
`




export const ButtonRadio = styled.span<{active: boolean}>`
  display: block;
  border: 2px solid ${props => props.active ? Colors.BRAND : Colors.BORDER_PRIMARY};
  width: 16px;
  height: 16px;
  border-radius: 50%;  
  margin-right: 10px;
  position: relative;
 
  &:after {
    display: ${props => props.active ? 'block' : 'none'};
    content: '';
    position:absolute;
    top: calc(50% - 4px);
    left: calc(50% - 4px);
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background-color: ${Colors.BRAND};
  }
`

export const AccordeonBlock = styled.div<{ order }>`
  // border-bottom: 1px solid ${Colors.BORDER_PRIMARY};
  order: ${p => p.order ? p.order : null};
  //padding-bottom: 20px;
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


export const PriceFilter = styled.div``



export const RadioItem = styled.div<{active: boolean, isset: boolean}>`
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
    border: ${props => props.active ? 'none' : `2px solid ${Colors.BORDER_PRIMARY}` };
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


export const AccordeonBodyContainer = styled.div<{active, more?, issetMore?}>`
  max-height: ${props => props.more ? props.active ? '1500px' : '0' : props.active ? '400px' : '0'};
  overflow: hidden;
  margin-bottom: ${props => props.issetMore ? props.active ? '20px' : '0' : props.active ? '5px' : '0'};
  transition: all 0.2s;
`

export const ShowMore = styled.span<{active}>`
  color: ${Colors.BRAND};
  font : ${Fonts.OS_400_14_21};
  cursor: pointer;
  // display: ${p => p.active ? 'block' : 'none'};
  //padding-bottom: 10px;
  
  &:hover {
    color: ${Colors.BRAND_DARK}
  }
`


export const AccordeonBody = styled.div<{active:boolean}>`

 
   
`