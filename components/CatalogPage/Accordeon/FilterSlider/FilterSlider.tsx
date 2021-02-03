import * as React from "react"
import {FilterSliderInput, FilterSliderStyle} from "../Accordeon.sc";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {ACatalog} from "../../../../constants/actions";
import {useEffect, useState} from "react";
import {PriceInputsBetween, PriceSliderStyle} from "../../AccordeonPrice/PriceSlider/PriceSlider.sc";
import { Range } from 'rc-slider'
import 'rc-slider/assets/index.css';
import InputMask from "react-input-mask";
import {log} from "util";
import InputRange from "../../CatalogFilter/InputRange/InputRange";
import {FormLabel} from "../../../_reusables/Form/Form.sc";

const  FilterSlider = ({filterItem}) => {
  const dispatch = useDispatch()
  const filtredFilterAttr = useSelector((state:RootState) => state.catalog.filtredFilter.attributeFilter)
  const activeFilterAttr = useSelector((state:RootState) => state.catalog.activeFilter.attributeFilter)
  const lastClickedCategory = useSelector((state:RootState) => state.catalog.lastClickedCategory)

  const filtredFilter = filtredFilterAttr.find(attr => attr.taxonomy_slug === filterItem.taxonomy_slug)
  const activeFilterItem = activeFilterAttr.find(attr => attr.taxonomy_slug === filterItem.taxonomy_slug)
  const [value, setValue] = useState([filtredFilter.values.length  ? filtredFilter.values[0].term_slug : 0,
    filtredFilter.values.length  ? filtredFilter.values[filtredFilter.values.length - 1].term_slug : 0])
  // const [inputMinValue, setInputMinValue] = React.useState(`${defaultMinValue} см`)
  // const [inputMaxValue, setInputMaxValue] = React.useState(`${defaultMaxValue} см`)
  let marks = {}
  filterItem.values.map(value => {
    let val = value.term_slug
    marks[val] = val
    return value
  })
  useEffect( () => {
    if (lastClickedCategory.name !== filterItem.taxonomy_slug) {
      setValue([
        activeFilterItem.term_slug.length
                ? Number(activeFilterItem.term_slug[0])
                : filtredFilter.values.length
                ? filtredFilter.values[0].term_slug : 0,
        activeFilterItem.term_slug.length
                ? Number(activeFilterItem.term_slug[1])
                : filtredFilter.values.length
                ? filtredFilter.values[filtredFilter.values.length - 1].term_slug as number : 0
      ])
    }
  }, [filtredFilter])

  function inputDispatch(val, isMin) {
    setValue(isMin ? [val, value[1]] : [  value[0], val])
    dispatch({
      type: ACatalog.CHANGE_ACTIVE_FILTER_ATTRIBUTES_RANGE,
      payload: {
        value: isMin ? [val, value[1]] : [  value[0], val],
        slug: filterItem.taxonomy_slug,
      }
    })
  }

  return (
    <FilterSliderStyle >
      <InputRange
              value={value[0]}
              dispatch={inputDispatch}
              isMin={true}
              notCountValue={[filterItem.values[0].term_slug, value[1] ]}
              suf='см'
      />
      <PriceInputsBetween />
      <InputRange
              value={value[1]}
              dispatch={inputDispatch}
              isMin={false}
              notCountValue={[value[0], filterItem.values[filterItem.values.length - 1].term_slug]}
              suf='см'
      />
      {/*<FilterSliderInput*/}
      {/*  value={inputMaxValue}*/}
      {/*   onFocus={() => setInputMaxValue('')}*/}
      {/*   onChange={(e) => {*/}
      {/*     if (!isNaN(Number(e.target.value))) {*/}
      {/*       setInputMaxValue(e.target.value)*/}
      {/*       setDefaultMaxValue(Number(e.target.value))*/}
      {/*       dispatch({*/}
      {/*         type: ACatalog.CHANGE_ACTIVE_FILTER_ATTRIBUTES_RANGE,*/}
      {/*         payload: {*/}
      {/*           value: [defaultMinValue, Number(e.target.value)],*/}
      {/*           slug: filterItem.taxonomy_slug,*/}
      {/*         }*/}
      {/*       })*/}
      {/*     }*/}
      {/*   }}*/}
      {/*   onBlur={() => setInputMaxValue(`${defaultMaxValue} см`)}*/}
      {/*/>*/}
      {/*<ReactSlider*/}
      {/*        // смотреть доку https://zillow.github.io/react-slider/#reactslider*/}
      {/*        className="horizontal-slider"*/}
      {/*        thumbClassName="thumb"*/}
      {/*        trackClassName="example-track"*/}
      {/*        defaultValue={[defaultMinValue, defaultMaxValue]}*/}
      {/*        // value={filterItem.values.map(value => value.term_slug)}*/}
      {/*/>*/}
      {/*<Slider min={20} defaultValue={20}  />*/}
      <Range
              // defaultValue={[defaultMinValue, defaultMaxValue]}
              value={value}
              min={ filterItem.values[0].term_slug}
              max={filterItem.values[filterItem.values.length - 1].term_slug}
              marks={marks}
              step={null}
              onChange={state => {
                setValue(state)
              }}
              onAfterChange={state => dispatch({
                type: ACatalog.CHANGE_ACTIVE_FILTER_ATTRIBUTES_RANGE,
                payload: {
                  value: state,
                  slug: filterItem.taxonomy_slug,
                }
              })}

      />
    </FilterSliderStyle>
  )
}



export default FilterSlider