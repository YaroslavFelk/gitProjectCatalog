import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {RootState} from "../../../../redux/store"
import {AModal, AModalFabric} from "../../../../constants/actions"
import {Fabric, FabricImage, FabricTitle, SCFabricEntity} from "./FabricEntity.sc";


const target = 'modalFabric';


const FabricEntity = ({fabric, collection, category}) => {

  const dispatch = useDispatch()
  const {name, image} = fabric
  const {label} = collection

  const selection = useSelector((state: RootState) => state.modalFabric.selection)
  const selected = selection ? (selection.collection == collection.label && selection.fabric.name == name) : false

  return (
    <SCFabricEntity
      onClick={() => {
        new Promise((resolve) => {
          dispatch({
            type: AModalFabric.SELECT_FABRIC,
            payload: {
              slug: label,
              name: label,
              collection: collection.label,
              category: {
                name: category.category,
                rate: (100+category.scale)/100, // 10% -> 1.1, 20% -> 1.2, 30% -> 1.3
                material: collection.material,
              },
              image: image.w300,
            }
          })
          resolve(true)
        }).then(() => {
          setTimeout(() => {
            dispatch({
              type: AModal.CLOSE,
              payload: {
                target,
              }
            })
          }, 200)
        })
      }}
    >
      <Fabric
        active={selected}
      >
        <FabricImage
          src={image.w300}
          alt={name}
          title={collection.label + ' ' + name}
          loading="lazy"
        />
        <FabricTitle>{name}</FabricTitle>
      </Fabric>
    </SCFabricEntity>
  )
}


export default React.memo(FabricEntity)
