import * as React from "react"
import FabricCollection from "../FabricCollection"
import {SCFabricCollections} from "./FabricCollections.sc"

const FabricCollections = ({collections, category, scale}) => {
  return (
    <SCFabricCollections>
      {
        collections
          .sort((a: any, b: any) => a.label < b.label ? -1 : 1)
          .map((collection) =>
            <FabricCollection
              key={collection.anchor}
              collection={collection}
              category={category}
              scale={scale}
            />
          )
      }
    </SCFabricCollections>
  )
}

export default React.memo(FabricCollections)