import React from 'react';
import {IVariator} from "../../../types/IVariator";
import VariatorTaxonomy from "./VariatorTaxonomy";





const Variator = ({variations, variableAttributes, currentAttributes, defaultAttributes, controlUrl = false}:any) => {

  console.log('variations', variations);
  console.log('variableAttributes', variableAttributes);
  console.log('currentAttributes', currentAttributes);
  console.log('defaultAttributes', defaultAttributes);

  const attributes = [
    ...defaultAttributes,
    ...currentAttributes
  ]

  console.log('attributes', attributes);

  return (
    <div>
      {
        variableAttributes.map(({taxonomy_slug, taxonomy_name, taxonomy_options}) => {
          return <VariatorTaxonomy
            key={taxonomy_slug}
            taxonomy_slug={taxonomy_slug}
            taxonomy_name={taxonomy_name}
            taxonomy_options={taxonomy_options}
            active_term={attributes.find((a) => a.taxonomy_slug === taxonomy_slug)?.term_slug}
          />
        })
      }
    </div>
  );
};

export default React.memo(Variator);