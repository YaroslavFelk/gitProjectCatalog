import * as React from "react"
import {useRef, useState} from "react"
import Link from "next/link";
import {
  Color, ColorLength, FabricInformation,
  ImgBlock,
  PopularSliderItemDesc,
  PopularSliderItemTitle,
  VariableItem,
  VariableItemImg, Variations,
  VariationsBlock, VariationsColorBlock, VariationsItem, VariationsItemName
} from "./VariableProductPolaroid.sc";
import {formatPrice, formatSubtitle} from "../../../utils";


const VariableProductPolaroid = ({item, activeAttributes}) => {
  const a = JSON.parse(JSON.stringify(item) )
  const [colorShowItems, setColorShowItems] = useState(0)
  const ref = useRef(null)


  React.useEffect( () => {
    if (window.innerWidth < 830) {
      setColorShowItems(2)
    }
  }, [])

  React.useEffect( () => {
    let fil = [...activeAttributes.filter(attr =>
        attr.term_slug.length > 0 && item.variable_attributes.find(variation => variation.taxonomy_slug === attr.taxonomy_slug))
    ]
    if (fil.length){
      for (let variation in a.variations) {
        if ( fil.filter(actAttr => {
          let isset = true
          a.variations[variation].variation_attributes.map( attr => {
            if (actAttr.term_slug.includes(attr.term_slug)) {
              isset = false
            }
            return attr
          })
          return isset
        }).length === 0  ) {
          setActiveVariation(a.variations[variation])
          break
        }
      }
    }
    
    for (let variation in a.variations) {

    }
  }, [activeAttributes])

  const [activeVariation, setActiveVariation] = useState( a.variations[a.default_variation_id] )

  function isActiveAttribute(taxonomy) {
    let isActive = false
    activeVariation.variation_attributes.map(attr => {
      if (taxonomy === attr.term_slug)  isActive = true;
    })
    return isActive
  }

  function changeActiveVariations(taxonomy : string, slug : {term_slug : string, term_name : string})  {
    activeVariation.variation_attributes.map(attr => {
        if (attr.taxonomy_slug === taxonomy) {
          attr.term_slug = slug.term_slug
          attr.term_name = slug.term_name
        }
        return attr
    })
    //проходимся по вариациям
    for (let variation in a.variations) {
      //находим нужную вариацию и задаем картинку и цену
      if (JSON.stringify(a.variations[variation].variation_attributes) === JSON.stringify(activeVariation.variation_attributes)) {
        setActiveVariation(a.variations[variation])
      }
    }
  }

  return (
    <VariableItem key={item.id}>
      <Link href={`/product/${item.slug}`}>
        <ImgBlock>
          { (activeVariation?.fabric && activeVariation.fabric.category.rate > 1) &&
            <FabricInformation>
              С учетом ткани {activeVariation.fabric.category.name} категории, +{Math.round((activeVariation.fabric.category.rate - 1) * 100)}%
            </FabricInformation>
          }

          <VariableItemImg
                  src={activeVariation?.general_image}
                  alt={item.title}
          />
        </ImgBlock>
      </Link>
      <PopularSliderItemDesc>
        <div>{item.name}</div>
        <PopularSliderItemTitle >{formatSubtitle(item.subtitle)}</PopularSliderItemTitle>
        <div>{formatPrice(activeVariation.price *  ( activeVariation?.fabric ? (activeVariation.fabric.category.rate + 100) / 100 : 1) ) }</div>
        <Variations>
          {item.variable_attributes.map( (variation, i) => {
            switch (variation.taxonomy_slug) {
              case 'pa_fabric':
                break
              case 'pa_color':
                return <VariationsColorBlock key={i}>
                  {variation.taxonomy_options.map( (option, i) => (!colorShowItems || i < colorShowItems) &&
                      <Color
                          color={option.term_slug}
                          key={option.term_slug}
                          name={option.term_name}
                          active={isActiveAttribute(option.term_slug)}
                          onClick={() => changeActiveVariations(variation.taxonomy_slug, option)}
                      />
                  )}
                  {colorShowItems > 0 && variation.taxonomy_options.length > 2 && <ColorLength>+{variation.taxonomy_options.length - 2}</ColorLength>}


                </VariationsColorBlock >
              default:
                return <VariationsBlock key={i}>
                  <VariationsItemName>{variation.taxonomy_name}</VariationsItemName>
                  {variation.taxonomy_options.map(option =>
                          <VariationsItem
                                  key={option.term_slug}
                                  active={isActiveAttribute(option.term_slug)}
                                  onClick={() => changeActiveVariations(variation.taxonomy_slug, option)}
                          >
                            {option.term_name}
                          </VariationsItem>
                  )}
                </VariationsBlock>
            }
          })}
        </Variations>

      </PopularSliderItemDesc>
    </VariableItem>
  );
};



export default VariableProductPolaroid