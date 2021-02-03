import styled from "styled-components";
import {Colors} from "../../../constants/colors";
import {BREAKPOINTS} from "../../../constants/breakpoints";
import {Fonts} from "../../../constants/fonts";

export const VariationsItem = styled.span<{ active: boolean; isExist : boolean }>`
  color: ${Colors.TEXT_SECONDARY};
  line-height: 1em;
  font: ${Fonts.OS_400_14_20};
  pointer-events: ${props => props.isExist ? 'auto' : 'none'};
  position: relative;
  cursor: pointer;
  
  padding: 5px 15px ;
  border-bottom: 2px solid ${Colors.BORDER_PRIMARY};
  display: flex;
  align-items: center;
  user-select: none;
  white-space: nowrap;
  border-radius: 0;
  margin-right: 0;
  color: ${Colors.TEXT_SECONDARY};
  background: ${p => p.active ? Colors.BACKGROUND_ACTIVE : '#fff'};
  

  &:last-of-type {
    border-bottom: none;
  }
  
  /* If option is active */
  // ${ props => (props?.active ? `color: ${Colors.BRAND};`: ``)}
  
  // &:last-of-type {
  //   margin-right: 0;
  // }
  //
  &:hover {
    background: ${Colors.HOVER};
  }
  //
  // &:hover:after {
  //   background: ${p => p.active ? null : Colors.TEXT_PRIMARY};
  //   width: 15px;
  // }
`;

export const VariationsBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  //overflow-x: auto;
  width: 100%;
  position: relative;
`

export const MobileSelect = styled.div<{active}>`
   display: flex;
   align-items: center;
   font: ${Fonts.OS_400_14_14};
   color:${Colors.TEXT_PRIMARY};
   cursor: pointer;
   user-select: none;
   
   & svg {
    margin-right: 5px;
    transform: ${p => p.active ? 'rotate(-180deg)' : null } ;
    fill: ${Colors.TEXT_PRIMARY};
    transition: all 0.1s;
   }
   
   @media( ${BREAKPOINTS.TILL_MD}) { 
       font: ${Fonts.OS_400_12_12};
   }
`

export const MobileOptions = styled.div<{active}>`
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  font : ${Fonts.OS_400_14_14};
  flex-direction: column;
  background: #fff;
  border: 2px solid ${Colors.BORDER_PRIMARY};
  border-radius: 3px;
  box-shadow: 0 5px 20px rgba(53, 50, 56, 0.14);

  transform: scale(${p => p.active ? '1' : '0'});
  opacity: ${p => p.active ? '1' : '0'};
  transition: transform 0.1s, opacity 0.1s;
`

export const PopularSliderItemDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  font: normal normal 400 14px/1.5em 'Open Sans', sans-serif;
  //padding-bottom: 46px;
  //z-index: 2;
  //position: relative;
  
 @media (${BREAKPOINTS.TILL_MD}) {
    margin-top: 15px;
  }
`


export const VariableItemTitle = styled.a`
  //display: block;
  font: ${Fonts.OS_400_14_21};
  color: ${Colors.TEXT_SECONDARY};
  margin: 0 ;
  height: 3em;
  overflow: hidden;
  position: relative; 
  //line-height: 1.5em; 
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; 
  cursor: pointer;
  
  @media( ${BREAKPOINTS.TILL_MD}) {
    height: 4.5em;
    -webkit-line-clamp: 3;
  }
`


export const VariableItemName  = styled.span`
  color: ${Colors.TEXT_PRIMARY};
  text-transform: uppercase;
  font: ${Fonts.OS_400_14_21};
  
  @media (${BREAKPOINTS.TILL_375}) {
    text-align: center;
    height: 42px;
  }
`


export const VariableItemSubTitle = styled.span`
  color: ${Colors.TEXT_SECONDARY};
  text-transform: lowercase;
`

export const FabricInformation = styled.span`
  display: none;
  position: absolute;
  top: 10px;
  left: 10px;
  max-width: calc( 100% - 20px );
  font: normal normal 400 11px/1em 'Open-Sans',sans-serif;
  color: ${Colors.TEXT_SECONDARY};
  z-index: 1;
  background: ${Colors.BACKGROUND_ACTIVE_FILTER_ITEM};
  padding: 5px;  
  border-radius: 3px;
`

export const ImgBlock = styled.a`
  display: block;
  width: 100%;
  padding-bottom: 100%;
  position:relative;
  background: #fff;
  border-radius: 3px;
  
  @media( ${BREAKPOINTS.TILL_MD}) { 
    width: calc(100% + 16px);
    padding-bottom: calc(100% + 16px);
    left: -8px;
  }
`

export const VariableItemImg = styled.div`
  position: absolute;
 top: 0;
 left: 0;
 right: 0;
 height: 100%;
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 overflow: hidden;
 user-select: none;
 -webkit-user-drag: none;
 background: ${Colors.BACKGROUND_CATALOG_ITEM};
 border-radius: 3px;
 
 & img {
  width: 100%;
  height: auto;
  object-fit: contain;
  background: ${Colors.BACKGROUND_ACTIVE};
  mix-blend-mode: darken;
 }
 
`

export const Variations = styled.div`
  //position: absolute;
  //top: calc(100% - 51px );
  //min-height: 52px;
  //width: calc(100% + 2px);
  z-index: 3;
  border-radius: 3px;
  -webkit-transition: height 0.1s;
  transition: height 0.1s;
  //padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (${BREAKPOINTS.TILL_MD}) {
      top: calc(100% - 41px );
  }
`

export const VariationsItemName = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: center;
  color: ${Colors.TEXT_SECONDARY};
  font: normal normal 400 10px/1.5em 'Open-Sans', sans-serif;
  margin-top: 10px;
  margin-bottom: 5px;
  text-transform: uppercase;
`

export const VariableItemPrice = styled.div`
  margin-top: 20px; 
  margin-bottom: 20px;
  position: relative;
  display: flex;
  align-items: flex-start;

  & span {
    font: ${Fonts.OS_400_12_12};
    color: ${Colors.TEXT_SECONDARY};
    margin-left: 5px;
  }
  
  & div {
    font: ${Fonts.OS_600_21_21};
  }
  
  @media( ${BREAKPOINTS.TILL_MD}) { 
    margin-top: 15px; 
    margin-bottom: 15px;
    
    & div {
      font: ${Fonts.OS_600_18_18};
    } 
  }
`

export const OldPrice = styled(VariableItemPrice)`
   & div {
    font: ${Fonts.OS_400_14_21};
    color: ${Colors.TEXT_SUP};
    text-decoration: line-through;
    margin-left: 10px;
  }
`

export const PriceLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const VariableItem = styled.div`
  width: 100%;
  border-radius: 3px;
  position: relative;
`
