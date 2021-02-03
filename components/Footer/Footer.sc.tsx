import styled from "styled-components"
import {Colors} from "../../constants/colors"
import {Row} from "../Grid"
import {BREAKPOINTS} from "../../constants/breakpoints";

export const Navigation = styled.div`
  & > a {
    display: inline-block;
    border-radius: 3px;
    border: 1px solid #e3e3e3;
    padding: 5px 10px;
    cursor: pointer;
    margin-right: 15px;
  }
  
  & > a:hover {
    border-color: ${Colors.BRAND};
  }

  max-width: 1440px;
`
export const FooterBlock = styled(Row)`
  border-top: 1px solid #e3e3e3;
  padding-top: 30px;
  margin-top: 30px;
  padding-bottom: 30px;
  background: #fafafa;
  
  @media (${BREAKPOINTS.TILL_MD}){
    padding-bottom: 80px;
  }
`
