import * as React from 'react';
import {ModalClose, ModalFormBLock, ModalHead, ModalTitle, ScrollView, TransparentCover} from "./ModalLayout.sc";
import useResizeListener from "../../_hooks/useResizeListener";
import {BREAKPOINTS_NUMBERS} from "../../../constants/breakpoints";
import {useRef} from "react";
import {Close} from "../../_icons/Close";


const ModalLayout = ({children, isShown,  onClick, icon = null,  name = ''}) => {
  const [isMobile, setIsMobile] = React.useState(true)
  const ref = useRef()

  useResizeListener(BREAKPOINTS_NUMBERS.MD, setIsMobile)

  return (
          <>
            {isMobile && <TransparentCover ref={ref} onClick={onClick} active={isShown}/> }
            <ModalFormBLock active={isShown} >
              {isShown && <>
              <ModalClose
                  onClick={onClick}
              >
                {icon ? icon() : <Close/>}
              </ModalClose>

               {name && <ModalHead>
                  <ModalTitle>{name}</ModalTitle>
                </ModalHead>}


                <ScrollView>
                  {children}
                </ScrollView>
              </>}
            </ModalFormBLock>
          </>
  )
};

export default ModalLayout;
