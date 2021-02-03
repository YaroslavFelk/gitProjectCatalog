import styled from "styled-components";
import {Colors} from "../../../../constants/colors";
import {Fonts} from "../../../../constants/fonts";

export const AccordeonBlock = styled.div`
`

export const AccordeonHeadBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  margin-top: 30px;
  cursor: pointer;
  user-select: none;
  font: ${Fonts.LA_400_16_24};
  margin-bottom: 5px;
`

export const AccordeonToggle = styled.span<{active: boolean}>`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 2;
  width: 10px;
  height: ${props => props.active ? '1px' : '11px'};
  display: flex;
  align-items: center;
  transition: all 0.1s;
  user-select: none;
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


export const AccordeonBody = styled.div<{active:boolean}>``
