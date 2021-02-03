import * as React from "react"
import {ActiveFilterItemClose, ActiveFilterItemStyle, Color} from "./ActiveFilterItem.sc";
import {Close} from "../../_icons/Close";


const ActiveFilterItem = ({value, close, hex = ''}) => {
  return (
    <ActiveFilterItemStyle onClick={() => close()}>
      {hex && <Color hex={hex}/>}
      {value}
      <ActiveFilterItemClose >
        <Close />
      </ActiveFilterItemClose>
    </ActiveFilterItemStyle>
  )
}



export default ActiveFilterItem