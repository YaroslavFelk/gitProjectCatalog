import * as React from "react"
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {
  Container,
  Row,
} from "react-grid"
import Head from "next/head";
import {
  Background,
  CatalogBlock,
  CatalogCol,
  CatalogItems,
  CatalogRow,
  ForFixedItems,
  Heading,
} from "./CatalogPage.sc";
import VariableProductPolaroid from "../_reusables/VariableProductPolaroid";
import CatalogFilter from "./CatalogFilter";
import OneVariationProductPolaroid from "../_reusables/OneVariationProductPolaroid";
import SortAndStock from "./SortAndStock";
import CatalogPagination from "./CatalogPagination";
import CatalogTopFilter from "./CatalogTopFilter";
import {useSetUrlString} from "./CatalogPageFunctions";
import {useRouter} from "next/router";
import declineWord from "../../utils/declineWord";
import {useEffect} from "react";
import {FilterBlock} from "./CatalogFilter/CatalogFilter.sc";
import Breadcrumb from "../_reusables/Breadcrumb";





const styles = {
  breakpoints: { xs: 0, sm: 570, md: 798, lg: 1054, xl: 1470 },
  containerMaxWidths: { sm: 570, md: 798, lg: 1054, xl: 1470 },
  columns: 12,
  gutterWidth: 30
}

const CatalogPage = ({subcategories, name}) => {
  const perPage = useSelector((state:RootState) => state.catalog.perPage);
  const page = useSelector((state:RootState) => state.catalog.page);
  const catalog = useSelector((state:RootState) => state.catalog.filtredCatalog);
  const catalogLength = useSelector((state:RootState) => state.catalog.initialCatalog).length;
  const activeFilter = useSelector((state:RootState) => state.catalog.activeFilter);
  const initialFilter = useSelector((state:RootState) => state.catalog.initialFilter);
  const [openFilter, setOpenFilter] = React.useState(false)
  const router = useRouter()
  const ref = React.useRef(null)

  useEffect(() => {
    let a = document.getElementById('sms')
    openFilter ? a.classList.add('hidden') : a.classList.remove('hidden')
  }, [openFilter])

  useSetUrlString(router, activeFilter, initialFilter)

  return (
    <>
      <Head>
        <title>Каталог/{name}</title>
      </Head>

      <Container styles={styles}>
        <Row styles={styles}>
          <Heading xs={12} styles={styles}>
            {name}
            <span  >{catalogLength}</span>
          </Heading>
        </Row>

        <CatalogTopFilter
          subcategories={subcategories}
        />

        <CatalogBlock>
          <FilterBlock xl={2} md={3}>
            <CatalogFilter  openFilter={openFilter} setOpenFilter={setOpenFilter}/>
          </FilterBlock>
          <CatalogItems xl={10}  md={9}>
            <span ref={ref}/>
            <SortAndStock openFilter={openFilter} setOpenFilter={setOpenFilter}/>
            {catalog.length ?
                     <div><CatalogRow>
                      { catalog.slice(perPage * (page - 1), perPage * page).map( (p) => {
                        return (
                                <CatalogCol key={p.id}  xs={6} sm={4}   md={6} lg={4} xl={3} styles={styles}>
                                  {
                                    Object.keys(p.variations).length === 1
                                            ? <OneVariationProductPolaroid item={p} key={p.id} />
                                            : <VariableProductPolaroid item={p} activeAttributes={activeFilter.attributeFilter} key={p.id} />
                                  }
                                </CatalogCol>
                        )
                      })}
                    </CatalogRow>
                    <CatalogPagination scrollToRef={ref} active={!openFilter} catalogLength={catalog.length}/>
                    </div>
              : <div>Товары с выбранными аттрибутами не найдены</div>

            }

          </CatalogItems>

        </CatalogBlock>

      </Container>
      <ForFixedItems isHidden={openFilter} >
        <Background />

      </ForFixedItems>
      <div className='haveFun' />
    </>
  )
};



export default CatalogPage;