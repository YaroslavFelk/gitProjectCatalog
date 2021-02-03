import * as React from "react"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {ACatalog} from "../../../constants/actions";
import AccordeonFilter from "../../_reusables/AccordeonFilter";
import ItemCheckBox from "../CatalogFilter/ItemCheckBox";
import {isOneSelectFilter} from "../CatalogPageFunctions";

const  AccordeonDinamicCategory = ({activeFilter, categoryName, title}) => {
  const initialFilterItems = useSelector((state:RootState) => state.catalog.initialFilter[categoryName])
  const initialPriceRange = useSelector((state:RootState) => state.catalog.initialFilter.priceRange)

  if (!initialFilterItems?.length) return null

  const dispatch = useDispatch()

  function isIssetCategory(value, lastClickedCategory, filtredItems ) {
    let isset : boolean
    if (activeFilter[categoryName].includes(value)) {
      isset = true
    } else if (isOneSelectFilter(activeFilter, initialPriceRange, categoryName)) {
      isset = true
    } else if (lastClickedCategory.name === categoryName) {
      isset = lastClickedCategory.data.includes(value)
    } else {
      isset = filtredItems.find(val => val.slug === value)
    }
    return !isset
  }

  function isActiveItem(item) {
    return activeFilter[categoryName].includes(item)
  }

  function handleEvent(item) {
    dispatch({
      type: ACatalog.CHANGE_ACTIVE_FILTER_DATA,
      payload: {
        value: item,
        category: categoryName
      }
    })
  }

  return (
    <AccordeonFilter
            initialActive={true}
            order={10}
            title={title}
            issetMore={initialFilterItems.length > 5}
            count={initialFilterItems.length - 5}
    >
      <ItemCheckBox
              arr={initialFilterItems.slice(0, 5)}
              isMore={0}
              isSet={isIssetCategory}
              activeItem={isActiveItem}
              onClick={handleEvent}
              name={categoryName}
      />
      {/*<ItemCheckBox*/}
      {/*        arr={initialFilterItems.slice(5)}*/}
      {/*        isMore={1}*/}
      {/*        isSet={isIssetCategory}*/}
      {/*        activeItem={isActiveItem}*/}
      {/*        onClick={handleEvent}*/}
      {/*        name={categoryName}*/}
      {/*/>*/}
    </AccordeonFilter>
  )
}





export default AccordeonDinamicCategory