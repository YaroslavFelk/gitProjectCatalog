import * as React from 'react';
import {
  AccordeonBlock,
  AccordeonBody,
  AccordeonBodyContainer, ShowMore,
} from "../../CatalogPage/Accordeon/Accordeon.sc";
import AccordeonHead from "../../CatalogPage/Accordeon/AccordeonHead";


const AccordeonFilter  = ({initialActive, order, title, issetMore, children, count = 0,}) => {
  const [active, setActive] = React.useState(initialActive)
  const [more, setMore] = React.useState(false)

  return (

          <AccordeonBlock order={order}>
            <AccordeonHead title={title} active={active} setActive={setActive} />
            <AccordeonBody active={active}>
              <AccordeonBodyContainer active={active} more={more} issetMore={issetMore}>
                {React.Children.map(children, child => {
                    return React.cloneElement(child, {
                      active: active,
                      more: more,
                      setMore: setMore
                    })
                  })
                }
                {issetMore &&
                <ShowMore active={active} onClick={() => setMore(!more)}>{more ? 'Свернуть' : `Показать все (${count})`}</ShowMore> }
              </AccordeonBodyContainer>
            </AccordeonBody>
          </AccordeonBlock>
  );
}

export default AccordeonFilter;
