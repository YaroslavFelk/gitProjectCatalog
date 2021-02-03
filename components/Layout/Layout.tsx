import * as React from "react"
import Footer from "../Footer";
import Header from "../Header";
import styled from "styled-components";
import {BREAKPOINTS} from "../../constants/breakpoints";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {Background, ForFixedItems} from "../CatalogPage/CatalogPage.sc";

const Layout = ({children}) => {
  const router = useRouter()
  useEffect(() => {
    window.onpopstate = () => router.push(window.location.pathname)
  }, [])

  return (
    <PageWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <ContentWrapper>
        {children}
      </ContentWrapper>

      <FooterWrapper>
        <Footer />
      </FooterWrapper>
      <div id='sms' className='sms' />
    </PageWrapper>
  );
};


export const ContentWrapper = styled.div`
  flex: 1;

`
export const FooterWrapper = styled.div`
  flex: 0 0;
  margin-top: 60px;
  
  @media (${BREAKPOINTS.TILL_MD}) {
      margin-top: 40px;
  } 
`
export const HeaderWrapper = styled.div`
  flex: 0 0;
`
export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  min-height: 100vh;
  
  .fslightbox-open & {
    margin-right: 17px;
  }
`


export default Layout;