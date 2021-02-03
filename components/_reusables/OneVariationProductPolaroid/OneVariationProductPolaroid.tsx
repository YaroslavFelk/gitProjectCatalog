import * as React from "react"
import Link from "next/link";
import {
  FabricInformation,
  ImgBlock,
  PopularSliderItemTitle,
  VariableItem,
  VariableItemImg,
} from "./OneVariationProductPolaroid.sc";
import {formatPrice, formatSubtitle} from "../../../utils";
import {
  OldPrice,
  PopularSliderItemDesc, PriceLine,
  VariableItemName, VariableItemPrice, VariableItemSubTitle, VariableItemTitle
} from "../VariableProductPolaroid/VariableProductPolaroid.sc";
import {getFormatPriceWithoutRub} from "../../CatalogPage/CatalogPageFunctions";

const OneVariationProductPolaroid = ({item}) => {
  // изменение цены от вариации
  const rate = item.variations[item.default_variation_id].variation_attributes.find(attr => attr.taxonomy_slug === 'pa_fabric')?.details?.category?.rate
  let priceString = getFormatPriceWithoutRub(item.variations[item.default_variation_id].price, rate)
  let discountPrice = item.variations[item.default_variation_id].sale_price ? getFormatPriceWithoutRub(item.variations[item.default_variation_id].sale_price, rate) : null

  return (

    <VariableItem key={item.id}>
      <Link passHref href={`/product/${item.slug}`}>
        <ImgBlock>
          { (  item.variations[item.default_variation_id]?.fabric && item.variations[item.default_variation_id]?.fabric?.category?.rate > 1) &&
            <FabricInformation>
              С учетом ткани {  item.variations[item.default_variation_id].fabric.category.name} категории,
              +{  item.variations[item.default_variation_id].fabric.category.rate}%
            </FabricInformation>
          }

          <VariableItemImg>
            <img src={  item.variations[item.default_variation_id]?.general_image.w300}  alt={item.title}/>
          </VariableItemImg>
        </ImgBlock>
      </Link>


      <PopularSliderItemDesc>
        <Link passHref href={`/product/${item.slug}`} >
          <VariableItemTitle>
            <VariableItemName>{item.name}, </VariableItemName>
            <VariableItemSubTitle >{formatSubtitle(item.subtitle)}</VariableItemSubTitle>
          </VariableItemTitle>
        </Link>
        {/*<div>{formatPrice(  item.variations[item.default_variation_id].price **/}
        {/*        (   item.variations[item.default_variation_id]?.fabric?.category?.rate ? ( item.variations[item.default_variation_id].fabric.category.rate + 100) / 100 : 1) ) }*/}
        {/*</div>*/}
        <PriceLine>
          <VariableItemPrice><div>{discountPrice ?? priceString}</div> <span>₽</span></VariableItemPrice>
          { discountPrice && <OldPrice><div>{priceString}</div></OldPrice>}
        </PriceLine>
      </PopularSliderItemDesc>
    </VariableItem>
  );
};



export default OneVariationProductPolaroid