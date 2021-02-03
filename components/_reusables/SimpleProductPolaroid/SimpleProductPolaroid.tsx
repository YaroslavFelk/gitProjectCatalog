import * as React from "react"
import {formatPrice, formatSubtitle} from "../../../utils"
import Link from "next/link"
import {
  PolaroidCard, Snapshot, SnapshotInner, SnapshotOuter, SnapshotPrice, SnapshotPrices,
  SnapshotRegularPrice, SnapshotSubtitle, SnapshotTitle
} from "./SimpleProductPolaroid.sc"
import {assignDefault} from "react-use-gesture/dist/utils/utils";
import {AModalCollection} from "../../../constants/actions";
import {useDispatch} from "react-redux";


interface ISimpleProductPolaroid {
  data: {
    image: string;
    title: string;
    subtitle: string | string[];
    url?: string;
    price: number;
    regularPrice?: number;
  };
  options?: {
    innerIndent?: number;
  };
}


const defaultOptions = {
  innerIndent: 15,
}


const SimpleProductPolaroid = ({data, options}: ISimpleProductPolaroid) => {

  const dispatch = useDispatch();
  const assembledOptions = {...defaultOptions, ...options}
  console.log('shit', data);
  const {image, title, subtitle, url, price, regularPrice} = data

  if (!image || !title || !price) return null;

  return (
    <PolaroidCard
      innerIndent={assembledOptions.innerIndent}
      onClick={() => {
        dispatch({
          type: AModalCollection.RESET,
          payload: {target: 'modalCollectibles', loaded: false, loading: true, shown: false, data: {}}
        })
      }}
    >
      <Link href={url ? url : '/'} passHref>
        <a>
          <SnapshotOuter>
            <SnapshotInner title={title}>
              <Snapshot src={image} alt={title}/>
            </SnapshotInner>
          </SnapshotOuter>

          <SnapshotTitle>{title}</SnapshotTitle>
          <SnapshotSubtitle>{subtitle ? formatSubtitle(subtitle) : null}</SnapshotSubtitle>

          <SnapshotPrices>
            <SnapshotPrice>{formatPrice(price)}</SnapshotPrice>
            {regularPrice ? <SnapshotRegularPrice>{formatPrice(regularPrice)}</SnapshotRegularPrice> : null}
          </SnapshotPrices>
        </a>
      </Link>
    </PolaroidCard>
  )
}


export default SimpleProductPolaroid;