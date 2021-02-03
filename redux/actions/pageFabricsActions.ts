import {AModalForm} from "../../constants/actions";

export function openModalForm(addMaterial) {
    return {
    type: AModalForm.SET_DATA,
    payload: {
      data: {
        name: 'Ваш заказ',
        slug: 'samples',
        action: '/',
        items: [
          {
            name: 'Ваше имя',
            slug: 'name',
            required: true,
            placeholder: 'Имя',
            type: 'text',
          },
          {
            name: 'Номер телефона',
            slug: 'phone',
            required: true,
            type: 'tel',
          },
          {
            name: 'E–mail',
            slug: 'email',
            type: 'email',
            required: true,
            placeholder: 'skdesign@example.ru'
          },
          {
            name: 'Город',
            slug: 'city',
            type: 'address',
          },
          // {
          //   name: 'Адрес',
          //   slug: 'address',
          //   type: 'text',
          //   placeholder: 'Ваш адрес'
          // },
        ],
        submit: {name:  'Оформить заказ', slug: 'submit'},
        data: {addMaterial}
      }
    }
  }
}