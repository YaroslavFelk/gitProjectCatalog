import * as React from "react"
import Flickity from "react-flickity-component";
import {
  GallerySlide,
  GalleryWrapper,
  ImageWrapper,
  Thumb,
  ThumbOuter, ThumbSlide,
  ThumbsWrapper,
  ThumbWrapper
} from "./ModalProductGallery.sc";
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";


const ModalProductGallery = () => {

  const {general_image, gallery} = useSelector((state:RootState) => state.modalProduct.variation)
  const {name, subtitle} = useSelector((state:RootState) => state.modalProduct.entity)

  const images = [general_image.w400, ...gallery.map((g) => g.w400)];

  const [active, setActive] = React.useState(0)
  let refGallery = null, refThumbs = null;

  React.useEffect(() => {
    refGallery ? refGallery.on('settle', (index) => {
      setActive(index)
    }) : null

    refThumbs ? refThumbs.on('staticClick', (e, p, c, index) => {
      if (index !== undefined) {
        setActive(index)
      }
    }) : null
  }, [images])


  const flickityOptions = {
    prevNextButtons: false,
    pageDots: false,
    initialIndex: active,
    selectedAttraction: 0.2,
    friction: 0.8
  }
  const flickityThumbOptions = {
    prevNextButtons: false,
    pageDots: false,
    asNavFor: '.product-gallery',
    initialIndex: active,
    contain: true,
    draggable: false,
  }


  return (
    <GalleryWrapper>
      <Flickity
        className={'product-gallery'}
        elementType={'div'}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        flickityRef={r => {
          refGallery = r
        }}
      >
        {images.map((image, index) =>
          <GallerySlide key={index}>
            <ImageWrapper>
              <img loading="lazy"
                   src={image}
                   alt={`${name} - ${subtitle.toLowerCase()}`}
                   title={`${name} - ${subtitle.toLowerCase()}`}
              />
            </ImageWrapper>
          </GallerySlide>
        )}
      </Flickity>

      <ThumbsWrapper>
        <Flickity
          className={'product-thumbs'}
          elementType={'div'}
          options={flickityThumbOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          flickityRef={r => {
            refThumbs = r
          }}
        >
          {images.map((image, index) =>
            <ThumbSlide key={index}>
              <ThumbWrapper>
                <ThumbOuter>
                  <Thumb
                    loading="lazy"
                    src={image}
                    alt={`${name} - ${subtitle.toLowerCase()}`}
                  />
                </ThumbOuter>
              </ThumbWrapper>
            </ThumbSlide>
          )}
        </Flickity>
      </ThumbsWrapper>

    </GalleryWrapper>
  );
};





export default ModalProductGallery;