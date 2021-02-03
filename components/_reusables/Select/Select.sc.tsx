import styled from "styled-components";
import {Colors} from "../../../constants/colors";
import {Col} from "../../Grid";
import {Fonts} from "../../../constants/fonts";
import {BREAKPOINTS} from "../../../constants/breakpoints";

export const OptionStyle = styled.div`
  padding: 7px 15px ;
  border-bottom: 2px solid ${Colors.BORDER_PRIMARY};
  cursor: pointer;
  display: flex;
  align-items: center;
  user-select: none;
  white-space: nowrap;
  
  &:hover {
    background: ${Colors.HOVER};
  }
  
  &:last-of-type {
    border-bottom: none;
  }
`

export const SelectedOptionColor = styled.span<{ color }>`
  font: normal normal 400 10px/1em 'Open-Sans', sans-serif;
  height: 20px;
  width: 20px;
  background-color: ${p => p.color};
  border-radius: 10px;
  margin-right: 5px;
  white-space: nowrap;
`
export const SelectedOption = styled.span`
  font: normal normal 400 10px/1em 'Open-Sans', sans-serif;
  background: ${Colors.BRAND};
  border-radius: 20px;
  padding: 5px 10px;
  margin-right: 5px;
  white-space: nowrap;
  color: #fff;
`;

export const Select = styled(Col)`
  flex: 1;
  max-width: calc(100% - 120px);
  position: relative;
`

export const Display = styled.div<{ active }>`
  border-radius: 3px;
  border: 2px solid ${props => props.active ? Colors.BRAND : Colors.BORDER_PRIMARY};
  padding: 8px 15px;
  font : ${Fonts.OS_400_14_20};
  cursor: pointer;
  user-select: none;
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
`;

export const DropdownArrow = styled.div<{ active }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 100%;
  background: #fff;
  z-index: 5;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    transition: .1s;
    background: transparent url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEwIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00LjcyNTYxIDAuMTE0MTI4TDAuMTEzMDg0IDQuNzM5NDJDLTAuMDM3OTUxNCA0Ljg5MDk2IC0wLjAzNzY5NzUgNS4xMzYzMSAwLjExMzg2NSA1LjI4NzZDMC4yNjU0MDkgNS40Mzg3NyAwLjUxMDg5OCA1LjQzODM4IDAuNjYyMDUgNS4yODY4Mkw1LjAwMDA1IDAuOTM2ODRMOS4zMzgwMyA1LjI4Njk4QzkuNDg5MiA1LjQzODUyIDkuNzM0NTMgNS40Mzg5MSA5Ljg4NjEgNS4yODc3NkM5Ljk2MjA3IDUuMjExOTIgMTAuMDAwMSA1LjExMjU2IDEwLjAwMDEgNS4wMTMyMUMxMC4wMDAxIDQuOTE0MTEgOS45NjIzMyA0LjgxNTE0IDkuODg2ODggNC43Mzk0NEw1LjI3NDQ2IDAuMTE0MTI4QzUuMjAxODUgMC4wNDExNDAxIDUuMTAzMDIgMC4wMDAxODMxMDUgNS4wMDAwNSAwLjAwMDE4MzEwNUM0Ljg5NzA4IDAuMDAwMTgzMTA1IDQuNzk4MzcgMC4wNDEyNTc0IDQuNzI1NjEgMC4xMTQxMjhaIiBmaWxsPSIjMzUzMjM4Ii8+Cjwvc3ZnPgo=") center/10px no-repeat;
    ${props => props.active ? 'transform: rotateZ(0);' : 'transform: rotateZ(180deg);'}
  }
`

export const Options = styled.div<{ active }>`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  z-index: 10;
  background: #fff;
  border-radius: 3px;
  border: 2px solid ${Colors.BORDER_PRIMARY};
  font : ${Fonts.OS_400_14_14};
  transform: scale(${p => p.active ? '1' : '0'});
  opacity: ${p => p.active ? '1' : '0'};
  transition: transform 0.1s, opacity 0.1s;
  
  @media(${BREAKPOINTS.TILL_MD}){
    left: unset;
    right: 0;
  }
`

export const SelectBlock = styled.div`
    position: relative;
`