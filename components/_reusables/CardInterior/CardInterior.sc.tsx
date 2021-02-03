import styled from "styled-components";

export const Button = styled.div`
  display: block;
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: #fff;
  border-radius: 3px;
  padding: 13px 15px;
  color: #828282;
  cursor: pointer;
  text-transform: uppercase;
  max-width: calc(100% - 40px);
`
export const Image = styled.img`
  width: 100%;
  border-radius: 3px;
`
export const Card = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`
export const CardWrapper = styled.div`
  padding-bottom: 100%;
`
export const CardCarcass = styled.div`
  width: calc( calc( 100% - 90px) / 4);
  position: relative;

  &:not(:last-of-type){
    margin-right: 30px;
  }
`