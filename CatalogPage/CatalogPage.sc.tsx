import styled from "styled-components";
import {Col} from "../Grid";
import {Colors} from "../../constants/colors";

export const Heading = styled(Col)`
  font: normal normal 600 36px/1em 'Lato',sans-serif;
  margin-bottom: 40px;
  color: ${Colors.PRIMARY_TEXT};
`
export const CatalogCol = styled(Col)`
  margin-bottom: 30px;
`

export const CatalogItems = styled.div`
  flex-grow: 1;
`

export const CatalogBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
`