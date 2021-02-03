import * as React from "react"
import {StyledOptionRound} from "./OptionRound.sc"


const OptionRound = ({hex = '#ffffff', image = null, onClick = null, name = null, active = false}) => {
  return <StyledOptionRound
    active={active}
    onClick={() => {onClick && onClick()}}
    hex={hex}
    name={name}
    image={image}
  />
}


export default React.memo(OptionRound)