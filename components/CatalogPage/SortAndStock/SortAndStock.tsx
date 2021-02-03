import * as React from "react"
import {ActiveFilterBLock, ActiveFilterClose,  SortAndStockBlock} from "./SortAndStock.sc";
import Sort from "./Sort";
import {formatPrice} from "../../../utils";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {ACatalog, AProduct} from "../../../constants/actions";
import FilterBlockMobile from "../../_reusables/FilterBlockMobile";
import Stock from "./Stock";
import ActiveFilterItem from "../../_reusables/ActiveFilterItem";






const SortAndStock = ({openFilter, setOpenFilter}) => {
  const activeFilter = useSelector((state:RootState) => state.catalog.activeFilter);
  const initialFilter = useSelector((state:RootState) => state.catalog.initialFilter);
  const dispatch = useDispatch()

  let showPrice = (activeFilter.priceRange[0] !==  initialFilter.priceRange[0] || activeFilter.priceRange[1] !==  initialFilter.priceRange[1])
  let count = showPrice ? 1 : 0
  count = activeFilter.stock ? count + 1 : count
  let obj = []
  for (let key in activeFilter) {
    if (key !== 'priceRange' && key !== 'attributeFilter' && activeFilter[key].length) {
      obj = [...obj, {category: key, value: activeFilter[key]}]
    }
  }

  return (
   <>
    <SortAndStockBlock>
      <Sort isMobile={false} />
      <FilterBlockMobile
              open={openFilter}
              onClick={() => {
                setOpenFilter(!openFilter)
                dispatch({
                  type: ACatalog.SET_NOT_ACCEPT_FILTER,
                  payload: {
                    notAccept: false
                  }
                })
                let top = -window.pageYOffset
                !openFilter ? document.body.className = 'fixed' : document.body.className = ''
                // @ts-ignore
                document.querySelector('.fixed').style.top = top + 'px'
              }}
      >
        <Stock/>
      </FilterBlockMobile>
    </SortAndStockBlock>
     {( activeFilter.attributeFilter.find(attr => attr.term_slug.length)
       || showPrice
       || obj.length
       || activeFilter.stock
       || activeFilter.outlet
     ) && <ActiveFilterBLock>
       {activeFilter.attributeFilter.map(attr => {
         if (attr.term_slug.length) {
           let initAttr = initialFilter.attributeFilter.find(initAttr =>  attr.taxonomy_slug === initAttr.taxonomy_slug)

           if (attr.type === 'range') {
             count++
             return <ActiveFilterItem
               key={attr.term_slug}
               close={() =>
                       dispatch({
                         type: ACatalog.CHANGE_ACTIVE_FILTER_ATTRIBUTES_RANGE,
                         payload: {
                           value: [],
                           slug: attr.taxonomy_slug,
                         }
                       })
               }
                value={attr.term_slug[0] + ' - ' + attr.term_slug[1] + ' см'}
             />
           }

           return attr.term_slug.map( (val, i) => {
             console.log(initAttr.values.find(initVal => initVal.term_slug === val))
             count++
             return <ActiveFilterItem
                     key={val}
                     hex={initAttr.values.find(initVal => initVal.term_slug === val).hex}
                     close={() =>
                       dispatch({
                         type: ACatalog.CHANGE_ACTIVE_FILTER_ATTRIBUTES,
                         payload: {
                           value: {term_slug: val},
                           slug: attr.taxonomy_slug,
                         }
                       })
                     }
                     value={initAttr.values.find(initVal => initVal.term_slug === val).term_name}
             />
           })
         }
       })}

       {showPrice && <ActiveFilterItem
         close={() => dispatch({
           type: ACatalog.CHANGE_PRICE,
           payload: {
             priceRange: initialFilter.priceRange
           }
         })}
         value={`${activeFilter.priceRange[0]} - ${formatPrice(activeFilter.priceRange[1])}`}
       /> }

       {obj.map(objItem => {
         return objItem.value.map(value => {
           count++
           return (
             <ActiveFilterItem
                     key={value}
                     close={() => dispatch({
                       type: ACatalog.CHANGE_ACTIVE_FILTER_DATA,
                       payload: {
                         value: value,
                         category: objItem.category
                       }
                     })}
                     value={initialFilter[objItem.category].find(initVal => initVal.slug === value).name}
             />
           )
         })
       })}

       {/*{activeFilter.collection.map( value => {*/}
       {/*  count++*/}
       {/*  return (*/}
       {/*    <ActiveFilterItem*/}
       {/*            key={value}*/}
       {/*            close={() => dispatch({*/}
       {/*              type: ACatalog.CHANGE_ACTIVE_FILTER_COLLECTION,*/}
       {/*              payload: {*/}
       {/*                value: value*/}
       {/*              }*/}
       {/*            })}*/}
       {/*            value={value}*/}
       {/*    />*/}
       {/*  )*/}
       {/*})}*/}

       { (activeFilter.outlet || activeFilter.stock) && <ActiveFilterItem
         close={() => dispatch({
           type: ACatalog.CHANGE_STOCK_OR_OUTLET,
           payload: {
             key: activeFilter.outlet ? 'outlet' : 'stock',
             value: false
           }
         })}
         value={activeFilter.outlet ? 'OUTLET' : 'В наличии'}
       />}

       {count
               ? <ActiveFilterClose
                       onClick={() => dispatch({
                         type: ACatalog.CLEAR_ACTIVE_FILTER,
                       })}
               >
                 Сбросить фильтры ({count})
               </ActiveFilterClose>
               : null
       }
     </ActiveFilterBLock>
     }

   </>
 )
}



export default SortAndStock