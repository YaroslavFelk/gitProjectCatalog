import styled from "styled-components";
import {Colors} from "../../../../constants/colors";
import {BREAKPOINTS} from "../../../../constants/breakpoints";
import {Fonts} from "../../../../constants/fonts";

export const FilterSliderItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 3px;
`

export const FilterSliderItemImgBlock = styled.div`
  height: 50px;
  width: 100px;
  margin-bottom: 15px;
  background: #fff;
  border-radius: 3px;
  transition: all 0.1s;
`

export const FilterSliderItemName = styled.p`
  font: ${Fonts.OS_400_14_14};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
  width: 100%;
  text-align: center;
`


export const FilterSliderItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #E3E3E3;
  border-radius: 3px;
  padding: 15px;
  width: 215px;
  transition: all 0.05s;
  background-color: #fff;
  color: ${Colors.TEXT_PRIMARY};
  text-decoration: none;
  overflow: hidden;
  &:hover {
    background: ${Colors.BACKGROUND_ACTIVE};
  }
  
  &:hover ${FilterSliderItemImgBlock} {
    filter: drop-shadow(3px 3px 0px rgba(53, 50, 56, 0.05));
  }
  
  @media (${BREAKPOINTS.TILL_MD}) {
    padding: 10px;
    width: 150px;
    text-align: center;
  }
`

export const FlickityContainer = styled.div`
  flex: 1;
  margin-top: 60px;
  
  & .flickity-prev-next-button {
    height: 40px;
    width: 40px;
    background: #fff;
    opacity: 1;
    // border: 1px solid ${Colors.BORDER_PRIMARY};
    border: none;
    box-shadow: 0 5px 20px rgba(53, 50, 56, 0.14);
  }
  & .flickity-prev-next-button:disabled {
    opacity: 0.5;
  }
  & .flickity-prev-next-button.next {
    right: -20px !important;
    background: #fff url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDYgMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01LjI4NjgxIDQuMzM3MTNMMC42NjE0NjUgMC4xMDM3ODhDMC41MDk5MjEgLTAuMDM0ODMxNSAwLjI2NDU2OCAtMC4wMzQ1OTg1IDAuMTEzMjc4IDAuMTA0NTA1Qy0wLjAzNzg5NTMgMC4yNDM1OSAtMC4wMzc1MDQ3IDAuNDY4ODk4IDAuMTE0MDU5IDAuNjA3NjI1TDQuNDY0MDkgNC41ODkwMUwwLjExMzkwMyA4LjU3MDM3Qy0wLjAzNzY0MTQgOC43MDkxMSAtMC4wMzgwMzIxIDguOTM0MjggMC4xMTMxMjEgOS4wNzMzOEMwLjE4ODk2MiA5LjE0MzExIDAuMjg4MzE4IDkuMTc3OTggMC4zODc2NzQgOS4xNzc5OEMwLjQ4Njc3NiA5LjE3Nzk4IDAuNTg1NzQyIDkuMTQzMzUgMC42NjE0NDYgOS4wNzQxTDUuMjg2ODEgNC44NDA4NkM1LjM1OTggNC43NzQyMSA1LjQwMDc2IDQuNjgzNTEgNS40MDA3NiA0LjU4OTAxQzUuNDAwNzYgNC40OTQ1IDUuMzU5NjggNC40MDM5MSA1LjI4NjgxIDQuMzM3MTNaIiBmaWxsPSIjMzUzMjM4Ii8+Cjwvc3ZnPgo=") center center no-repeat;
  }
  
  & .flickity-prev-next-button.previous {
    left: -20px !important;
    background: #fff url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDYgMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjcxMzIzNCA0Ljg0MDZMNS4zMzg1NCA5LjA3Mzk1QzUuNDkwMDggOS4yMTI1NyA1LjczNTQzIDkuMjEyMzMgNS44ODY3MiA5LjA3MzIzQzYuMDM3ODkgOC45MzQxNCA2LjAzNzUgOC43MDg4NCA1Ljg4NTk0IDguNTcwMTFMMS41MzU5NSA0LjU4ODczTDUuODg2MSAwLjYwNzM2NkM2LjAzNzY0IDAuNDY4NjIgNi4wMzgwMyAwLjI0MzQ1NiA1Ljg4Njg4IDAuMTA0MzUzQzUuODExMDQgMC4wMzQ2MjIyIDUuNzExNjggLTAuMDAwMjQ0MTQxIDUuNjEyMzMgLTAuMDAwMjQ0MTQxQzUuNTEzMjMgLTAuMDAwMjQ0MTQxIDUuNDE0MjYgMC4wMzQzODg1IDUuMzM4NTYgMC4xMDM2MzZMMC43MTMyMzQgNC4zMzY4N0MwLjY0MDI0NiA0LjQwMzUyIDAuNTk5Mjg5IDQuNDk0MjIgMC41OTkyODkgNC41ODg3M0MwLjU5OTI4OSA0LjY4MzIzIDAuNjQwMzYzIDQuNzczODMgMC43MTMyMzQgNC44NDA2WiIgZmlsbD0iIzM1MzIzOCIvPgo8L3N2Zz4K") center center no-repeat;
  }
  & .flickity-prev-next-button .flickity-button-icon {
    display: none;
  }
  
  & a {
  
    display: block;
  }
  
  & .flickity-slider > div {
   margin-right: 30px;
  }
  
  & .flickity-slider > div:last-of-type {
      margin-right: 0;
  }
  
  @media (${BREAKPOINTS.TILL_MD}) {
    margin-top: 0;
    margin-bottom: 40px;
    
    & .flickity-viewport {
    overflow: visible !important;
    position: relative;
  }
  & .flickity-prev-next-button {
    display: none;
  }
    
    & .flickity-slider > div {
    margin-right: 15px;
  }
  
    & .flickity-slider > div:last-of-type {
        margin-right: 0;
    }
  }
`
