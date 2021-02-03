import styled from "styled-components";
import {Colors} from "../../../constants/colors";
import {BREAKPOINTS} from "../../../constants/breakpoints";
import {Fonts} from "../../../constants/fonts";

export const ReactCatalogPagination = styled.div<{pageInfo : string, active : boolean, page : number, lastPage : number}>`
  width: 100%;

  & .pagination {
    display: flex;
    flex-direction: row;
    padding-left: 0;
    user-select: none;
    margin: 0;
  }
  
  & li {
      display: block;
      margin-right: 5px;
      background: #FFF;
      border: 2px solid ${Colors.BORDER_PRIMARY};
      border-radius: 3px;
  }
  
  & li:hover {
    background: ${Colors.BRAND};
    border: 2px solid ${Colors.BRAND};
  }
  
  & li:hover a svg {
    fill: #fff;
  }
  & li:hover a {
    color: #fff;
  }
  
  & li a {
    width: 40px;
    height: 40px;
    border-bottom: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    color: ${Colors.TEXT_PRIMARY};
    font: ${Fonts.OS_400_14_14};
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
  }
  
  & .previous {
    transform: rotate(180deg);
    display: ${p => p.page === 1 ? 'none' : 'block'};
  }
  
  & .next {
     display: ${p => p.page === p.lastPage ? 'none' : 'block'};
  }

  
  & .break-me {
    pointer-events: none;
  }
  
  & .active {
    background: ${Colors.BRAND};
    border: 2px solid ${Colors.BRAND};
    border-radius: 3px; 
  }
  
  & .active a {
     color: #fff;
  }
  
  & .next {
    margin-right: 0;
  }
    
    
  @media (${BREAKPOINTS.TILL_SM}) {
      position: fixed;
      bottom: 10px;
      width: calc( 100% - 95px );
      height: 50px;
      // right: ${props => props.active ? '15px' : '-100%'};
      // transition: right 0.1s;
      background: #5FD975;
      border-radius: 3px;
      z-index: 50;
      animation:  0.5s ${props => props.active ? 'slide-left' : 'slide-right' }   ease-in-out forwards;
      
      @keyframes slide-left {
        from {
          right: -100%;
        }
        60% {
          right: -100%;
        }
        to {
          right: 15px;
        }
      }
      
      @keyframes slide-right {
        from {
           right: 15px;
        }
        20% {
          right: -100%;
        }
        to {
          right: -100%;
        }
      }
      
      
      & .pagination {
   
       width: 100%;
       display: flex;
       justify-content: space-between;
       height: 50px;
      }
      
      & li {
        display: none;
      }
      
      & .previous {
        display: flex;
        background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDkgMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjkwMjIzOCA5LjMyNTM2TDcuMzc5ODYgMTUuODE2NUM3LjYyMzc0IDE2LjA2MDggOC4wMTk0NiAxNi4wNjEyIDguMjYzNzQgMTUuODE3NEM4LjUwODA4IDE1LjU3MzYgOC41MDg0OSAxNS4xNzc5IDguMjY0NjggMTQuOTMzNUwxLjc4NjU4IDguNDQxOTNDMS41NDI4OSA4LjE5ODI0IDEuNTQyODkgNy44MDE3NCAxLjc4NzA1IDcuNTU3NThMOC4yNjQ2OCAxLjA2NjQ2QzguNTA4NDkgMC44MjIxMTMgOC41MDgwOCAwLjQyNjM5NCA4LjI2Mzc0IDAuMTgyNTgxQzguMTQxNzcgMC4wNjA4MzExIDcuOTgxOTkgLTEuMTQ0NDFlLTA1IDcuODIyMjcgLTEuMTQ0NDFlLTA1QzcuNjYyMTEgLTEuMTQ0NDFlLTA1IDcuNTAxOTYgMC4wNjExNzQ0IDcuMzc5ODYgMC4xODM1MThMMC45MDI3MDcgNi42NzQxOEMwLjE3MTY0NCA3LjQwNTI0IDAuMTcxNjQ0IDguNTk0NzcgMC45MDIyMzggOS4zMjUzNloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");
        background-position: center;
        background-repeat: no-repeat;
        transform: rotate(0);
        background-color: initial;
        fill: #fff;
        border: none;
        border-radius: 50%;
      } 
      
      & svg {
        display: none;
      }
      
      & .next {
         display: flex;
        background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDkgMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjkwMjIzOCA5LjMyNTM2TDcuMzc5ODYgMTUuODE2NUM3LjYyMzc0IDE2LjA2MDggOC4wMTk0NiAxNi4wNjEyIDguMjYzNzQgMTUuODE3NEM4LjUwODA4IDE1LjU3MzYgOC41MDg0OSAxNS4xNzc5IDguMjY0NjggMTQuOTMzNUwxLjc4NjU4IDguNDQxOTNDMS41NDI4OSA4LjE5ODI0IDEuNTQyODkgNy44MDE3NCAxLjc4NzA1IDcuNTU3NThMOC4yNjQ2OCAxLjA2NjQ2QzguNTA4NDkgMC44MjIxMTMgOC41MDgwOCAwLjQyNjM5NCA4LjI2Mzc0IDAuMTgyNTgxQzguMTQxNzcgMC4wNjA4MzExIDcuOTgxOTkgLTEuMTQ0NDFlLTA1IDcuODIyMjcgLTEuMTQ0NDFlLTA1QzcuNjYyMTEgLTEuMTQ0NDFlLTA1IDcuNTAxOTYgMC4wNjExNzQ0IDcuMzc5ODYgMC4xODM1MThMMC45MDI3MDcgNi42NzQxOEMwLjE3MTY0NCA3LjQwNTI0IDAuMTcxNjQ0IDguNTk0NzcgMC45MDIyMzggOS4zMjUzNloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");
        background-position: center;
        background-repeat: no-repeat;
        background-color: initial;
        fill: #fff;
          transform: rotate(180deg);
        border: none;
        border-radius: 50%;
        margin-left: auto;

      }
      
      &:after {
        content: '${props => props.pageInfo}';
        position: absolute;
        top: 50%;
        left: 50%;
        color: #fff;
        transform: translate(-50%, -50%);
      }
      & li:hover {
        background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDkgMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjkwMjIzOCA5LjMyNTM2TDcuMzc5ODYgMTUuODE2NUM3LjYyMzc0IDE2LjA2MDggOC4wMTk0NiAxNi4wNjEyIDguMjYzNzQgMTUuODE3NEM4LjUwODA4IDE1LjU3MzYgOC41MDg0OSAxNS4xNzc5IDguMjY0NjggMTQuOTMzNUwxLjc4NjU4IDguNDQxOTNDMS41NDI4OSA4LjE5ODI0IDEuNTQyODkgNy44MDE3NCAxLjc4NzA1IDcuNTU3NThMOC4yNjQ2OCAxLjA2NjQ2QzguNTA4NDkgMC44MjIxMTMgOC41MDgwOCAwLjQyNjM5NCA4LjI2Mzc0IDAuMTgyNTgxQzguMTQxNzcgMC4wNjA4MzExIDcuOTgxOTkgLTEuMTQ0NDFlLTA1IDcuODIyMjcgLTEuMTQ0NDFlLTA1QzcuNjYyMTEgLTEuMTQ0NDFlLTA1IDcuNTAxOTYgMC4wNjExNzQ0IDcuMzc5ODYgMC4xODM1MThMMC45MDI3MDcgNi42NzQxOEMwLjE3MTY0NCA3LjQwNTI0IDAuMTcxNjQ0IDguNTk0NzcgMC45MDIyMzggOS4zMjUzNloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=") center no-repeat;
        border: none;
      }
  }
  
  @media (${BREAKPOINTS.TILL_375}) {
       width: calc( 100% - 95px);
       right: 15px;
  }
`

export const CatalogPaginationLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  
  @media( ${BREAKPOINTS.TILL_MD}) { 
   margin-top: 0;
  }
`