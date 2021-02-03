import * as React from "react"
import {FilterBlock, PriceFilter} from "./CatalogFilter.sc";
import Accordeon from "../Accordeon";
import AccordeonPrice from "../AccordeonPrice";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import Sort from "../SortAndStock/Sort";
import CatalogPerPage from "../CatalogPerPage";
import AccordeonAnother from "../AccordeonAnother";
import Stock from "../SortAndStock/Stock";
import FilterMobile from "../../_reusables/FilterMobile";
import AccordeonDinamicCategory from "../AccordeonDinamicCategory";
import {BREAKPOINTS_NUMBERS} from "../../../constants/breakpoints";

const CatalogFilter = ({openFilter, setOpenFilter}) => {
  const [isMobile, setIsMobile] = React.useState(false)
  const attributes = useSelector((state:RootState) => state.catalog.initialFilter.attributeFilter)
  const activeFilter = useSelector((state:RootState) => state.catalog.activeFilter)
  const acceptIsActive = useSelector((state:RootState) => state.catalog.acceptIsActive)

  React.useEffect(() => {
    window.addEventListener('resize',  () => {
      setIsMobile(window.innerWidth < BREAKPOINTS_NUMBERS.MD)
      if (window.innerWidth > BREAKPOINTS_NUMBERS.MD) {
        document.body.className = ''
      }
    })

    setIsMobile(window.innerWidth < BREAKPOINTS_NUMBERS.MD)
  }, [])

  return <>
    <FilterMobile
      isMobile={isMobile}
      openFilter={openFilter}
      setOpenFilter={setOpenFilter}
      acceptIsActive={acceptIsActive}
    >
      {!isMobile && <Stock/>}
      {isMobile && <AccordeonAnother title='Показывать по'><CatalogPerPage isMobile={true}/></AccordeonAnother> }
      {isMobile && <AccordeonAnother title='Сортировка'><Sort isMobile={true}/></AccordeonAnother> }


      <PriceFilter>
        <AccordeonPrice/>
      </PriceFilter>

      {/*<AccordeonCollection activeFilter={activeFilter}/>*/}
      <AccordeonDinamicCategory activeFilter={activeFilter} categoryName='collection' title={'Коллекция'} />
      <AccordeonDinamicCategory activeFilter={activeFilter} categoryName='city' title={'Город'}/>
      <AccordeonDinamicCategory activeFilter={activeFilter} categoryName='discount' title={'Скидка'}/>
      <AccordeonDinamicCategory activeFilter={activeFilter} categoryName='category' title={'Категория'}/>
      <AccordeonDinamicCategory activeFilter={activeFilter} categoryName='fff' title={'АААА'}/>

      {attributes.map( (filter) => {
        return <Accordeon filterItem={filter} key={filter.taxonomy_slug}/>
      })}
    </FilterMobile>
  </>

}



export default CatalogFilter