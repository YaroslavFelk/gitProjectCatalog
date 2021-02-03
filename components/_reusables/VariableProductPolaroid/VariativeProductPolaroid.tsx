import * as React from "react"
import { useState} from "react"
import Link from "next/link";
import {
  FabricInformation,
  ImgBlock, MobileOptions, MobileSelect,
  PopularSliderItemDesc,
  VariableItem,
  VariableItemImg, VariableItemName, VariableItemPrice, VariableItemSubTitle, VariableItemTitle, Variations,
  VariationsBlock, VariationsItem, VariationsItemName
} from "./VariableProductPolaroid.sc";
import {formatPrice, formatSubtitle} from "../../../utils";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import VariationsCircles from "./VariationsCircles";
import {attributesSort, getFun} from "../../CatalogPage/CatalogPageFunctions";
import {filterAttribute, getIsset, isActiveAttribute} from "./VariativeProductPolaroidFunc";
import MainAttributeVariations from "./MainAttributeVariations/MainAttributeVariations";
interface IVariation {
  variation_attributes : [
    {
      taxonomy_slug : string
      term_slug : string
    }
  ]
}

const attributesMain = ['pa_overall-width', 'pa_pouf-dimensions']

const VariableProductPolaroid = ({item, activeAttributes}) => {
  const variations : Array<IVariation> = Object.values(item.variations)
  const lastClickedCategory = useSelector((state:RootState) => state.catalog.lastClickedCategory.name);
  const [activeVariation, setActiveVariation] = useState(item.variations[item.default_variation_id])
  const [existingAttributes, setExistingAttributes] = useState(filterAttribute(item.variations[item.default_variation_id].variation_attributes, variations))
  const mainAtribute = attributesMain.find(attr =>  item.variable_attributes.find(varAttr => varAttr.taxonomy_slug === attr))
  let url = `/product/${item.slug}`

  // изменение цены от вариации
  const rate = activeVariation.variation_attributes.find(attr => attr.taxonomy_slug === 'pa_fabric')?.details?.category?.rate
  let priceString = formatPrice(activeVariation.price *  ( rate  ? (rate + 100) / 100 : 1) )
  priceString = priceString.substring(0, priceString.length - 2)

  React.useEffect( () => {
    let fil = [...activeAttributes.filter(attr =>
            attr.term_slug.length > 0 && item.variable_attributes.find(variation =>
            variation.taxonomy_slug === attr.taxonomy_slug || ( variation.taxonomy_slug === 'pa_fabric' && attr.taxonomy_slug === 'pa_color' )))
    ]
    if (fil.length){
      variations.find(variation => {
        if ( fil.filter(actAttr => !getIsset(actAttr, variation.variation_attributes, lastClickedCategory) ).length === 0) {
          setActiveVariation( variation)
          setExistingAttributes( filterAttribute(variation.variation_attributes, variations) )
          return true
        }
        return false
      })
    } else {
      setActiveVariation( item.variations[item.default_variation_id] )
      setExistingAttributes( filterAttribute(item.variations[item.default_variation_id].variation_attributes, variations) )
    }
  }, [activeAttributes])

  function changeActiveVariations(taxonomy : string, slug : {term_slug : string, term_name : string}, activeVariation)  {
    getFun(item, activeVariation, activeAttributes)
    let changedActiveVariation = activeVariation.variation_attributes.map(attr => {
        if (attr.taxonomy_slug === taxonomy) {
          return {
            ...attr,
            term_slug: slug.term_slug,
            term_name: slug.term_name
          }
        }
        return attr
    })
    //проходимся по вариациям
    variations.map(variation => {
      variation.variation_attributes.length === activeVariation.variation_attributes.length && variation.variation_attributes.filter( variationAttr => {
        return !changedActiveVariation.find( attr => attr.term_slug === variationAttr.term_slug)
      }).length === 0 ? setActiveVariation(variation) : null
    })
    setExistingAttributes( filterAttribute(changedActiveVariation, variations) )
  }
  return (
    <VariableItem key={item.id}>
      <Link passHref href={url} >
        <ImgBlock>
          {/*{ (activeVariation?.fabric && activeVariation?.fabric?.category?.rate > 1) &&*/}
          {/*  <FabricInformation>*/}
          {/*    С учетом ткани {activeVariation.fabric.category.name} категории, +{activeVariation.fabric.category.rate}%*/}
          {/*  </FabricInformation>*/}
          {/*}*/}
          <VariableItemImg>
            <img src={activeVariation?.general_image?.w300}
                 alt={item.title} />
          </VariableItemImg>
        </ImgBlock>
      </Link>

      <PopularSliderItemDesc onClick={(e) => {e.preventDefault()}}>
        <Link passHref href={url} >
          <VariableItemTitle>
            <VariableItemName>{item.name}, </VariableItemName>
            <VariableItemSubTitle >{formatSubtitle(item.subtitle)}</VariableItemSubTitle>
          </VariableItemTitle>
        </Link>

        <VariableItemPrice><div>{priceString}</div> <span>₽</span></VariableItemPrice>
        <Variations>
          {item.variable_attributes.map( (variation, index) => {
            switch (variation.taxonomy_slug) {
              case 'pa_color' :
                return <VariationsCircles
                        key={index}
                        variation={variation}
                        variations={variations}
                        isActiveAttribute={isActiveAttribute}
                        existingAttributes={existingAttributes.find( attr => attr.taxonomy_slug === variation.taxonomy_slug)}
                        activeVariation={activeVariation}
                        changeActiveVariations={changeActiveVariations}
                        defaultVarId={item.variations[item.default_variation_id]}
                        url={url}
                />
              case 'pa_fabric' :
                return <VariationsCircles
                        key={index}
                        variation={variation}
                        variations={variations}
                        isActiveAttribute={isActiveAttribute}
                        existingAttributes={existingAttributes.find( attr => attr.taxonomy_slug === variation.taxonomy_slug)}
                        activeVariation={activeVariation}
                        changeActiveVariations={changeActiveVariations}
                        defaultVarId={item.variations[item.default_variation_id]}
                        url={url}
                />
              case mainAtribute:
                return <MainAttributeVariations
                        key={index}
                        activeVariation={activeVariation}
                        variation={variation}
                        isActiveAttribute={isActiveAttribute}
                        existingAttributes={existingAttributes}
                        changeActiveVariations={changeActiveVariations}
                />
              default:
                return null
            }
          })}
        </Variations>
      </PopularSliderItemDesc>
    </VariableItem>
  );
};



export default VariableProductPolaroid