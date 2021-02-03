import * as React from "react"
import styled from "styled-components";
import {Colors} from "../../../constants/colors";
import Button from "../Button";
import {BREAKPOINTS} from "../../../constants/breakpoints";


const initOptions = {}


const mock = {
  city: 'Москва',
  address: 'Ходынский б-р, д. 20А',
  distance: '1100',
  subway: 'ЦСКА',
  area: 203,
  timetable: [
    'с 10:00 до 21:00'
  ]
}



const CardShowroom = (props) => {

  const {city, area, address, subway, distance} = mock;

  function compileDistance( distance ){
    distance = parseInt(distance)
    if( distance < 1000 ) return `${distance} м`
    return `${parseInt(distance) / 1000} км`
  }

  return (
    <Carcass>
      <Card>
        <ShowroomCover>
          <Image />
          <Badge>{area} м<sup>2</sup></Badge>
        </ShowroomCover>
        <ShowroomDetails>
          <City>{city}</City>
          <Address>{address}</Address>
          <Subway color={'#FFE072'}>{subway} ({compileDistance(distance)})</Subway>
          <Buttons>
            <Button size="small" theme="light">Подробнее</Button>
            <Button size="small">Записаться</Button>
          </Buttons>
        </ShowroomDetails>
      </Card>
    </Carcass>
  )
}


const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  
  & > div:not(:last-of-type){
    margin-right: 10px;
  }
`
const Subway = styled.div<{color}>`
  font: normal normal 400 14px/1.5px 'Open-Sans', sans-serif;
  color: ${Colors.TEXT_SECONDARY};
  text-align: center;

  &:before {
    content: 'М';
    display: inline-block;
    height: 17px;
    width: 17px;
    line-height: 17px;
    border-radius: 50%;
    font: normal normal 400 10px/17px 'Open-Sans', sans-serif;
    color: #fff;
    text-align:center;
    background: ${props => props.color ? props.color : 'red'};
    margin-right: 5px;
  }
`
const Address = styled.div`
  text-align: center;
  font: normal normal 400 14px/1.5em 'Open-Sans', sans-serif;
  color: ${Colors.TEXT_SECONDARY};;
`
const Badge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: inline-block;
  border-radius: 3px;
  padding: 4px 7px;
  background: rgba(0, 134, 168, 0.75);
  font: normal normal 400 10px/1em 'Open-Sans', sans-serif;
  color: #fff;
`
const Image = styled.img`
  
`
const City = styled.div`
  text-align: center;
  font: normal normal 400 14px/1em 'Open-Sans', sans-serif;
  color: ${Colors.TEXT_PRIMARY};
`
const ShowroomDetails = styled.div`
  margin-top: 15px;
`
const ShowroomCover = styled.div`
  width: 100%;
  padding-bottom: 100%;
  background: #e3e3e3;
  border-radius: 3px;
  position: relative;
`
const Card = styled.div`
  border: 1px solid ${Colors.BORDER_PRIMARY};
  border-radius: 3px;
  padding: 15px;
  position: relative;
`
const Carcass = styled.div`
  width: 100%;
  
  @media(${BREAKPOINTS.TILL_MD}){
    width: calc(100% - 45px);
    position: relative;
  
    &:not(:last-of-type){
      margin-right: 15px;
    }
  }
`

export default CardShowroom