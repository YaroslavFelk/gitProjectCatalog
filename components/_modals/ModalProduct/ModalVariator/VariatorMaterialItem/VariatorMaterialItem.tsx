import * as React from 'react';
import {Color} from "./VariatorMaterialItem.sc";
import {useDispatch, useSelector} from "react-redux";
import {AModalProduct} from "../../../../../constants/actions";
import {ITerm} from "../../../../../types/ITerm";
import {RootState} from "../../../../../redux/store";
import VariatorFabricItem from "../VariatorFabricItem";
import styled from "styled-components";

const VariatorMaterialItem = ({term, taxonomy, locked}: { term: ITerm; taxonomy: string; locked: boolean}): JSX.Element => {

  const {term_slug, term_name, image} = term;
  if (!term || !taxonomy) return null

  const selection = useSelector((state: RootState) => state.modalProduct.variator)
  const dispatch = useDispatch();

  let active = selection.reduce((acc, val) => {
    if (acc) return acc;
    if (val.taxonomy_slug === taxonomy && val.term_slug === term_slug) acc = true;
    return acc;
  }, false);

  if(taxonomy === 'pa_fabric'){
    if(!active) return null;
  }


  if(locked) return (
    <LockedFabric>
      <Color
        image={image}
        color={term_slug}
        name={term_name}
        active={false}
        locked={false}
        onClick={() =>
          !active && !locked && dispatch({
            type: AModalProduct.UPDATE_OPTIONS,
            payload: {
              taxonomy_slug: taxonomy,
              term_slug: term_slug,
              term_name: term_name,
            }
          })
        }
      />
      <LockedFabricTitle>{term_name}</LockedFabricTitle>
    </LockedFabric>
  )

  return (
    <Color
      image={image}
      color={term_slug}
      name={term_name}
      active={active}
      locked={false}
      onClick={() =>
        !active && !locked && dispatch({
          type: AModalProduct.UPDATE_OPTIONS,
          payload: {
            taxonomy_slug: taxonomy,
            term_slug: term_slug,
            term_name: term_name,
          }
        })
      }
    />
  )
}

const LockedFabricTitle = styled.span`
  color: #353238;
  font: normal normal 400 14px/1em 'Open-Sans', sans-serif;
  margin-left: 5px;
`
const LockedFabric = styled.div`
  display: flex;
  align-items: center;
`

export default React.memo(VariatorMaterialItem)