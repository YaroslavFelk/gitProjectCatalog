export default function getFunctionFilterOptions(entities) {
  let collectedColors = [], collectedCategories = [], collectedMaterials = [], collectedProperties = []
  let colors = { label: 'Цвет', param_slug: 'color', type: 'color', options: [] }
  let category = { label: 'Категория', param_slug: 'category', type: 'select', options: [] }
  let material = { label: 'Материал', param_slug: 'material', type: 'select', options: [] }
  let property = { label: 'Свойство', param_slug: 'property', type: 'select', options: [] }

  Object.values(entities).map((c:any, i) => {
    if( !collectedCategories.includes(c.percent) ){
      collectedCategories.push(c.percent);
      category.options.push({ slug: c.percent, name: `${i + 1} категория` + ` (+${c.percent}%)` })
    }

    c.collections.map( collection => {

      if( !collectedMaterials.includes(collection.material.slug) ){
        collectedMaterials.push(collection.material.slug);
        material.options.push({ slug: collection.material.slug, name: collection.material.name })
      }

      collection.properties && collection.properties.map( p => {
        if( !collectedProperties.includes(p.slug) ){
          collectedProperties.push(p.slug);
          property.options.push({ slug: p.slug, name: p.name })
        }
      })

      collection.fabrics.map( fabric => {
        if( !collectedColors.find(color => color.slug === fabric.color.slug) ){
          collectedColors.push(fabric.color)
          // colors.options.push( { slug: fabric.color, name: D_Colors[fabric.color.toUpperCase()], hex: Colors[fabric.color.toUpperCase()] })
          colors.options.push( { slug: fabric.color.slug, name:fabric.color.name, hex: fabric.color.hex})
        }
      })
    })
  })

  colors.options = colors.options.sort( (a, b) => a.name < b.name ? -1 : 1 )
  category.options = category.options.sort( (a, b) => a.name < b.name ? -1 : 1 )
  material.options = material.options.sort( (a, b) => a.name < b.name ? -1 : 1 )
  property.options = property.options.sort( (a, b) => a.name < b.name ? -1 : 1 )

  return [colors, category, material, property]
}