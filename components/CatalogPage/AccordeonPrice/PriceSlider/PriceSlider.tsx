import * as React from "react"
import ReactSlider from "react-slider";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {ACatalog} from "../../../../constants/actions";
import {PriceInput, PriceInputsBetween, PriceRange, PriceSliderStyle} from "./PriceSlider.sc";
import {useState} from "react";
import {formatPrice} from "../../../../utils";
import InputRange from "../../CatalogFilter/InputRange/InputRange";
import {Range} from "rc-slider";
import {FilterSliderStyle} from "../../Accordeon/Accordeon.sc";

const  PriceSlider = () => {
  const dispatch = useDispatch()
  let activePriceRange = useSelector((state:RootState) => state.catalog.activeFilter.priceRange)
  const initialPriceRange = useSelector((state:RootState) => state.catalog.initialFilter.priceRange)
  const [sliderRange, setSlideRange] = useState(activePriceRange)
  React.useEffect(() => {
    setSlideRange(activePriceRange)
  }, [activePriceRange])

  function inputDispatch(val, isMin) {
    setSlideRange(isMin ? [val, sliderRange[1]] : [  sliderRange[0], val])
    dispatch({
      type: ACatalog.CHANGE_PRICE,
      payload: {
        priceRange: isMin ? [val, sliderRange[1]] : [  sliderRange[0], val]
      }
    })
  }


  return (
    <PriceSliderStyle>
      <InputRange
              value={sliderRange[0]}
              dispatch={inputDispatch}
              isMin={true}
              notCountValue={[initialPriceRange[0], sliderRange[1] ]}
              suf='₽'
      />
      <PriceInputsBetween />
      <InputRange
              value={sliderRange[1]}
              dispatch={inputDispatch}
              isMin={false}
              notCountValue={[sliderRange[0], initialPriceRange[1]]}
              suf='₽'
      />

      {/*<PriceInput>{formatPrice( sliderRange[0] )} </PriceInput>*/}
      {/*<PriceInputsBetween />*/}
      {/*<PriceInput>{formatPrice( sliderRange[1] )}</PriceInput>*/}
      <PriceRange>
        <Range
                // defaultValue={[defaultMinValue, defaultMaxValue]}
                value={sliderRange}
                min={Math.floor(initialPriceRange[0] / 500) * 500 }
                max={Math.ceil(initialPriceRange[1] / 500) * 500}
                step={500}
                onChange={state => setSlideRange(state)}
                onAfterChange={state => { dispatch({
                  type: ACatalog.CHANGE_PRICE,
                  payload: {
                    priceRange: state
                  }
                }) }}

        />
      </PriceRange>

      {/*<ReactSlider*/}
      {/*        // смотреть доку https://zillow.github.io/react-slider/#reactslider*/}
      {/*     */}
      {/*        className="horizontal-slider"*/}
      {/*        thumbClassName="thumb"*/}
      {/*        trackClassName="example-track"*/}
      {/*       */}

      {/*   */}
      {/*        pearling*/}
      {/*/>*/}

    </PriceSliderStyle>
  )
}



export default PriceSlider