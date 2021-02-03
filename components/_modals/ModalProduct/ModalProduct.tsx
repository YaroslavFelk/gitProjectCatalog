import * as React from "react"
import {useDispatch, useSelector} from "react-redux"
import {RootState} from "../../../redux/store"
import useOutsideClicked from "../../_hooks/useOutsideClick"
import {
  ModalClose, ModalHead,
  SCCollectibleSelector, ScrollView, TransparentCover, Subtitle, Title
} from "./ModalProduct.sc"
import {AModal} from "../../../constants/actions"
import styled from "styled-components";
import {formatPrice, getMatchVariation} from "../../../utils";
import ModalProductGallery from "./ModalProductGallery";
import {Col, Container, Row} from "../../Grid";
import Button from "../../_reusables/Button";
import ProductAttribute from "../../PageProduct/ProductAttributes/ProductAttribute";
import ModalVariator from "./ModalVariator";
import {BasePrice, FabricDetails, FabricNotification, Price} from "../../PageProduct/ProductPrice/ProductPrice.sc";
import {IAttributeWithFabric} from "../../../types/IAttributeWithFabric";



const target = 'modalProduct'


const ModalProduct = () => {

  const dispatch = useDispatch();

  const ref = React.useRef(null)
  const [touched, setTouched] = React.useState(true)

  useOutsideClicked(ref, () => {
    dispatch({
      type: AModal.CLOSE,
      payload: {target}
    })
  })

  const product = useSelector((state:RootState) => state.modalProduct.entity)
  const variation = useSelector((state:RootState) => state.modalProduct.variation)
  const modal = useSelector((state:RootState) => state.modals[target])

  if (!Object.keys(variation).length) return null;

  const {shown} = modal
  const {id, slug, name, subtitle, static_attributes} = product


  return (
    <>
      <TransparentCover active={shown} onClick={() => shown && dispatch({type: AModal.CLOSE, payload: {target}})}/>
      <SCCollectibleSelector
        active={shown}
        touched={touched}
        ref={modal ? ref : null}
        duration="0.2s"
      >

        <ModalClose
          onClick={() => {
            if (shown) dispatch({type: AModal.CLOSE, payload: {target}})
          }}
        />

        <ModalHead>
          <div>
            <Title>{name}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </div>
        </ModalHead>
        <ScrollView>
          <Container>
            <Row>
              <Col xs={12}>
                <ModalProductGallery/>
              </Col>

              <Col xs={12}>
                <ModalPrice>
                  <ProductPrice />
                </ModalPrice>
              </Col>

              <Col xs={12}>
                <ModalVariatorWrapper>
                  <ModalVariator />
                </ModalVariatorWrapper>
              </Col>

              <Col xs={12}>
                <ModalAttributes>
                  {
                    static_attributes.map(sa => <ProductAttribute key={sa.taxonomy_slug} name={sa.taxonomy_name} value={sa.term_name} />)
                  }
                </ModalAttributes>
              </Col>

              <ModalAddToSet>
                <AddToSet onClick={() => { alert('add as set') }}>Добавить в комплект</AddToSet>
              </ModalAddToSet>
            </Row>
          </Container>

        </ScrollView>

      </SCCollectibleSelector>
    </>
  );
};


const AddToSet = ({children, onClick}) => {
  return (
      <Button width={'full'} onClick={onClick}>{children ? children : ''}</Button>
  )
}


const ProductPrice = () => {
  const price = useSelector((state:RootState) => state.modalProduct.variation.price)
  const fabric:IAttributeWithFabric = useSelector((state:RootState) => state.modalProduct.variation.variation_attributes.find((va) => va.taxonomy_slug === 'pa_fabric'))

  if (!price) return null;

  const basePrice = price
  let scaledPrice = price

  const rate = fabric?.details?.category?.rate ? fabric.details.category.rate : 1
  const name = fabric?.details?.category?.rate ? fabric.details.category.name : 1
  if(fabric){
    scaledPrice = price * ((100 + rate) / 100)
  }

  return (
    <PriceWrapper>
      <Price>{formatPrice(scaledPrice)}</Price>
      {
        fabric &&
        <FabricDetails style={{textAlign: 'right'}}>
          <FabricNotification>В ткани {name}-й категории</FabricNotification>
          <BasePrice>Базовая цена: {formatPrice(basePrice)}</BasePrice>
        </FabricDetails>
      }
    </PriceWrapper>
  )
}



const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ModalVariatorWrapper = styled.div`
  padding-top: 20px;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  margin-top: 20px;
`
const ModalPrice = styled.div`
  margin-top: 20px;
`
const ModalAttributes = styled.div`
  margin-top: 20px;
`

const ModalAddToSetPlaceholder = styled.div`
  width: 100%;
  position: relative;
  height: 80px;
`
const ModalAddToSet = styled.div`
  //position: fixed;
  //bottom: 30px;
  //width: 100%;
  //max-width: calc(100% - 110px);
  position: sticky;
  bottom: 10px;
  padding: 0 15px;
  margin: 30px 0 10px;
  width: 100%;
`
const Body = styled.div`
  flex: 1;
`


export default ModalProduct;