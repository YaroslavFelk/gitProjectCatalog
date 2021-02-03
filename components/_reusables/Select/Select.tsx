import * as React from 'react';
import {useRef} from "react";
import useOutsideClicked from "../../_hooks/useOutsideClick";
import {Display, DropdownArrow, Options, OptionStyle, SelectBlock} from "./Select.sc";



interface SelectItem {
  slug: string,
  name : string,
}

const Select = ({data, name, formItem} : {data : Array<SelectItem>, name? : string, formItem : any}) => {
  const [active, setActive] = React.useState(false);
  const [selectedItem , setSelectedItem] = React.useState({slug : '', name : 'Не выбрано'})
  const ref = useRef(null);

  useOutsideClicked(ref, () => {
    setActive(false);
  });

  return (
    <SelectBlock  ref={ref}>
      <input type="hidden" required={formItem.isRequired} readOnly value={selectedItem.slug} name={name}/>
      <Display
              active={active}
              onClick={() => {
                setActive(state => !state);
              }}
      >
        {selectedItem.name}
        <DropdownArrow active={active} />
      </Display>

      <Options active={active}>
        {data.map((option, index) =>
          <OptionStyle
            onClick={() => {
              setSelectedItem(option)
              setActive(false)
              formItem.value = option.slug
            }}
          >
            {option.name}
          </OptionStyle>
        )}
      </Options>
    </SelectBlock>
  )
};



export default Select;