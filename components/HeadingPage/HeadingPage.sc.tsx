import styled from "styled-components"
import {Colors} from "../../constants/colors"


const fontSize = {
  small: 18,
  medium: 24,
  large: 36
}


export const Heading = styled.div<{ size }>`
  font: normal normal 600 ${props => fontSize[props.size]}px/1em 'Lato', sans-serif;
  color: ${Colors.TEXT_PRIMARY};
`
