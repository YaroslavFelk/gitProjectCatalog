import React, {useEffect} from 'react';
import InputMask from "react-input-mask";
import { FilterSliderInput} from "../../Accordeon/Accordeon.sc";

const InputRange = ({value, dispatch, isMin, notCountValue, suf}) => {
  const ref = React.useRef(null)
  const [inputValue, setInputValue] = React.useState(value)
  const [mask, setMask] = React.useState( reformatAndSetMask(reformatAndSetValue(isMin ? notCountValue[0] : notCountValue[1])))
  const regexp = /\d+/gm

  useEffect( () => {
    let refValue = reformatAndSetValue(value)

    setInputValue(refValue)
    setMask(reformatAndSetMask(refValue))
  }, [value])

  function reformatAndSetMask(value) {
    if (value) {
      ref?.current ? ref.current.setCursorToEnd() : null

      return '*'.repeat(value.toString().length) + '*'
      // return string.length > 3 ? string.slice(0, -3) + ' ' + string.slice(-3) + '*' : string +
    }
    return '*'
  }

  function reformatAndSetValue(value) {
    if (value) {
      value = value.toString()
      return value.length > 3 ? value.slice(0, -3) + ' ' + value.slice(-3) : value
    }
    return ''
  }

  return (
    <InputMask
            ref={ref}
            // onChange={(e) => setInputMinValue(e.target.value)}
            mask={mask + suf}
            alwaysShowMask
            value={`${inputValue}${suf}`}
            maskChar=" "
            formatChars={{'*': '[0-9]'}}
            onChange={(e) => {
              value = e.target.value.replace(/\s/g, '').match(regexp)
              value ? value = value.reduce( (acc, val) => acc + val) : ''
              const number = value ? Number(value) : 0
              setInputValue(reformatAndSetValue( number ? number :  ''))
              setMask(reformatAndSetMask(reformatAndSetValue(number)))

              if (!isNaN(number) && number) {
                if ( (isMin && number < notCountValue[1]) || (!isMin && number > notCountValue[0])) {
                  dispatch(number, isMin)
                }
              }
            }}
            onBlur={() => {
              if ( (isMin && value < notCountValue[0]) || (!isMin && value > notCountValue[1])) {
                value = isMin ? notCountValue[0] : notCountValue[1]
                dispatch(value, isMin)
              }
         /*     if ( (isMin && value > notCountValue[0]) || (!isMin && value < notCountValue[1])) {
                value = !isMin ? notCountValue[0] : notCountValue[1]
                dispatch(value, !isMin)
              }*/
              setInputValue(reformatAndSetValue(value))
              setMask(reformatAndSetMask(reformatAndSetValue(value)))
            }}


    >
      {() => <FilterSliderInput />}
    </InputMask>
  )
};

export default InputRange;
