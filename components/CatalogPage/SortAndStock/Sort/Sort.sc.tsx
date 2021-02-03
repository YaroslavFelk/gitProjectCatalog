import styled from "styled-components";
import {Colors} from "../../../../constants/colors";
import {BREAKPOINTS} from "../../../../constants/breakpoints";
import {Fonts} from "../../../../constants/fonts";

export const SortBlock = styled.div<{active : boolean, isMobile :boolean}>`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 40px;
  position: relative;

  @media (${BREAKPOINTS.TILL_MD}) {
    display: ${props => props.isMobile ? 'flex'  : 'none'};
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
  }
`

const SortItemStyle = styled.div`
  font: ${Fonts.OS_400_14_21};
  margin-right: 12px;
  padding-bottom: 6px;
  
  &:last-of-type {
    margin-right: 0;
  }
`

export const SortItemTitle = styled(SortItemStyle)`
  color: ${Colors.TEXT_SECONDARY};
  
  @media( ${BREAKPOINTS.TILL_MD}) { 
   display: none;
  }
`

export const SortMobile = styled.div`
   border-bottom: 1px solid ${Colors.BORDER_PRIMARY};
   margin-bottom: 20px;
`

export const SortSelect = styled.div`
  border-radius: 3px;
  border: 2px solid ${Colors.BORDER_PRIMARY};
  padding: 8px 15px;
  font : ${Fonts.OS_400_14_20};
  cursor: pointer;
  user-select: none;
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
  
  @media(${BREAKPOINTS.TILL_MD}) {
      font : ${Fonts.OS_400_14_14};
      padding: 6px 15px;
  }
`

export const SortOptions = styled.div<{active : boolean}>`
  display: flex;
  align-items: center;
  flex-direction: row;
  
  @media( ${BREAKPOINTS.TILL_MD}) { 
    flex-direction: column;
    position: absolute;
    top: calc(100% + 5px);
    z-index: 10;
    background: #fff;
    border-radius: 3px;
    border: 2px solid ${Colors.BORDER_PRIMARY};
    // display: ${props => props.active ? 'block' : 'none'};
    font : ${Fonts.OS_400_14_14};
    transform: scale(${p => p.active ? '1' : '0'});
    opacity: ${p => p.active ? '1' : '0'};
    transition: transform 0.1s, opacity 0.1s;
    //box-shadow: 3px 3px 0 rgba(53, 50, 56, 0.05);
    //min-width: 100%;
  }
`

export const SortItem = styled(SortItemStyle)<{active : boolean}>`
  color: ${props => props.active ? Colors.BRAND  : Colors.TEXT_PRIMARY};
  position: relative;
  cursor: pointer;

  
  &:hover {
    color:  ${p => p.active ? null : Colors.TEXT_PRIMARY};
  }
  
  &:hover:after {
    width: 15px;
    background: ${p => p.active ? null : Colors.TEXT_PRIMARY} ;
  }
  
  &:after {
    content: '';
    position:absolute;
    top: calc( 100% - 0.9px ) ;
    left: calc( 50% - 10px );
    width: ${p => p.active ? '15px' : '0'};
    height: 1px;
    background: ${Colors.BRAND};
    //transition: width 0.1s;
  }
  
  @media( ${BREAKPOINTS.TILL_MD}) { 
    padding: 5px 15px ;
    border-bottom: 2px solid ${Colors.BORDER_PRIMARY};
    font: ${Fonts.OS_400_14_20};
    margin-right: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    user-select: none;
    white-space: nowrap;
    color: ${Colors.TEXT_PRIMARY}; 
    background: ${p => p.active ? Colors.BACKGROUND_ACTIVE : '#fff'};
    
    &:after {
      display: none;
    }
    
    &:last-of-type {
      border-bottom: none;
    }
  }
  
  // //min-width: calc( 100% + 2px );
  // padding: 5px 15px;
  // border-left: 2px solid ${Colors.BORDER_PRIMARY};
  // border-top: 2px solid ${Colors.BORDER_PRIMARY};
  // border-right: 2px solid ${Colors.BORDER_PRIMARY};
  // font: normal normal 400 14px/20px 'Open-Sans', sans-serif;
  // user-select: none;
  // white-space: nowrap;
  //
  // &:first-of-type {
  //   border-top: 2px solid ${Colors.BORDER_PRIMARY};
  //   border-top-left-radius: 3px;
  //   border-top-right-radius: 3px;
  // }
  //
  // &:last-of-type {
  //   border-bottom: 2px solid ${Colors.BORDER_PRIMARY};
  //   border-bottom-left-radius: 3px;
  //   border-bottom-right-radius: 3px;
  // }
  //
  // &:hover {
  //   background-color: ${Colors.HOVER};
  // }
`