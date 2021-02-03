import styled from "styled-components";
import {Colors} from "../../constants/colors";
import {Container} from "../Grid";

export const Navigation = styled.div`
  & > div + a {
    margin-top: 20px;
  }
  
  & > a {
    display: inline-block;
    border-radius: 3px;
    border: 1px solid #e3e3e3;
    padding: 10px 20px;
    cursor: pointer;
    margin-right: 15px;
  }
  
  & > a:hover {
    border-color: ${Colors.BRAND};
  }

  max-width: 1440px;
`
export const HeaderBlock = styled(Container)`
  border-bottom: 1px solid #e3e3e3;
  padding-top: 30px;
  padding-bottom: 30px;
  background: #fafafa;
`