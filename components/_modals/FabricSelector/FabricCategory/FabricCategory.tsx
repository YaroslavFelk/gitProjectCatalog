import React from "react"
import {useSelector} from "react-redux"
import {RootState} from "../../../../redux/store"
import FabricCollections from "../FabricCollections"
import {CategoryHead, CategoryLabel, CategoryPrice, SCFabricCategory} from "./FabricCategory.sc"
import {formatPrice} from "../../../../utils";


const FabricCategory = ({categoryData}) => {
  const {category, percent, collections} = categoryData
  const price = useSelector((state: RootState) => state.product.variation.price)
  const categoryPrice = percent !== '0' ? (price * ((100 + parseInt(percent)) / 100)) : price

  if( !collections?.length ) return null;

  return (
    <SCFabricCategory>
      <CategoryHead>
        <CategoryLabel>{percent !== '0' ? (percent / 10)+1 : 1} категория {percent  !== '0' ? `(+${percent}%)` : null}</CategoryLabel>
        <CategoryPrice>{formatPrice(categoryPrice)}</CategoryPrice>
      </CategoryHead>

      <FabricCollections
        collections={collections}
        category={category}
        scale={percent}
      />
    </SCFabricCategory>
  )
}

export default FabricCategory