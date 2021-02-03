import React from 'react';
import CatalogPage from "../../components/CatalogPage";
import Breadcrumb from "../../components/_reusables/Breadcrumb";
import DefaultErrorPage from "next/error";
import {initCatalog} from "../../components/CatalogPage/CatalogPageFunctions";
import WithLayout from "../../components/HOCs/WithLayout/WithLayout";
import {REQUEST} from "../../constants/api";
import {useRouter} from "next/router";
import {Container} from "../../components/Grid";



const Catalog = ({response}) => {
  if (response.status !== 200) return <DefaultErrorPage statusCode={response.data.message}/>

  const catalog = response.data
  const router = useRouter()
  initCatalog(catalog)

  let links = [{slug: response.data.slug, name:catalog.name, href: router.asPath}]
  links = catalog.parent.length ? [...links, {slug: catalog.parent[0].slug, name:catalog.parent[0].name, href: `/product-category/${catalog.parent[0].slug}`}] : links
  return (
  <>
    <Container>
      <Breadcrumb links={links} />
    </Container>

    <CatalogPage subcategories={catalog.subcategory} name={catalog.name}/>
  </>
  );
};

Catalog.getInitialProps = async (ctx) => {
  const key = ctx.query.slug;
  const response = await REQUEST.catalog(key);
  return {response}
}

// // This gets called on every request
// export async function getServerSideProps({query}) {
//   const {slug} = query;
//   const response = await REQUEST.catalog(slug);
//   return {props: {response}}
// }


export default WithLayout(Catalog);