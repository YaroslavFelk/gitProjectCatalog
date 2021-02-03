import * as React from "react"
import AccordeonHead from "../Accordeon/AccordeonHead";

import {AccordeonBlock, AccordeonBody, AccordeonBodyContainer} from "./AccordeonAnother.sc";

const  AccordeonAnother = ({title, children}) => {
  const [active, setActive] = React.useState(false)

  return (
          <AccordeonBlock order={'0'}>
            <AccordeonHead title={title} active={active} setActive={setActive} />

              <AccordeonBody active={active}>
                <AccordeonBodyContainer
                        onTransitionEnd={(e: any) => e.target.style.overflow = active ? 'visible' : 'hidden'} active={active}>
                  {children}
                </AccordeonBodyContainer>
              </AccordeonBody>
          </AccordeonBlock>
  )
}



export default AccordeonAnother