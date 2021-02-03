import * as React from "react"
import {useSelector} from "react-redux"
import {IVariableAttribute} from "../../../../types/IVariableAttribute"
import {RootState} from "../../../../redux/store"
import VariatorList from "./VariatorList"
import VariatorMaterialList from "./VariatorMaterialList"


const ModalVariator = () => {

  const attributes: IVariableAttribute[] = useSelector((state: RootState) => state.modalProduct.entity.variable_attributes.sort(
    (a, b) => a.taxonomy_position === b.taxonomy_position ? 0 : a.taxonomy_position < b.taxonomy_position ? -1 : 1
  ))

  return (
    <div>
      {attributes.map((parameters, index) => {
        const {taxonomy_slug} = parameters;

        if (taxonomy_slug === 'pa_fabric') {
          return <VariatorMaterialList
            key={index}
            parameters={parameters}
          />
        } else {
          return <VariatorList
            key={index}
            parameters={parameters}
          />
        }
      })}
    </div>
  )
}


export default ModalVariator
