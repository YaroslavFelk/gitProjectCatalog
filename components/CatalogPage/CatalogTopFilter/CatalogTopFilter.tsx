import * as React from "react"
import {Col, Row} from "../../Grid";
import Flickity from "react-flickity-component";
import {
  FilterSliderItem,
  FilterSliderItemImg,
  FilterSliderItemImgBlock,
  FilterSliderItemName,
  FlickityContainer
} from "./Slider/Slider.sc";
import Link from "next/link";
import {useRouter} from "next/router";




const CatalogTopFilter = ({subcategories}) => {
  const flickityOptions = {
    prevNextButtons: true,
    pageDots: false,
    cellAlign: 'left',
    groupCells: true,
    contain: true,
  }
  const router = useRouter();
  const url = router.pathname === '/stock' ? '/stock/category/' : '/product-category/'

  return subcategories?.length ?
    <Row>
      <Col xs={12} >
        {/*<CategoryTabs categories={initialFilter}  activeCategory={activeCategory} changeCategory={setActiveCategory}/>*/}
        {/*<Slider  slides={initialFilter.find(attr => attr.taxonomy_slug === activeCategory).values} />*/}

        <FlickityContainer>
          <Flickity
                  className={''}
                  options={flickityOptions}
                  disableImagesLoaded={false}
          >
            {subcategories.map((subcategory, i) => {
              return <div key={i}>
                <Link href={`${url}${subcategory.slug}`}><a>
                  <FilterSliderItem>
                    <FilterSliderItemImgBlock>
                      <FilterSliderItemImg src={subcategory.img.w100} />
                    </FilterSliderItemImgBlock>
                    <FilterSliderItemName>{subcategory.name}</FilterSliderItemName>
                  </FilterSliderItem>
                </a></Link>
              </div>
            })}
          </Flickity>
        </FlickityContainer>
      </Col>
    </Row>
  : null
}



export default CatalogTopFilter