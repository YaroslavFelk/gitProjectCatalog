import styled from "styled-components";
import {Colors} from "../../../../constants/colors";
import {BREAKPOINTS} from "../../../../constants/breakpoints";
import {Fonts} from "../../../../constants/fonts";

export const PriceSliderStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
  position: relative;
  flex-wrap: wrap;
    
  & .horizontal-slider {
    //width: 200px;
    //max-width: 200px;
    height: 35px;
    order: 2;
    width: 100%;
    max-width: 100%;
    margin-top: 5px;
  }
  
  & .horizontal-slider .example-track {
    top: calc(50% - 1px);
    height: 2px;
    background-color: ${Colors.TEXT_DISABLED};
  }
  
  & .example-track.example-track-1 {
    background-color: ${Colors.BRAND};
  }
  
  & .horizontal-slider .thumb {
    top: calc( 50% - 7px);
    width: 15px;
    height: 15px;
    line-height: 15px;
    border-radius: 50%;
    background: #fff;
    //position: absolute;
  }
 
  
  & .thumb {
    font-size: 0.9em;
    text-align: center;
    background-color: black;
    color: white;
    cursor: pointer;
    border: 2px solid ${Colors.BRAND};
    box-sizing: border-box;
    outline: none;
    
    &:before {
      content: '';
      position: absolute;
      opacity: 0;
      width: 50px;
      height: 35px;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }    
  
  // @media (${BREAKPOINTS.TILL_LG}) {
  //
  //   margin-bottom: 10px;
  //    
  //   & .horizontal-slider {
  //   
  //     height: 35px;
  //   }
  // }
`

export const PriceInput = styled.div`
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
`

export const PriceInputsBetween = styled.span`
  height: 2px;
  width: 5px;
  background: ${Colors.BORDER_PRIMARY};
`

export const PriceRange = styled.div`
  width: 100%;
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
