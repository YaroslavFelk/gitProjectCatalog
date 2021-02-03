export function getIsset(actAttr, variation , lastClickedCategory) {
  if (actAttr.taxonomy_slug === 'pa_color') {
    return lastClickedCategory === actAttr.taxonomy_slug
            ? variation.find( attr => {
              return attr.taxonomy_slug === 'pa_fabric' && actAttr.term_slug[actAttr.term_slug.length - 1] === attr.details.color.slug
            } )
            : variation.find( attr => attr.taxonomy_slug === 'pa_fabric' && actAttr.term_slug.includes(attr.details.color.slug) )
  } else if (actAttr.type === 'range') {
    return variation.find( attr => {
      if (actAttr.taxonomy_slug === attr.taxonomy_slug) {
        const value = Number(attr.term_slug.split('-sm')[0])
        return value >= actAttr.term_slug[0] && value  <= actAttr.term_slug[1]
      }
      return false
    })
  } else {

    return lastClickedCategory === actAttr.taxonomy_slug
            ? variation.find( attr => {
              return actAttr.term_slug[actAttr.term_slug.length - 1] === attr.term_slug
            } )
            : variation.find( attr => actAttr.term_slug.includes(attr.term_slug) )
  }
}

export  function isActiveAttribute(taxonomy ,activeVariation) {
  let isActive = false
  activeVariation.variation_attributes.map(attr => {
    if (taxonomy === attr.term_slug)  isActive = true;
  })
  return isActive
}

export function filterAttribute(activeAttributes, variations) {
  let existingAttributes = activeAttributes.map( actAtr => {
    return {taxonomy_slug: actAtr.taxonomy_slug, taxonomy_options:[actAtr.term_slug]   }
  })

  variations.map( variation => {
    let existingAttribute = variation.variation_attributes.filter(varAttr => {
      return !activeAttributes.find( actAttr => {
        return actAttr.taxonomy_slug === varAttr.taxonomy_slug && actAttr.term_slug === varAttr.term_slug
      })
    })

    if (existingAttribute.length === 1)  {
      existingAttributes = existingAttributes.map( exisAttr => {
        return exisAttr.taxonomy_slug === existingAttribute[0].taxonomy_slug && !exisAttr.taxonomy_options.includes(existingAttribute[0].term_slug)
                ? {...exisAttr, taxonomy_options: [...exisAttr.taxonomy_options, existingAttribute[0].term_slug]}
                : exisAttr
      })
    }
  })
  return existingAttributes
}
