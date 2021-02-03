import React from 'react';

import VariatorMaterialItem from "../VariatorMaterialItem";
import VariatorListName from "../VariatorListName";
import {SCVariatorColorList} from './VariatorMaterialList.sc';
import {useSelector} from "react-redux";
import {IVariableAttribute} from "../../../../../types/IVariableAttribute";
import {RootState} from "../../../../../redux/store";
import {getMatchVariation} from "../../../../../utils";
import VariatorFabricItem from "../VariatorFabricItem";


const VariatorMaterialList = ({parameters}: { parameters: IVariableAttribute; }): JSX.Element => {

  const {taxonomy_name, taxonomy_slug, taxonomy_options} = parameters;

  const {variator, entity: {variations}, fabric} = useSelector((state: RootState) => state.product)
  const selection = useSelector((state: RootState) => state.modalProduct.variator)
  const [locked, setLocked] = React.useState();

  React.useEffect(() => {
    setLocked(
      selection.reduce((acc, val) => {
        if (acc) return acc;
        if (val.taxonomy_slug === taxonomy_slug && val.hasOwnProperty('locked') && val.locked) acc = true;
        return acc;
      }, false)
    )
  }, [])

  const tax_opt_with_fabric = taxonomy_options.map((tax_opt) => {
    const options = variator.map((opt) => opt.taxonomy_slug === taxonomy_slug ? {...opt, ...tax_opt} : opt)
    const matchVariation = getMatchVariation(variations, options)

    if (!matchVariation) return tax_opt

    return {
      ...tax_opt,
      image: matchVariation.variation_attributes.find((va) => va.taxonomy_slug === taxonomy_slug).details.image.w100
    }
  })

  return (
    <SCVariatorColorList>

      <VariatorListName value={taxonomy_name}/>
      {taxonomy_slug === 'pa_fabric' && fabric ?
        <VariatorFabricItem
          fabric={{
            image: fabric.details.image.w100,
            collection: fabric.details.collection.name,
            name: fabric.details.name
          }}
          key={taxonomy_slug}
        />
        : tax_opt_with_fabric.map((option, index) =>
          <VariatorMaterialItem
            term={option}
            taxonomy={taxonomy_slug}
            key={taxonomy_slug}
            locked={locked}
          />
        )}
    </SCVariatorColorList>
  );
};

export default VariatorMaterialList;