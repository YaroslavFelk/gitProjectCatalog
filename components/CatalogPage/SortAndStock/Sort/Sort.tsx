import * as React from "react"
import {SortBlock, SortItem, SortItemTitle, SortOptions, SortSelect} from "./Sort.sc";
import {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {ACatalog} from "../../../../constants/actions";
import useOutsideClicked from "../../../_hooks/useOutsideClick";
import {DropdownArrow} from "../../../FabricsPage/FabricsFilter/FilterSelect/FabricSelect.sc";

const sortTypes = [
 {
  name: 'самые  дешевые',
  slug: 'priceAsc'
 },
 {
  name: 'самые дорогие',
  slug: 'priceDesc'
 },
  {
    name: 'самые новые',
    slug: 'new'
  }
]


const Sort = (props) => {
  const [active, setActive] = useState(false)
  const sortType = useSelector((state:RootState) => state.catalog.sort);
  const dispatch = useDispatch()
  const ref = useRef(null)

  useOutsideClicked(ref, () => {
    setActive(false);
  });

 return (
     <SortBlock
       isMobile={props.isMobile}
       active={active}
       ref={ref}
       onClick={( () => setActive(!active) ) }
     >
       <SortItemTitle>Выводить сначала:</SortItemTitle>
       {props.isMobile && <SortSelect onClick={() => setActive(!active)}>
         {sortTypes.find(type => sortType === type.slug).name}

         <DropdownArrow active={active} />
       </SortSelect>}
       <SortOptions active={active}>
         { sortTypes.map( (type) => {
           return <SortItem
                   active={sortType === type.slug}
                   onClick={() => dispatch({
                     type: ACatalog.CHANGE_SORT_TYPE,
                     payload: {
                       sort: type.slug
                     }
                   })}
                   key={type.slug}
           >
             {type.name}
           </SortItem>
         })}
       </SortOptions>
     </SortBlock>

 )
}



export default Sort