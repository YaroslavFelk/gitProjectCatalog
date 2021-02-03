import * as React from "react"
import {Color, ColorCount, ColorLength, VariationsColorBlock} from "./VariationsCircles.sc";
import {useState} from "react";
import useResizeListener from "../../../_hooks/useResizeListener";
import Link from "next/link";
import {PopularSliderItemDesc} from "../VariableProductPolaroid.sc";
import {BREAKPOINTS_NUMBERS} from "../../../../constants/breakpoints";




const  VariationsCircles = ({variation, isActiveAttribute, changeActiveVariations, activeVariation, existingAttributes, variations, defaultVarId, url}) => {
  const [arrayColors, setArrayColors] = React.useState(setColors(3))

  function setColors(count) {
    let isSetActiveAttr = 0
    return variation?.taxonomy_options?.filter( (option, i) => {

      let isActiveAttr = isActiveAttribute(option.term_slug, activeVariation)
      isSetActiveAttr =  isActiveAttr ? 1 : isSetActiveAttr
      if (isActiveAttr) {
        return true
      }
      if ( !isActiveAttr &&  i < count + isSetActiveAttr - 1 ) {
        return true
      }
    })
  }

  // const ref = React.useRef(null)
  React.useEffect( () => {
    setArrayColors(setColors(window.innerWidth < BREAKPOINTS_NUMBERS.MD ? 3 : 5))
    window.addEventListener('resize',  () => {
      setArrayColors(setColors(window.innerWidth < BREAKPOINTS_NUMBERS.MD ? 3 : 5))
    })
  }, [])

  let fabric = false

  return (
          <VariationsColorBlock >
            {arrayColors.map( (option, i) => {
              variations.find( itemVar => {
                let variat = itemVar.variation_attributes
                        .find( attr => attr.taxonomy_slug === variation.taxonomy_slug &&  attr.term_slug === option.term_slug)
                variat ? fabric = variat?.details?.image?.w100 : null

                return variat
              })

              let isActiveAttr = isActiveAttribute(option.term_slug, activeVariation)

              return <Color
                      key={option.term_slug}
                      name={option.term_name}
                      img={fabric}
                      isExist={existingAttributes ? existingAttributes.taxonomy_options.includes(option.term_slug) : true}
                      active={isActiveAttr}
                      onClick={() => !isActiveAttr && changeActiveVariations(variation.taxonomy_slug, option, activeVariation)}
                  />
              }
            )}
            <Link passHref href={url} ><ColorCount>+183</ColorCount></Link>
          </VariationsColorBlock >
  )
}



export default VariationsCircles