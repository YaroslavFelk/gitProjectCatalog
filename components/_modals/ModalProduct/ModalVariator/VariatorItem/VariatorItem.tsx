import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Item} from "./VariatorItem.sc";
import {RootState} from "../../../../../redux/store";
import {AModalProduct, AVariator} from "../../../../../constants/actions";

const VariatorItem = ({attribute, taxonomy}) => {
  if (!attribute) return null
  const {term_name, term_slug} = attribute;
  const selection = useSelector((state: RootState) => state.modalProduct.variator)
  const dispatch = useDispatch();

  let active = selection ? selection.reduce((acc, val) => {
    if (acc) return acc;
    if (val.taxonomy_slug === taxonomy && val.term_slug === term_slug) acc = true;
    return acc;
  }, false) : '';

  return (
    <Item
      active={active}
      onClick={() =>
        !active && dispatch({
          type: AModalProduct.UPDATE_OPTIONS,
          payload: {
            taxonomy_slug: taxonomy,
            term_slug: term_slug,
            term_name: term_name,
          }
        })
      }
    >
      {term_name}
    </Item>
  );
};

export default VariatorItem;