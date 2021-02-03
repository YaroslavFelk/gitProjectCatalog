import styled from "styled-components";
import {Colors} from "../../../constants/colors";
import {Fonts} from "../../../constants/fonts";
import {BREAKPOINTS} from "../../../constants/breakpoints";

export const FormInput = styled.input`
  border: none;
  border-bottom: 1px solid #e3e3e3;
  padding: 0;
  width: 100%;
  height: 40px;
  border-radius: 0;
  font: normal normal 400 14px/1.5em 'open-sans', Arial, sans-serif;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  
  &:focus {
    border-color: ${Colors.BRAND};
    outline: none;
  }
  
  &::placeholder {
    color: ${Colors.BORDER_PRIMARY};
  }
`

export const FormLabel = styled.label`
  font: ${Fonts.OS_400_12_12};
  user-select: none;
  color: ${Colors.TEXT_SECONDARY};
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 3px;
  
  & span {
    font: ${Fonts.OS_400_14_21};
  }
  
  & input {
    //border: none;
    border: 2px solid ${Colors.BORDER_PRIMARY};
    padding: 0;
    width: 100%;
    height: 40px;
    font: ${Fonts.OS_400_14_21};
    border-radius: 3px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    margin-top: 5px;
    padding-left: 15px;
    
    &:focus {
      border-color: ${Colors.BRAND};
      outline: none;
    }
    
    &::placeholder {
      color: ${Colors.TEXT_PLACEHOLDER};
    }
  }
  
  @media(${BREAKPOINTS.TILL_MD}) {
    margin-bottom: 15px;
  }
`

export const FormBlock = styled.form`
  margin-top: 20px;
  padding: 20px 15px 80px;
`

export const FormSelect = styled.div`
  margin-top: 5px;
`

export const Submit = styled.input`
    width: 100%;
    background: ${Colors.BACKGROUND_GREEN};
    border: none;
    font: ${Fonts.OS_400_14_21};
    color: #fff;
    padding: 15px 0;
    border-radius: 3px;
    cursor: pointer;
    transition: 0.24s;
`

export const SubmitBlock = styled.div`
    width: calc(100%);
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 15px;
    background: rgba(255, 255, 255, 0.8);
`

export const Personal = styled.div`
   font: ${Fonts.OS_400_14_21};
   color: ${Colors.TEXT_PRIMARY};
   margin-bottom: 20px;
   margin-top: 25px;
   
   & a {
    color: ${Colors.BRAND};
   }
`

export const Alert = styled.div`
  color: red;
  font: ${Fonts.OS_400_14_21};
  display: flex;
  align-items: start;
  flex-direction: column-reverse;
`