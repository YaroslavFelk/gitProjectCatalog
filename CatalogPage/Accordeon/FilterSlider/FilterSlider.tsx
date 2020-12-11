import * as React from "react"
import {PriceInput, PriceSlider} from "../Accordeon.sc";
import ReactSlider from "react-slider";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {ACatalog} from "../../../../constants/actions";


const  FilterSlider = ({filterItem}) => {
  const dispatch = useDispatch()
  const filtredFilterAttr = useSelector((state:RootState) => state.catalog.filtredFilter.attributeFilter)
  const filtredFilter = filtredFilterAttr.find(attr => attr.taxonomy_slug === filterItem.taxonomy_slug)

  let defaultMinValue = filtredFilter.values.length  ? filtredFilter.values[0].term_slug : 0
  let defaultMaxValue = filtredFilter.values.length  ? filtredFilter.values[filtredFilter.values.length - 1].term_slug : 0
  return (
    <PriceSlider>
      <PriceInput value={defaultMinValue}  />
      <ReactSlider
              // смотреть доку https://zillow.github.io/react-slider/#reactslider
              step={10}
              className="horizontal-slider"
              thumbClassName="thumb"
              trackClassName="example-track"
              defaultValue={[defaultMinValue, defaultMaxValue]}
              max={filterItem.values[filterItem.values.length - 1].term_slug}
              min={filterItem.values[0].term_slug}
              onAfterChange={state => dispatch({
                type: ACatalog.CHANGE_ACTIVE_FILTER_ATTRIBUTES_RANGE,
                payload: {
                  value: filterItem.val,
                  slug: filterItem.taxonomy_slug,
                }
              })}
              pearling
      />
      <PriceInput value={defaultMaxValue} />
    </PriceSlider>

  )
}



export default FilterSlider