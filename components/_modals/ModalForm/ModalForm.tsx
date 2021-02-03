import * as React from "react"
import {RootState} from "../../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import Form from "../../_reusables/Form";
import ModalLayout from "../../_reusables/ModalLayout/ModalLayout";
import {AModal} from "../../../constants/actions";
import {setBobyClassnameFixed} from "../../../utils";

const ModalForm = () => {
  const modalForm = useSelector((state: RootState) => state.modals.modalForm)
  const dispatch = useDispatch()

  return (
    <>
      <ModalLayout name={modalForm.data.name} isShown={modalForm.shown} onClick={() => {
        dispatch({type: AModal.CLOSE, payload: {target: 'modalForm'} })
        setBobyClassnameFixed()
      }}>
        <Form
                name={modalForm.data.name}
                method={modalForm.data.method}
                action={modalForm.data.action}
                items={modalForm.data.items}
                submit={modalForm.data.submit}
                data={modalForm.data.data}
                formStyles={modalForm.data.formStyles}
        />
      </ModalLayout>
    </>
  )
}


export default ModalForm