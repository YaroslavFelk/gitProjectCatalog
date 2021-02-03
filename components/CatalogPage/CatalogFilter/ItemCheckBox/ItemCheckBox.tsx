import * as React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import { ShowRadioBlock} from "./ItemCheckBox.sc";
import {AccordeonBlockCheckbox, RadioItem} from "../../Accordeon/AccordeonCheckboxItem/AccordeonCheckboxItem.sc";



const ItemCheckBox = (props) => {
  const {arr, isMore, more, active, isSet, activeItem, onClick, name} = props
  const filtredCollection = useSelector((state:RootState) => state.catalog.filtredFilter[name])
  const lastClickedCategory = useSelector((state:RootState) => state.catalog.lastClickedCategory)

  return <ShowRadioBlock active={active} more={more} isMore={isMore}> { arr.sort().map( item => {
    return <RadioItem
            isset={isSet(item.slug, lastClickedCategory, filtredCollection)}
            key={item.slug}
            onClick={() => onClick(item.slug)}
            active={activeItem(item.slug)}
    >
      <AccordeonBlockCheckbox/>
      {item.name}
    </RadioItem>
  })}
  </ShowRadioBlock>
}

export default ItemCheckBox;
