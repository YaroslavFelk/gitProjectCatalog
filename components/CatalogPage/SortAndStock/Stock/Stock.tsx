import * as React from "react"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {ACatalog} from "../../../../constants/actions";
import {useRouter} from "next/router";
import ToggleRadioButton from "../../../_reusables/ToggleRadioButton";




const Stock = () => {
  const router = useRouter()
  const [key, setKey] = React.useState(router.pathname === '/stock' ? 'outlet' : 'stock')
  const active = useSelector((state:RootState) => state.catalog.activeFilter[key]);
  const dispatch = useDispatch()

  return  <ToggleRadioButton
          onClick={() => dispatch({
            type: ACatalog.CHANGE_STOCK_OR_OUTLET,
            payload: {
              key,
              value: !active,
            }
          })}
          active={active}
          name={key === 'stock' ? 'В наличии' : 'OUTLET'}
  />
}



export default Stock