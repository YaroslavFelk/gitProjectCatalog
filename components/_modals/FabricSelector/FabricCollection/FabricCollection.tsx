import React from 'react'
import FabricEntities from "../FabricEntities"
import {
  Collection, CollectionDescription,
  CollectionDescriptionSwitch, CollectionDescriptionText,
  CollectionHead, CollectionLabel,
  CollectionTitle, CollectionType
} from "./FabricCollection.sc"

const FabricCollection = ({collection, category, scale}) => {

  const {label, anchor, material, properties, fabrics, description} = collection
  const [descriptionVisibility, setDescriptionVisibility] = React.useState(false)

  return (
    <Collection>
      <CollectionHead>
        <CollectionTitle>
          <CollectionLabel>{label}</CollectionLabel>
          <CollectionType>{material.value}</CollectionType>
        </CollectionTitle>
        <CollectionDescriptionSwitch onClick={() => setDescriptionVisibility(state => !state)}>Описание
          ткани</CollectionDescriptionSwitch>
      </CollectionHead>

      <CollectionDescription active={descriptionVisibility}>
        <CollectionDescriptionText>
          {
            description.split('\n\r').map((row: string, i) =>
              <div key={i}><div>{row}<br/></div></div>
            )
          }
        </CollectionDescriptionText>
      </CollectionDescription>
      <FabricEntities fabrics={fabrics} collection={{anchor, label, material: material.name}}
                      category={{category, scale}}/>
    </Collection>
  );
};

export default FabricCollection