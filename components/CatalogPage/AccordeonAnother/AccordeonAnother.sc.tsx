import styled from "styled-components";
import {Colors} from "../../../constants/colors";

export const AccordeonBlock = styled.div<{ order }>`
  order: ${p => p.order ? p.order : null};
  //padding-bottom: 10px;
`

export const AccordeonBlockCheckbox = styled.div`
  width: 16px;
  height: 16px;
  
  box-sizing: border-box;
  border-radius: 3px;

  margin-right: 10px;
  background-position: center;
  background-repeat: no-repeat  ;
  

`

export const Color = styled.div<{ color: string; name: string; active: boolean;  isset:boolean}>`
  width: 31px;
  height: 31px;
  border-radius: 50%;
  background-color: ${props => props.color};
  cursor: pointer;
  display: inline-block;
  margin-right: 5px;
  position: relative;

  pointer-events: ${props => props.isset ? 'none' : 'auto'};
  opacity: ${props => props.isset ? 0.3 : 1};
  user-select: none;
  
  &::before {
    content: '${props => props?.name ?? 'Ошибка'}';
    position: absolute;
    bottom: calc(100% + 5px);
    left: 50%;
    opacity: 0;
    pointer-events: none;
    line-height: 1em;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, .65);
    padding: 3px 5px;
    color: ${Colors.TEXT_LIGHT};
    border-radius: 3px;
    max-width: 200px;
    font: normal normal 400 12px/1em 'Open-Sans', sans-serif;
    white-space: nowrap;
    z-index: 2;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    z-index: 2;
    background: ${props => {
  return props.active ?
          'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI3IiB2aWV3Qm94PSIwIDAgOSA3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNOC44Njg3NCAwLjE5Mzc0MkM4LjcxNzM3IDAuMDcyMTAxNCA4LjQ5NjA4IDAuMDk2MjM2MiA4LjM3NDQ4IDAuMjQ3NTg0TDMuNjk2NjIgNi4wNjk0MUMzLjYzMzEzIDYuMTM3MzEgMy41NDczMSA2LjE3NjY1IDMuNDU0MDkgNi4xODAzOUMzLjM1ODE0IDYuMTg0MjYgMy4yNjcyNiA2LjE0OTk4IDMuMTk4ODEgNi4wODQ5M0wwLjU5NDkyNSAzLjU4ODk5QzAuNDU0NzM5IDMuNDU0NjQgMC4yMzIyMTcgMy40NTkzNyAwLjA5Nzg1MDMgMy41OTk1MkMtMC4wMzY0OTkzIDMuNzM5NjkgLTAuMDMxNzg4NCAzLjk2MjIzIDAuMTA4MzggNC4wOTY2TDIuNzEzMyA2LjU5MzUzQzIuOTExMjMgNi43ODE2NyAzLjE2NzM0IDYuODgzODMgMy40Mzg3MSA2Ljg4MzgzQzMuNDUzMjIgNi44ODM4MyAzLjQ2NzgxIDYuODgzNTQgMy40ODIzOCA2Ljg4Mjk0QzMuNzY5ODEgNi44NzEzOSA0LjAzMzgyIDYuNzQ2OTkgNC4yMjU3MiA2LjUzMjY4QzQuMjI5ODkgNi41MjgwMiA0LjIzMzkzIDYuNTIzMjQgNC4yMzc4NyA2LjUxODM3TDguOTIyNTggMC42ODgwMDRDOS4wNDQxOCAwLjUzNjYzOCA5LjAyMDA5IDAuMzE1MzY1IDguODY4NzQgMC4xOTM3NDJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K") center/10px no-repeat'
          : '';
}}
  }
`;

export const PriceFilter = styled.div``



export const RadioItem = styled.div<{active: boolean, isset: boolean}>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  font: normal normal 400 14px/20px 'Open-Sans', sans-serif;
  color: ${props => props.isset ? Colors.TEXT_DISABLED : null};
  pointer-events: ${props => props.isset ? 'none' : 'auto'};
  user-select: none;
  cursor: pointer;
  
  
  & ${AccordeonBlockCheckbox} {
    background-image:  ${props => props.active
        ? 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik05Ljg1MzU2IDAuNDc0NTE5QzkuNjU4MzEgMC4yNzkyNDYgOS4zNDE3NSAwLjI3OTI0NiA5LjE0NjQ1IDAuNDc0NTE5TDMuMTU2MTQgNi40NjQ4OUwwLjg1MzU2NCA0LjE2MjMxQzAuNjU4MzExIDMuOTY3MDQgMC4zNDE3NDggMy45NjcwNiAwLjE0NjQ1NSA0LjE2MjMxQy0wLjA0ODgxODQgNC4zNTc1NiAtMC4wNDg4MTg0IDQuNjc0MTMgMC4xNDY0NTUgNC44Njk0TDIuODAyNTkgNy41MjU0OUMyLjk5Nzc4IDcuNzIwNzUgMy4zMTQ1OCA3LjcyMDYxIDMuNTA5NyA3LjUyNTQ5TDkuODUzNTYgMS4xODE2M0MxMC4wNDg4IDAuOTg2Mzc0IDEwLjA0ODggMC42Njk3OTIgOS44NTM1NiAwLjQ3NDUxOVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=")'
        : '#fff'};
    background-color: ${props => props.active ? Colors.BRAND : props.isset ? Colors.TEXT_DISABLED : '#fff'};
    border: ${props => props.active ? 'none' : `2px solid ${Colors.BORDER_PRIMARY}` } ;
    transition: all 0.1s;
  }
  
  
  &:hover ${AccordeonBlockCheckbox} {
    border-color: ${Colors.BRAND};
  }
`


export const AccordeonBodyContainer = styled.div<{active:boolean, }>`
  max-height: ${props => props.active ? '100px' : '0'};
  margin-bottom: ${props => props.active ? '20px' : '0'};
  // margin-top: ${props => props.active ? '10px' : '0'}; 
  overflow: ${props => props.active ? 'hidden' : 'hidden !important'};
  transition: all 0.1s;
  // animation:  0.2s ${props => props.active ? 'ovwrflowToggleVis' : 'ovwrflowToggleHidden' }   linear forwards;


    @keyframes ovwrflowToggleVis {
      from {
        margin-bottom: 0;
        margin-top: 0;
        max-height: 0;
      }
      to {
        margin-bottom: 10px;
        margin-top: 10px; 
        max-height: 100px;
      }
    }
    
    @keyframes ovwrflowToggleHidden {
      from {
        margin-bottom: 10px;
        margin-top: 10px; 
        max-height: 100px;
      }
      to {

        margin-bottom: 0;
        margin-top: 0; 
        max-height: 0;
      }
    }
  }
`


export const AccordeonBody = styled.div<{active:boolean}>`

 
   
`