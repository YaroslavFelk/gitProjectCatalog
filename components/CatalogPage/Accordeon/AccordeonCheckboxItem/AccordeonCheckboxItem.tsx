import * as React from "react"
import {AccordeonBlockCheckbox, Color, RadioItem, ShowRadioBlock} from "./AccordeonCheckboxItem.sc";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {attributesSort, isOneSelectFilter} from "../../CatalogPageFunctions";
import {ACatalog} from "../../../../constants/actions";

const  AccordeonCheckboxItem = (props) => {
  const {filterItem, activeAttribute, more,  active} = props
  const dispatch = useDispatch()
  const filtredFilterAttr = useSelector((state:RootState) => state.catalog.filtredFilter.attributeFilter)
  const activeFilter= useSelector((state:RootState) => state.catalog.activeFilter)
  // const activeFilterAttr = activeFilter.attributeFilter
  // const filtredActiveFilterAttr = activeFilterAttr.filter( actAtr => actAtr.term_slug.length)
  const lastClickedCategory = useSelector((state:RootState) => state.catalog.lastClickedCategory)
  const initFil = useSelector((state:RootState) => state.catalog.initialFilter)

  function isIssetCategory(initialFilter, filtredFilterAttr, value ) {
    let isset : boolean
    if (activeAttribute.term_slug.includes(value.term_slug)) {
      isset = true
    } else if (
            isOneSelectFilter(activeFilter, initFil.priceRange, filterItem.taxonomy_slug)
    ) {
      isset = true
    } else if (initialFilter.taxonomy_slug === lastClickedCategory.name) {
      isset = lastClickedCategory.data.find(a => a.term_slug === value.term_slug)
    } else {
      isset = filtredFilterAttr
              .find(attr => attr.taxonomy_slug === initialFilter.taxonomy_slug).values
              .find( filtredValue => filtredValue.term_slug === value.term_slug )
    }

    return !isset
  }

  function showRadioItem(arr, isMore, more) {

    return <ShowRadioBlock active={active} more={more} isMore={isMore}>
      {arr.map( (val) => {
        return <RadioItem
                isMore={isMore}
                more={more}
                isset={ isIssetCategory(filterItem, filtredFilterAttr,  val)}
                key={val.term_slug}
                onClick={() =>   dispatch({
                  type: ACatalog.CHANGE_ACTIVE_FILTER_ATTRIBUTES,
                  payload: {
                    value: val,
                    slug: filterItem.taxonomy_slug,
                  }
                })}
                active={activeAttribute.term_slug.includes(val.term_slug)}
        >
          <AccordeonBlockCheckbox/>
          {val.term_name }
        </RadioItem>
      })}
    </ShowRadioBlock>
  }

  return (
    filterItem.taxonomy_slug === 'pa_color'
    ?  <ShowRadioBlock active={active}> {filterItem.values.sort(attributesSort).map( (val) => {
      return  <RadioItem
              isset={ isIssetCategory(filterItem, filtredFilterAttr,  val)}
              key={val.term_slug}
              onClick={() => dispatch({
                type: ACatalog.CHANGE_ACTIVE_FILTER_ATTRIBUTES,
                payload: {
                  value: val,
                  slug: filterItem.taxonomy_slug,
                }
              }) }
              active={activeAttribute.term_slug.includes(val.term_slug)}
      >
        <Color
                color={val.hex}
                active={activeAttribute.term_slug.includes(val.term_slug)}
                isset={ isIssetCategory(filterItem, filtredFilterAttr,  val)}
        />
        {val.term_name }
      </RadioItem>
    }) }</ShowRadioBlock>
    :  <>
        {showRadioItem(filterItem.values.sort(attributesSort).slice(0, 5), 0 , more)}
        {showRadioItem(filterItem.values.sort(attributesSort).slice(5), 1, more)}
    </>
  )
}



export default AccordeonCheckboxItem