import * as React from 'react';
import {StockBlock, ToggleSelect} from "./ToggleRadioButton.sc";



const ToggleRadioButton = ({onClick, name, active}) => {
  return <StockBlock>
    <ToggleSelect
            active={active}
            onClick={onClick}
    />
    {name}
  </StockBlock>
};

export default ToggleRadioButton;