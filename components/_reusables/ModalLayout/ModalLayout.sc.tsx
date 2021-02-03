import styled from "styled-components";
import {Colors} from "../../../constants/colors";
import {BREAKPOINTS} from "../../../constants/breakpoints";
import {Fonts} from "../../../constants/fonts";

export const ModalFormBLock = styled.div<{active}>`
  position: fixed;
  z-index: 19000;
  right: ${p => p.active ? '0px' : '-560px'};
  top: 0;
  min-height: 100%;
  height: 100%;
  width: 500px;
  max-width: calc(100% - 80px);
  border-left: 1px solid ${Colors.BORDER_PRIMARY};
  display: flex !important;
  flex-wrap: nowrap;
  flex-direction: column;
  background: #fff;
  transition: right 0.2s;
`

export const ModalClose = styled.div`
  position: absolute;
  top: 15px;
  left: -45px;
  height: 30px;
  width: 30px;
  border: 1px solid #e3e3e3;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
  &:hover {
    background-color: ${Colors.HOVER};
  }

  @media (${BREAKPOINTS.TILL_MD}){
    position: absolute;
    top: unset;
    bottom: 30px;
    left: -65px;
    height: 50px;
    width: 50px;
    border: 1px solid #e3e3e3;
    box-shadow: none;
    border-radius: 3px;
    cursor: pointer;
    //background: #fff url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNTUyMjEgNS4wMDA5OUw5Ljg4NTM1IDAuNjY3ODM2QzEwLjAzNzkgMC41MTUyNzcgMTAuMDM3OSAwLjI2NzkzNCA5Ljg4NTM1IDAuMTE1Mzk1QzkuNzMyNzkgLTAuMDM3MTQzNSA5LjQ4NTQ1IC0wLjAzNzE2MyA5LjMzMjkxIDAuMTE1Mzk1TDQuOTk5NzUgNC40NDg1NUwwLjY2NjYxNSAwLjExNTM5NUMwLjUxNDA1NyAtMC4wMzcxNjMgMC4yNjY3MTMgLTAuMDM3MTYzIDAuMTE0MTc1IDAuMTE1Mzk1Qy0wLjAzODM2NDIgMC4yNjc5NTQgLTAuMDM4MzgzNyAwLjUxNTI5NyAwLjExNDE3NSAwLjY2NzgzNkw0LjQ0NzMxIDUuMDAwOTdMMC4xMTQxNzUgOS4zMzQxM0MtMC4wMzgzODM3IDkuNDg2NjkgLTAuMDM4MzgzNyA5LjczNDAzIDAuMTE0MTc1IDkuODg2NTdDMC4xOTA0NDQgOS45NjI4NCAwLjI5MDQyNCAxMC4wMDEgMC4zOTA0MDUgMTAuMDAxQzAuNDkwMzg1IDEwLjAwMSAwLjU5MDM0NiA5Ljk2Mjg0IDAuNjY2NjM1IDkuODg2NTdMNC45OTk3NSA1LjU1MzQzTDkuMzMyODkgOS44ODY1N0M5LjQwOTE2IDkuOTYyODQgOS41MDkxNCAxMC4wMDEgOS42MDkxMiAxMC4wMDFDOS43MDkxIDEwLjAwMSA5LjgwOTA2IDkuOTYyODQgOS44ODUzNSA5Ljg4NjU3QzEwLjAzNzkgOS43MzQwMSAxMC4wMzc5IDkuNDg2NjcgOS44ODUzNSA5LjMzNDEzTDUuNTUyMjEgNS4wMDA5OVoiIGZpbGw9IiMzNTMyMzgiLz4KPC9zdmc+Cg==") center/10px no-repeat;
  }
`

export const ModalTitle = styled.div`
  color: ${Colors.TEXT_PRIMARY};
  font: ${Fonts.LA_600_24_24};
  
  @media(${BREAKPOINTS.TILL_MD}) {
      font: ${Fonts.LA_600_24_36};
  }
`
export const ModalHead = styled.div`
  flex: 0 0 60px;
  border-bottom: 1px solid ${Colors.BORDER_PRIMARY};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  
  @media(${BREAKPOINTS.TILL_MD}) {
    border: none;
    height: auto;
    padding: 40px 15px 0;
  }
`


export const ScrollView = styled.div`
  flex: 1;
  overflow: hidden scroll;
  scrollbar-color: transparent transparent;
  
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  
  &::-webkit-scrollbar-track-piece  {
    background-color: transparent;
}
`


export const TransparentCover = styled.div<{ active }>`
  position: fixed;
  z-index: 18999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0);
  display: ${p => p.active ? 'block' : 'none'};
  
  @media (${BREAKPOINTS.TILL_MD}){
    animation:  0.4s ${props => props.active ? 'fade-in' : 'fade-out' }   ease-in-out forwards;
    @keyframes fade-in {
      from {
        left: 100%;
      }
      10% {
        left: 0;
        background: rgba(53, 50, 56, 0) ;
      }
      to {
        background: rgba(53, 50, 56, 0.5) ;
      }
    }
    @keyframes fade-out {
      from {
        background: rgba(53, 50, 56, 0.5) ;
      }
      90% {
        left: 0;
        background: rgba(53, 50, 56, 0) ;
      }
      to {
        left: 100%;
      }
    }
  }
`