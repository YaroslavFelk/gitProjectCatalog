import styled from "styled-components";
import {Colors} from "../../../constants/colors";
import {BREAKPOINTS} from "../../../constants/breakpoints";
import {Fonts} from "../../../constants/fonts";

export const PerPageBlock = styled.div<{active : boolean}>`
  border: 2px solid ${Colors.BORDER_PRIMARY};
  border-radius: 3px;
  padding: 6px 15px;
  position: relative;
  outline: ${Colors.BRAND};
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  user-select: none;
  margin-left: 12px;
  font: ${Fonts.OS_400_14_14};
  
  &:hover {
    border-color: ${props => props.active ? Colors.BORDER_PRIMARY  : Colors.BRAND};;
  }

    
  @media (${BREAKPOINTS.TILL_MD}) {
      margin-left: 0;
      
        &:hover {
          border-color: ${Colors.BORDER_PRIMARY};
        }
  }
`

export const PerPageSelect = styled.ul<{active : boolean}>`
  // display: 
  visibility: ${props => props.active ? 'visible'  : 'hidden'};
  position:absolute;
  top: calc( 100% + 5px );
  left: -2px;
  margin: 0;
  padding-inline-start: 0;
  min-width: calc( 100% + 4px );
  list-style-type: none;
  border-radius: 3px;
  z-index: 3;
  background: #fff;
  //padding: 5px 0;
  box-shadow: 3px 3px 0px rgba(53, 50, 56, 0.05);
  opacity: ${props => props.active ? '1'  : '0'};
  transform: scale( ${props => props.active ? '1'  : '0'});
  transition: opacity 0.1s, transform 0.1s;
  
    @media (${BREAKPOINTS.TILL_LG}) {
      bottom: auto;
      top: calc( 100% + 5px);
  }
`

export const PerPageMobile = styled.div`
   border-bottom: 1px solid ${Colors.BORDER_PRIMARY};
   margin-bottom: 20px;
`

export const PerPageArrow = styled.span<{active : boolean}>`
  display: flex;
  width: 10px;
  align-items: center;
  transform:  ${props => props.active ? 'rotate(0)'  : 'rotate(180deg)'};
  transition: all 0.1s;
  margin-left: 15px;
`

export const PerPageItem = styled.li<{active : boolean}>`
  //min-width: calc( 100% + 2px );
  padding: 5px 15px;
  border-left: 2px solid ${Colors.BORDER_PRIMARY};
  border-top: 2px solid ${Colors.BORDER_PRIMARY};
  border-right: 2px solid ${Colors.BORDER_PRIMARY};
  background: ${p => p.active ? Colors.BACKGROUND_ACTIVE : '#fff'};
  font: ${Fonts.OS_400_14_20};
  
  &:hover {
    background-color: ${Colors.HOVER};
  }

   &:first-of-type {
    border-top: 2px solid ${Colors.BORDER_PRIMARY};
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  &:last-of-type {
    border-bottom: 2px solid ${Colors.BORDER_PRIMARY};
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`

export const PerPageLine = styled.div<{isMobile: boolean}>`
  flex-direction: row;
  align-items: center;
  display: ${props => props.isMobile ? 'none'  : 'flex'};

  
  & span {
    white-space: nowrap;
    color: ${Colors.TEXT_SECONDARY};
    font: ${Fonts.OS_400_14_14};    
  }
  
  @media (${BREAKPOINTS.TILL_LG}) {
    display: ${props => props.isMobile ? 'flex'  : 'none'};
    //margin-bottom: 10px;
    //margin-top: 10px;
   
  }
`