import styled from "styled-components";
import {BREAKPOINTS} from "../../../constants/breakpoints";

export const ModalBLock = styled.div<{active}>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: ${p => p.active ? 'flex' : 'none'};
  z-index: 5;
  justify-content: center;
  align-items: center;
  
  & iframe {
    width: 50%;
    height: 50%;
  }
  
  @media (${BREAKPOINTS.TILL_MD}) {
    & iframe {
      width: 100%;
      height: auto;
    }
  }
`