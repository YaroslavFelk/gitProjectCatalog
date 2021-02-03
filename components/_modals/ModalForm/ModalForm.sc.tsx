import styled from "styled-components";
import {Colors} from "../../../constants/colors";
import {Col} from "../../Grid";
import {Fonts} from "../../../constants/fonts";

export const ModalFormLayout = styled.div<{active}>`
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
`

export const ModalFormBLock = styled.div<{active}>`
  position: fixed;
  z-index: 19000;
  right: ${p => p.active ? '0px' : '-560px'};
  top: 0;
  min-height: 100%;
  height: 100%;
  width: 500px;
  max-width: calc(100% - 60px);
  border-left: 1px solid ${Colors.BORDER_PRIMARY};
  display: flex !important;
  flex-wrap: nowrap;
  flex-direction: column;
  background: #fff;
  transition: right 0.2s;
`