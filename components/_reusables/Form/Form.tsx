import * as React from "react"
import {Alert, FormBlock, FormInput, FormLabel, FormSelect, Personal, Submit, SubmitBlock} from "./Form.sc";
import {FormELement} from "../../../types/IForm";
import InputMask from "react-input-mask";
import Select from "../Select";
import Link from "next/link";
import Address from "./Address";

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



const Form = ({name, formStyles, method, submit, action, items, data}
  : {name : string, method? : string, action : string, items : Array<FormELement>, submit? : Submit, data? : any, formStyles? : Object} ) => {
  const [form, setForm] = React.useState(items.map( item => { item.value = null; return  item }))

  function onSubmit(e) {
    const alert = document.querySelector('.formAlert')
    let issetError = false
    alert.innerHTML = null
    e.preventDefault()

    items.map( item => {
      if (item.required && !item.value) {
        alert.innerHTML += `<div>${item.name} не заполнено</div>`
        issetError = true
      }

      if (item.type === 'email' && item.value && !item.value.toString().includes('@') ) {
        alert.innerHTML += `<div>Email должен содержать символ '@'</div>`
        issetError = true
      }

      if (item.type === 'tel' && item.value && item.value.toString().includes('_') ) {
        alert.innerHTML += `<div>Телефон заполнен некоректно</div>`
        issetError = true
      }
    })
    if (!issetError) {
      fetch("/", {
        method: "POST",
        body: JSON.stringify({ form: items, data: data}),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json())
    }
  }


  return (
    <FormBlock onSubmit={(e) => onSubmit(e)} action={action} method={method ?? 'post'} noValidate name={name} style={formStyles} >
      <Alert className='formAlert'/>
      {items.map(item => {
        switch (item.type) {
          case 'text': {
            return <FormLabel id={name + item.slug} key={item.slug}>
              <span>{item.name} {item.required && '*'}</span>
              <FormInput
                      onChange={(e) => item.value = e.target.value}
                      type={item.type}
                      name={item.slug}
                      placeholder={item.placeholder}
                      style={item.styles}
              />
            </FormLabel>
          }
          case 'tel': {
            return <FormLabel id={name + item.slug} key={item.slug}>
              <span>{item.name} {item.required && '*'}</span>
              <InputMask
                      onChange={(e) => item.value = e.target.value}
                      mask='+7(999)-999-99-99'
                      placeholder='+7(999)-999-99-99'
                      maskPlaceholder="+7(___)-___-__-__"
                      type={item.type}
                      name={item.slug}
                      style={item.styles}
              />
            </FormLabel>
          }
          case 'address': {
            items = [...items, { type : 'text', slug : 'address', value: ''}, { type : 'select', slug : 'city', value: ''}, { type : 'text', slug : 'recipient', value: ''},]
            return <Address key='address' items={items} />
          }
          case 'select': {
            return <FormLabel id={name + item.slug} key={item.slug}>
              <span>{item.name} {item.required && '*'}</span>
              <FormSelect><Select formItem={item} data={cities} name='city' /></FormSelect>
            </FormLabel>
          }
          case 'email': {
            return <FormLabel id={name + item.slug} key={item.slug}>
              <span>{item.name} {item.required && '*'}</span>
              <FormInput onChange={(e) => item.value = e.target.value}  type={item.type}  name={item.slug} placeholder={item.placeholder} style={item.styles}/>
            </FormLabel>
          }
        }

        // return (
        //         {{
        //           'text': <FormLabel id={name + item.slug} key={item.slug}>
        //     <span>{item.name} {item.required && '*'}</span>
        //     <FormInput onChange={(e) => console.log(e.target.value)}  type={item.type} name={item.slug} placeholder={item.placeholder} style={item.styles}/>
        //   </FormLabel>
        // },[item.type]}
      })}
      <Personal >
        Нажимая на кнопку «Отправить», я даю согласие на обработку <Link passHref href='/'><a>персональных данных</a></Link>
      </Personal>
      <SubmitBlock>
        <Submit type='submit' value={submit.name} />
      </SubmitBlock>
    </FormBlock>
  )
}


export default Form