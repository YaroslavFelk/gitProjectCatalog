import * as React from "react"
import {useState} from "react";
import AccordeonHead from "../Accordeon/AccordeonHead";
import {ButtonRadio, RadioItem} from "./AccordeonPrice.sc";
import {AccordeonBlock, AccordeonBody, AccordeonBodyContainer} from "../Accordeon/Accordeon.sc";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {ACatalog} from "../../../constants/actions";
import PriceSlider from "./PriceSlider";
import {PricesRadio, ShowRadioBlock} from "../Accordeon/AccordeonCheckboxItem/AccordeonCheckboxItem.sc";
import reformatPriceNumber from "../../../utils/reformatPriceNumber";

const   AccordeonPrice = () => {
  const [active, setActive] = useState(true)
  const dispatch = useDispatch()
  const activePriceRange = useSelector((state:RootState) => state.catalog.activeFilter.priceRange)
  const initialPriceRange = useSelector((state:RootState) => state.catalog.initialFilter.priceRange)

  function round(price) { return  Math.round(price / 5000) * 5000}

  let priceRadioStep = Math.round((round(initialPriceRange[1]) - round(initialPriceRange[0])) / 5000 ) * 1000

  function getPricewithStep(step : number) {
    return round(initialPriceRange[0]) + priceRadioStep * step
  }


  return (
    <AccordeonBlock order={1}>
      <AccordeonHead title='Цена' active={active} setActive={setActive} />
      <AccordeonBody active={active}>
        <AccordeonBodyContainer active={active}>
          <ShowRadioBlock active={active}>
            <PriceSlider />
            <PricesRadio>
              <RadioItem
                      active={activePriceRange[0] === initialPriceRange[0] && activePriceRange[1] === initialPriceRange[1]}
                      onClick={() => dispatch({
                        type: ACatalog.CHANGE_PRICE,
                        payload: {
                          priceRange: [initialPriceRange[0], initialPriceRange[1]]
                        }
                      })}
              >
                <ButtonRadio active={activePriceRange[0] === initialPriceRange[0] && activePriceRange[1] === initialPriceRange[1]}/>
                Все цены
              </RadioItem>
              <RadioItem
                      active={activePriceRange[0] === initialPriceRange[0] && activePriceRange[1] === getPricewithStep(1)}
                      onClick={() => dispatch({
                        type: ACatalog.CHANGE_PRICE,
                        payload: {
                          priceRange: [initialPriceRange[0], getPricewithStep(1)]
                        }
                      })}>
                <ButtonRadio
                        active={activePriceRange[0] === initialPriceRange[0] && activePriceRange[1] === getPricewithStep(1)}
                />
                Менее {reformatPriceNumber(getPricewithStep(1))} ₽
              </RadioItem>
              <RadioItem
                      active={activePriceRange[0] === getPricewithStep(1) && activePriceRange[1] === getPricewithStep(2)}
                      onClick={() => dispatch({
                        type: ACatalog.CHANGE_PRICE,
                        payload: {
                          priceRange: [getPricewithStep(1), getPricewithStep(2)]
                        }
                      })}
              >
                <ButtonRadio
                        active={activePriceRange[0] === getPricewithStep(1) && activePriceRange[1] === getPricewithStep(2)}
                />
                {reformatPriceNumber(getPricewithStep(1))} - {reformatPriceNumber(getPricewithStep(2))} ₽
              </RadioItem>
              <RadioItem
                      active={activePriceRange[0] === getPricewithStep(2) && activePriceRange[1] === getPricewithStep(3)}
                      onClick={() => dispatch({
                        type: ACatalog.CHANGE_PRICE,
                        payload: {
                          priceRange: [getPricewithStep(2), getPricewithStep(3)]
                        }
                      })}
              >
                <ButtonRadio
                        active={activePriceRange[0] === getPricewithStep(2) && activePriceRange[1] === getPricewithStep(3)}
                />
                {reformatPriceNumber(getPricewithStep(2))} - {reformatPriceNumber(getPricewithStep(3))} ₽
              </RadioItem>
              <RadioItem
                      active={activePriceRange[0] === getPricewithStep(3) && activePriceRange[1] === getPricewithStep(4)}
                      onClick={() => dispatch({
                        type: ACatalog.CHANGE_PRICE,
                        payload: {
                          priceRange: [getPricewithStep(3), getPricewithStep(4)]
                        }
                      })}
              >
                <ButtonRadio
                        active={activePriceRange[0] === getPricewithStep(3) && activePriceRange[1] === getPricewithStep(4)}
                />
                {reformatPriceNumber(getPricewithStep(3))} - {reformatPriceNumber(getPricewithStep(4))} ₽
              </RadioItem>
              <RadioItem
                      active={activePriceRange[0] === getPricewithStep(4) && activePriceRange[1] === initialPriceRange[1]}
                      onClick={() => dispatch({
                        type: ACatalog.CHANGE_PRICE,
                        payload: {
                          priceRange: [getPricewithStep(4), initialPriceRange[1]]
                        }
                      })}
              >
                <ButtonRadio
                        active={activePriceRange[0] === getPricewithStep(4) && activePriceRange[1] === initialPriceRange[1]}
                />

                {reformatPriceNumber(getPricewithStep(4))} ₽ и более
              </RadioItem>
            </PricesRadio>
          </ShowRadioBlock>
        </AccordeonBodyContainer>
      </AccordeonBody>
    </AccordeonBlock>
  )
}



export default AccordeonPrice