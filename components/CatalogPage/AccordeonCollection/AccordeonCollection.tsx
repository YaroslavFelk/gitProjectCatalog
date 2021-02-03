import * as React from "react"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {ACatalog} from "../../../constants/actions";
import AccordeonFilter from "../../_reusables/AccordeonFilter";
import ItemCheckBox from "../CatalogFilter/ItemCheckBox";
import {isOneSelectFilter} from "../CatalogPageFunctions";

const  AccordeonCollection = ({activeFilter}) => {
  const initialCollection = useSelector((state:RootState) => state.catalog.initialFilter.collection)
  const initialPriceRange = useSelector((state:RootState) => state.catalog.initialFilter.priceRange)
  const activeCollection = activeFilter.collection
  const dispatch = useDispatch()

  function isIssetCategory(value, lastClickedCategory, filtredCollection ) {
    let isset : boolean
    if (activeCollection.includes(value)) {
      isset = true
    } else if (isOneSelectFilter(activeFilter, initialPriceRange, 'collection')) {
      isset = true
    } else if (lastClickedCategory.name === 'collection') {
      isset = lastClickedCategory.data.includes(value)
    } else {
      isset = filtredCollection.some(val =>  val.slug === value)
    }
    return !isset
  }

  function isActiveItem(item) {
    return activeCollection.includes(item)
  }

  function handleEvent(item) {
    dispatch({
      type: ACatalog.CHANGE_ACTIVE_FILTER_DATA,
      payload: {
        value: item,
        category: 'collection'
      }
    })
  }


  return (
    <AccordeonFilter
            initialActive={true}
            order={10}
            title='Коллекция'
            issetMore={initialCollection.length > 5}
            count={initialCollection.length - 5}

    >
      <ItemCheckBox
              arr={initialCollection.slice(0, 5)}
              isMore={0}
              isSet={isIssetCategory}
              activeItem={isActiveItem}
              onClick={handleEvent}
              name={'collection'}
      />
      <ItemCheckBox
              arr={initialCollection.slice(5)}
              isMore={1}
              isSet={isIssetCategory}
              activeItem={isActiveItem}
              onClick={handleEvent}
              name={'collection'}
      />
    </AccordeonFilter>
  )
}





export default AccordeonCollection