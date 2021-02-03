import * as React from 'react'
import {CategoryTabsItem, CategoryTabsContainer} from './FilterByCategory.sc'

const FilterByCategory = ({categories, activeCategory, changeCategory}) => {

  const filterRefs = [];

  const [left, setLeft] = React.useState(0)
  const [width, setWidth] = React.useState(0)

  const setPosition = React.useCallback((item) => {
    setLeft(item.offsetLeft)
    setWidth(item.offsetWidth)
  }, [])

  return (
    <CategoryTabsContainer
      left={left}
      width={width}
    >
      {
        Object.values(categories).map((category: { slug: string; title: string; order: number; }, i) => {
          return <CategoryTabsItem
            key={category.slug}
            ref={ref => {
              filterRefs[i] = ref;
              category.slug === activeCategory && ref && filterRefs.length ? setPosition(ref) : null
            }}
            active={category.slug === activeCategory}
            onClick={() => {
              if (activeCategory === category.slug) return false
              changeCategory(category.slug)
              setPosition(filterRefs[i])
            }}
          >
            {category.title}
          </CategoryTabsItem>
        })}
    </CategoryTabsContainer>
  )
}


export default FilterByCategory;