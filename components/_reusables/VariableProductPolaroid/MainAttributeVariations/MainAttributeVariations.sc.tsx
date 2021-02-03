import styled from "styled-components";
import {VariationsBlock} from "../VariableProductPolaroid.sc";
import {BREAKPOINTS} from "../../../../constants/breakpoints";

export const MainAttributeVariationsStyle = styled(VariationsBlock)`
    position:absolute;
    justify-content: flex-end;
    bottom: 39px;
    height: 16px;

    @media( ${BREAKPOINTS.TILL_MD}) { 
         bottom: 31px;
    }
`