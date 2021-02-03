import * as React from "react"
import {useDispatch, useSelector} from "react-redux"
import {RootState} from "../../../redux/store"
import {Container} from "../../Grid"
import useOutsideClicked from "../../_hooks/useOutsideClick"
import {
  Loader, ColRed, ModalClose, ModalHead, ModalTitle, RowRed,
  SCCollectibleSelector, ScrollView, TransparentCover
} from "./CollectibleSelector.sc"
import axios from "axios"
import {AModal, AModalCollection} from "../../../constants/actions"
import SimpleProductPolaroid from "../../_reusables/SimpleProductPolaroid"


const target = 'modalCollectibles'


const CollectibleSelector = () => {

  const dispatch = useDispatch();

  const ref = React.useRef(null)
  const [touched, setTouched] = React.useState(false)
  // const [productId, setProductId] = React.useState(null)
  const productId = useSelector((state: RootState) => state.product.entity.id)

  useOutsideClicked(ref, () => {
    dispatch({
      type: AModal.CLOSE,
      payload: {target}
    })
  })

  const {modalCollectibles, collection, collectibles, id} = useSelector((state: RootState) => ({
    modalCollectibles: state.modals.modalCollectibles,
    collectibles: state.modalCollectibles.entities,
    collection: state.product.entity.collection,
    id: state.product.entity.id
  }));

  // const sanitizedCollectibles = collectibles;
  const sanitizedCollectibles = React.useMemo(() => {
    return Object.keys(collectibles)
      .map((key) => {
        return collectibles[key]
      })
      .filter((c) => {
        return c.id !== id
      })
  }, [collectibles])

  const {loading, loaded, shown} = modalCollectibles
  const {name, count} = collection


  if (count - 1 < 1) return null


  React.useEffect(() => {
    if (loading && shown) {

      if (!touched) setTouched(true)

      axios.get(`http://130.193.62.149:8080/wp-json/rest/v3/product/${id}/collections`)
        .then((response) => {

          console.log('response', response);
          const {status, data} = response;

          // setProductId(id)
          if (status === 200) {
            dispatch({
              type: AModalCollection.FETCH_SUCCESS,
              payload: {target, loaded: true, loading: false, data}
            })
          } else {
            dispatch({
              type: AModalCollection.FETCH_ERROR,
              payload: {target, loaded: false, loading: false}
            })
          }
        })
        .catch(() => {
          dispatch({
            type: AModalCollection.FETCH_ERROR,
            payload: {target, loaded: false, loading: false,}
          })
        })
    }
  }, [loading, shown, touched, id])


  return (
    <>
      <TransparentCover active={shown}/>
      <SCCollectibleSelector active={shown} touched={touched} ref={modalCollectibles ? ref : null} duration="0.2s">

        <ModalClose
          onClick={() => {
            if (shown) dispatch({type: AModal.CLOSE, payload: {target}})
          }}
        />

        <ModalHead>
          <ModalTitle>Коллекция {name}</ModalTitle>
        </ModalHead>

        {loading ? <Loader/> :
          loaded && sanitizedCollectibles.length > 0 ?
            <ScrollView>
              <Container>
                <RowRed>
                  {sanitizedCollectibles.map((c, i) => {
                    console.log(sanitizedCollectibles);
                    const {slug, thumbnail, name, subtitle, regular_price} = c;

                    if (!slug) return <div>EMPTY</div>

                    return (
                      <ColRed xs={6} key={i}>
                        <SimpleProductPolaroid
                          data={{
                            image: thumbnail ? thumbnail.w300 : 'null',
                            title: name,
                            subtitle: subtitle,
                            url: `/product/${slug}`,
                            price: regular_price
                          }}
                          options={{
                            innerIndent: 10
                          }}
                        />
                      </ColRed>
                    )
                  })}
                </RowRed>
              </Container>
            </ScrollView> :
            <div>Retry</div>
        }

      </SCCollectibleSelector>
    </>
  );
};


export default CollectibleSelector;