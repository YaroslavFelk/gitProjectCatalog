import * as React from "react"
import {ModalBLock} from "./VideoModal.sc";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {AModalVideo} from "../../../constants/actions";

const VideoModal = () => {
  const dispatch = useDispatch()
  const modalVideo =  useSelector((state: RootState) => state.modalVideo)
  const ref = React.useRef(null)
  return (
    <ModalBLock
      ref={ref}
      active={modalVideo.open}
      onClick={(e) => {
        if (e.target === ref.current) {
          dispatch({
            type: AModalVideo.CLOSE
          })
        }
      }}
    >
      <iframe src={modalVideo.video} />
    </ModalBLock>
  )
};


export default VideoModal;