import * as React from 'react';
import VariatorListName from "../VariatorListName";
import {
  FabricAction,
  FabricAttribute, FabricImage,
  FabricInformation,
  FabricName,
  SCVariatorFabricItem
} from "./VariatorFabricItem.sc";
import Button from "../../../../_reusables/Button";

const VariatorFabricItem = ({fabric}) => {

  const { image, collection, name } = fabric ? fabric : { image: false, collection: false, name: false};

  return (
    <SCVariatorFabricItem>
      <VariatorListName value={'Выбранная ткань обивки'} />

      <FabricAttribute>
        <FabricImage
          image={(image) ? image : null}
          alt={collection + ' ' + name}
          title={collection + ' ' + name}

        />
        <FabricInformation>
          <FabricName>{ fabric ? collection + ' ' + name : ''}</FabricName>
        </FabricInformation>

      </FabricAttribute>
    </SCVariatorFabricItem>
  );
};


export default VariatorFabricItem;