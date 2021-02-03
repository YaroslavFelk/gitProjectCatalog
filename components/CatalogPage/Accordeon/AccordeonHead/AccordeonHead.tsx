import * as React from "react"
import {AccordeonBlock, AccordeonToggle} from "./AccordeonHead.sc";


const  AccordeonHead= ({title, active, setActive}) => {
  return (
    <AccordeonBlock onClick={() => setActive(!active)} >
      <span>{title}</span>
      <AccordeonToggle
              active={active}
      >
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.17165 0.813401L0.114695 4.86192C-0.0380198 5.01434 -0.0382542 5.26166 0.114129 5.41434C0.266511 5.56705 0.513836 5.56731 0.66655 5.41492L4.7238 1.36612C4.8761 1.21381 5.12391 1.21381 5.27651 1.36641L9.33346 5.41492C9.48618 5.56731 9.7335 5.56705 9.88589 5.41434C9.96198 5.33811 10 5.23824 10 5.13842C10 5.03832 9.96177 4.93823 9.8853 4.86192L5.82864 0.813694C5.37173 0.35678 4.62827 0.35678 4.17165 0.813401Z" fill="#353238"/>
        </svg>
      </AccordeonToggle>
    </AccordeonBlock>
  )
}



export default AccordeonHead