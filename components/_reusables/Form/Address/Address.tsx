import * as React from "react"
// import {Alert, FormBlock, FormInput, FormLabel, FormSelect, Personal, Submit} from "./Form.sc";
// import {FormELement} from "../../../types/IForm";
// import InputMask from "react-input-mask";
// import Select from "../Select";
// import Link from "next/link";
import {AccordeonBlock, AccordeonBody, AccordeonBodyContainer, AccordeonHeadBlock, AccordeonToggle} from "./Address.sc";
import {FormInput, FormLabel, FormSelect} from "../Form.sc";
import Select from "../../Select";

interface Submit {
  name?: string,
  slug? : string,
}

const cities = [
  {
    slug: 'moscow',
    name: 'Москва',
  },
  {
    slug: 'spb',
    name: 'Санкт-Петербург',
  },
  {
    slug: 'kazan',
    name: 'Казань',
  },
  {
    slug: 'another',
    name: 'Другой город',
  }
]



const Address = ({items}) => {
  const [active, setActive] = React.useState(false)

  return (
    <AccordeonBlock>
      <AccordeonHeadBlock onClick={() => setActive(!active)} >
        <span>Добавить адрес</span>
        <AccordeonToggle
                active={active}
        >
          <svg width="10" height="11" viewBox="0 0 10 11" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.60938 5.10938H5.39062V0.890625C5.39062 0.674883 5.21574 0.5 5 0.5C4.78426 0.5 4.60938 0.674883 4.60938 0.890625V5.10938H0.390625C0.174883 5.10938 0 5.28426 0 5.5C0 5.71574 0.174883 5.89062 0.390625 5.89062H4.60938V10.1094C4.60938 10.3251 4.78426 10.5 5 10.5C5.21574 10.5 5.39062 10.3251 5.39062 10.1094V5.89062H9.60938C9.82512 5.89062 10 5.71574 10 5.5C10 5.28426 9.82512 5.10938 9.60938 5.10938Z"/>
          </svg>
        </AccordeonToggle>
      </AccordeonHeadBlock>
      <AccordeonBody active={active}>
        <AccordeonBodyContainer active={active}>

          <FormLabel id='city' key='city'>
            <span>Город</span>
            <FormSelect>
              <Select formItem={items.find(item => item.slug === 'city')} data={cities} name='city' />
            </FormSelect>
          </FormLabel>

          <FormLabel id='address' key='address' >
            <span>Адрес</span>
            <FormInput
                    onChange={(e) => items.find(item => item.slug === 'address').value = e.target.value}
                    type='text'
                    name='Адрес'
                    placeholder='Улица, дом, корпус, квартира'
            />
          </FormLabel>

          <FormLabel id='recipient' key='recipient' >
            <span>Получатель</span>
            <FormInput
                    onChange={(e) => items.find(item => item.slug === 'recipient').value = e.target.value}
                    type='text'
                    name='Получатель'
                    placeholder='ФИО'
            />
          </FormLabel>
        </AccordeonBodyContainer>
      </AccordeonBody>
    </AccordeonBlock>
  )
}


export default Address