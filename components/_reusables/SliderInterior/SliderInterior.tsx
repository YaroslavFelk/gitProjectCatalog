import * as React from "react"
import Flickity from "react-flickity-component"
import Link from "next/link"
import FilterByCategory from "./FilterByCategory"
import FilterByColor from "./FilterByColor"
import {
  FlickityContainer, InteriorCard,
  InteriorsSliderContainer, InteriorsSliderInnerWrapper,
  InteriorsSliderItemImg,
  InteriorsSliderItemText,
  InteriorsSliderTitle, SeamlessContainer
} from "./SliderInterior.sc"
import {Col, Row} from "../../Grid"
import Mock_InteriorIdeas from '../../../__mocks__/Mock_InteriorIdeas'
import ReactFlickity from "../ReactFlickity";
import CardInterior from "../CardInterior";


interface IIdeaColor {
  slug: string;
  title: string;
  hex: string;
}

interface IIdeaCategory {
  slug: string;
  title: string;
  order: number;
}

interface IIdea {
  category: IIdeaCategory;
  color: IIdeaColor;
  image: string;
  isNew: boolean;
  slug: string;
}


const SliderInterior = () => {

  const ideas: IIdea[] = Mock_InteriorIdeas;


  const initialActiveCategory = ideas.reduce((category: any, idea) => {
    console.log('category', category)
    if (category && category.slug === 'new') return category;
    if (idea.isNew) return {slug: 'new', order: -1};
    if (category.order){
      if(category.order > idea?.category?.order){
        return {slug: idea?.category?.slug, order: idea?.category?.order};
      }
    } else {
      return {slug: idea?.category?.slug, order: idea?.category?.order};
    }

    return category
  }, {}).slug


  const [activeColor, setActiveColor] = React.useState(null)
  const [activeCategory, setActiveCategory] = React.useState(initialActiveCategory);


  const colors = React.useMemo(() => {
    return ideas.reduce((colors, idea) => {
      if (colors.hasOwnProperty(idea.color.slug)) return colors;
      if (activeCategory === 'new') {
        if (idea.isNew === false) return colors;
      } else {
        if (idea.category.slug !== activeCategory) return colors;
      }

      return {
        ...colors,
        [idea.color.slug]: idea.color
      }
    }, {})
  }, [activeCategory, activeColor])


  const categories = React.useMemo(() => {
    return ideas.reduce((categories, idea) => {
      if (categories.hasOwnProperty(idea.category.slug)) return categories
      if (activeColor && idea.color.slug !== activeColor) return categories

      return {
        ...categories,
        ...(initialActiveCategory === 'new' ? {new: {slug: 'new', title: 'Новые', order: -1}} : {}),
        [idea.category.slug]: idea.category
      }
    }, {})
  }, [activeColor, activeCategory])


  const displayableIdeas = ideas.reduce((ideas, idea) => {
    if (ideas.hasOwnProperty(idea.slug)) return ideas
    if (activeColor && activeColor !== idea.color.slug) return ideas
    if (activeCategory === 'new') {
      if (idea.isNew === false) return ideas;
    } else {
      if (activeCategory !== idea.category.slug) return ideas;
    }

    return {
      ...ideas,
      [idea.slug]: idea
    }
  }, {})


  return (
    <InteriorsSliderContainer>
      <InteriorsSliderTitle>Идеи для интерьеров<span>{ideas.length}</span></InteriorsSliderTitle>
      <FilterByColor colors={colors} activeColor={activeColor} changeColor={setActiveColor}/>
      <FilterByCategory categories={categories} activeCategory={activeCategory} changeCategory={setActiveCategory}/>

      <SeamlessContainer fluid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <FlickityContainer>
              <ReactFlickity
                settings={{
                  prevNextButtons: true,
                  pageDots: false,
                  pageCounter: false,
                  options: {
                    cellAlign: 'left',
                    contain: true,
                  }
                }}
              >
                {Object.values(displayableIdeas).map((idea: { slug, image }) => <CardInterior key={idea.slug} {...idea} />)}
              </ReactFlickity>
            </FlickityContainer>
          </Col>
        </Row>
      </SeamlessContainer>
    </InteriorsSliderContainer>
  )


  //
  // // TODO: Use index as default value for categories
  // const [activeCategory, setActiveCategory] = React.useState(
  //   {
  //     slug: 'new',
  //     title: 'Новые',
  //     order: -10,
  //   })
  //
  // // TODO: Use index as default value for colors
  // const [activeColor, setActiveColor] = React.useState(null)
  //
  // const {items, colorTags, categoryTags} = useSelector((state: RootState) => ({
  //   items: state.indexPage.interiorsSlider.filter(slide => slide.categories.filter(category => category.slug === activeCategory.slug).length > 0 && (activeColor ? slide.color === activeColor : true)),
  //
  //   colorTags: state.indexPage.interiorsSlider.reduce((acc, {categories, color}) => {
  //     ( categories.filter(cat => cat.slug === activeCategory.slug).length > 0 && !acc.includes(color) ) ? acc = [...acc, color] : null
  //     return acc;
  //   }, []),
  //
  //   categoryTags: state.indexPage.interiorsSlider.reduce((acc : Array<any>, slide: { categories, color}) => {
  //     return [
  //       ...acc,
  //       ...slide.categories.filter(category => {
  //         let found = false;
  //         for (let i = 0; i < acc.length; i++) {
  //           if (acc[i].slug === category.slug) {
  //             found = true;
  //             break;
  //           }
  //         }
  //         return !found && (activeColor ? slide.color === activeColor : true)
  //       } )
  //     ]
  //   }, []),
  // }));
  //
  // const flickityOptions = {
  //   prevNextButtons: true,
  //   pageDots: false,
  //   cellAlign: 'left',
  //   groupCells: true,
  //   contain: true,
  // }
  //
  // return (
  //   <InteriorsSliderContainer>
  //     <InteriorsSliderTitle>Идеи для интерьеров<span>{items.length}</span></InteriorsSliderTitle>
  //     <ColorFilter colors={colorTags} activeColor={activeColor} changeColor={setActiveColor}/>
  //     <CategoryFilter categories={categoryTags} activeCategory={activeCategory} changeCategory={setActiveCategory}/>
  //     <SeamlessContainer fluid>
  //       <Row>
  //         <Col xs={12} sm={12} md={12} lg={12} xl={12}>
  //           <FlickityContainer>
  //             <Flickity
  //               className={''}
  //               options={flickityOptions}
  //               disableImagesLoaded={false}
  //             >
  //               {items.map((item, index) =>
  //                 <InteriorsSliderItem key={index}>
  //                   <InteriorsSliderItemImg src={item.image} alt='Интерьер'/>
  //                   <Link href={'/product/' + item.slug} passHref>
  //                     <a>
  //                       <InteriorsSliderItemText>Перейти в интерьер</InteriorsSliderItemText>
  //                     </a>
  //                   </Link>
  //                 </InteriorsSliderItem>
  //               )}
  //             </Flickity>
  //           </FlickityContainer>
  //         </Col>
  //       </Row>
  //     </SeamlessContainer>
  //   </InteriorsSliderContainer>
  // )
}


export default React.memo(SliderInterior)
