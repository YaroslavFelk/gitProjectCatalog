import styled from "styled-components";
import {Colors} from "../../../constants/colors";
import {BREAKPOINTS} from "../../../constants/breakpoints";

export const VariationsBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 5px;
`
// export const PopularSliderItemDesc = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 15px;
//   font: normal normal 400 14px/1.5em 'Open Sans', sans-serif;
//   height: 135px;
// `

export const PopularSliderItemTitle = styled.div`
  text-align: center;
  color: ${Colors.TEXT_SECONDARY};
  margin: 0;
  height: 3em;
  overflow: hidden;
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
  background: ${Colors.BACKGROUND_CATALOG_ITEM};
  padding: 5px;  
  border-radius: 3px;
`

export const VariableItem = styled.div`
  width: 100%;
  //padding: 15px;
  border-radius: 3px;
  position: relative;
  display: block;
  overflow: hidden;
`

export const ImgBlock = styled.div`
  display: block;
  width: 100%;
  padding-bottom: 100%;
  position:relative;
  background: #fff;
  border-radius: 3px;
  cursor: pointer;
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
 background: ${Colors.BACKGROUND_ACTIVE};
 border-radius: 3px;
 
 & img {
  width: 100%;
  height: auto;
  object-fit: contain;
  background: ${Colors.BACKGROUND_ACTIVE};
  mix-blend-mode: darken;
 }
 
`