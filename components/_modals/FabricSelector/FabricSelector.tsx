import * as React from "react"
import styled, {keyframes} from "styled-components"

import {Colors} from "../../../constants/colors"
import FabricFilter from "./FabricFilter"
import FabricList from "./FabricList"
import {useDispatch, useSelector} from "react-redux"
import {RootState} from '../../../redux/store'
import useOutsideClicked from "../../_hooks/useOutsideClick"
import axios from "axios"
import {AModal, AModalFabric} from "../../../constants/actions";
import {
  DropdownArrow,
  FabricFilterSwitch,
  ModalClose, ModalFilter,
  ModalHead,
  ModalTitle,
  ModalWindow,
  TransparentCover,
  Loader, ScrollView, Retry, RetryNotification, RetryAction, Progress
} from "./FabricSelector.sc";
import {memo} from "react";


const target = 'modalFabric';





// const useHookWithRefCallback = () => {
//   const ref = React.useRef(null)
//   const setRef = React.useCallback(node => {
//     if (ref.current) {
//       console.log('DETACH EVT');
//     }
//
//     if (node) {
//       console.log('ATTACH EVT');
//     }
//
//     ref.current = node;
//   }, [])
//
//   return [setRef]
// }





const FabricSelector = () => {

  const dispatch = useDispatch();

  const ref = React.useRef(null);
  // const scrollRef = React.useRef(null);
  // const [scrollRef] = useHookWithRefCallback();
  const [touched, setTouched] = React.useState(false)
  const [filterTouched, setFilterTouched] = React.useState(false)
  const [filterActive, setFilterActive] = React.useState(false);
  // const [progress, setProgress] = React.useState(0)
  const modalFabric = useSelector((state: RootState) => state.modals.modalFabric);
  const {loading, loaded, shown} = modalFabric;

  useOutsideClicked(ref, () => {
    dispatch({
      type: AModal.CLOSE,
      payload: {target}
    })
  });

  React.useEffect(() => {
    if (loading && shown) {
      if (!touched) setTouched(true)

      axios.get(`http://130.193.62.149:8080/wp-json/rest/v3/fabrics`)
        .then((response) => {
          const {status, data} = response;

          status === 200 ?
            dispatch({
              type: AModalFabric.FETCH_SUCCESS,
              payload: {target, loaded: true, loading: false, data}
            }) :
            dispatch({
              type: AModalFabric.FETCH_ERROR,
              payload: {target, loaded: false, loading: false,}
            })
        })
        .catch(() => {
          dispatch({
            type: AModalFabric.FETCH_ERROR,
            payload: {target, loaded: false, loading: false,}
          })
        })
    }
  }, [loading, shown, touched])

  // React.useEffect(() => {
  //
  //   console.log('ATTACH SCROLL LISTENER')
  //
  //   function upd_progress(evt){
  //     updateProgressBar(evt)
  //   }
  //
  //   if(scrollRef.current !== null) scrollRef.current.addEventListener('scroll', upd_progress)
  //
  //   return () => {
  //     if(scrollRef.current !== null) scrollRef.current.removeEventListener('scroll', upd_progress)
  //   }
  // }, [scrollRef])



  // const progressRef = React.createRef();

  console.log('RENDER');

  return (
    <>
      <TransparentCover active={shown}/>
      <ModalWindow active={shown} touched={touched} ref={modalFabric ? ref : null} duration="0.2s">
        <ModalClose
          onClick={() => {
            if (shown) dispatch({
              type: AModal.CLOSE,
              payload: {target}
            })
          }}
        />

        {/*<Progress scroll={progress + '%'}/>*/}
        {/*<FabricProgress ref={progressRef}/>*/}
        {/*<FabricProgressTest r={scrollRef}/>*/}

        <ModalHead>
          <ModalTitle>Выбрать ткань</ModalTitle>
          <FabricFilterSwitch onClick={() => {
            setFilterActive(a => !a)
            if (!filterTouched) setFilterTouched(true)
          }}>
            {filterActive ? 'Свернуть фильтр' : 'Развернуть фильтр'}
            <DropdownArrow active={filterActive}/>
          </FabricFilterSwitch>
        </ModalHead>

        {loading ? <Loader/> :

          loaded ?
            <>
              <ModalFilter active={filterActive} touched={filterTouched} duration="0.2s">
                <FabricFilter/>
              </ModalFilter>
              {/*<ScrollView ref={scrollRef || 0}>*/}
              <ScrollView>
                <FabricList/>
              </ScrollView>
            </> :

            <Retry>
              <RetryNotification>
                Извините милорд! Мы не смогли найти ваши ткани...
              </RetryNotification>
              <RetryAction
                onClick={() => {
                  dispatch({
                    type: AModalFabric.FETCH_RETRY,
                    payload: {target, loaded: false, loading: true,}
                  })
                }}
              >
                Попробовать еще раз
              </RetryAction>
            </Retry>
        }
      </ModalWindow>
    </>
  );
};

// const FabricProgressTest = ({r}) => {
//
//   console.log('r', r);
//   const test = React.useRef(r())
//   console.log('test', test);
//
//   // React.useEffect(() => {
//   //   console.log('USE EFFECT')
//   //   if( refff.current )  {
//   //     console.log('TRY ATTACH');
//   //     refff.current.addEventListener('scroll', () => { console.log('I AM SCROLLED') })
//   //   }
//   // }, [refff])
//
//
//   return (
//     <div>123</div>
//   )
// }

// const FabricProgressTest = ({scroll}) => {
//   const useHookWithRefCallback = () => {
//     const ref = React.useRef(null)
//     const setRef = React.useCallback(node => {
//       if( ref.current ){
//         ref.current.removeEventListener('scroll', updateProgressBar)
//       }
//
//       if( node ){
//         node.addEventListener('scroll', updateProgressBar)
//       }
//
//       ref.current = node;
//     }, [])
//
//     return [setRef]
//   }
//
//   const updateProgressBar = debounce((e) => {
//     // let blockHeight = e.target.offsetHeight;
//     let blockHeight = e.target.scrollHeight;
//     let scrollHeight = e.target.scrollTop;
//     // let wih = window.innerHeight;
//     let val = ((100 * scrollHeight) / blockHeight);
//   }, 1)
//
//   return (
//     <ProgressTest scroll={scroll + '%'}/>
//   )
// }

export const ProgressTest = styled.div<{ scroll }>`
  position:  absolute;
  background:  linear-gradient(
    to right,
    rgba(250, 224, 66, .8) ${props => props.scroll},
    transparent  0);
  width:  100%;
  height:  4px;
  z-index:  3;
`


export default memo(FabricSelector);