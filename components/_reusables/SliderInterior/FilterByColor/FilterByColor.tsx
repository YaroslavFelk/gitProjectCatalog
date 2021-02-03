import * as React from "react"
import {CategoryTabsContainer} from "./FilterByColor.sc"
import OptionRound from "../../OptionRound/OptionRound"


const FilterByColor = ({colors, activeColor, changeColor}) => {
  return (
    <CategoryTabsContainer>
      {Object.values(colors).map((color:any) =>
        <OptionRound
          key={color.slug}
          active={color.slug === activeColor}
          hex={color.hex}
          onClick={() => {
            changeColor(color.slug === activeColor ? null : color.slug)
          }}
        />
      )}
    </CategoryTabsContainer>
  )
}


export default FilterByColor