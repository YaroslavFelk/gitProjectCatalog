import * as React from "react"
import {formatPrice, formatSubtitle} from "../../../utils";
import Link from "next/link";
import {
  PolaroidCard,
  Snapshot, SnapshotInner,
  SnapshotOuter,
  SnapshotPrice,
  SnapshotPrices, SnapshotRegularPrice,
  SnapshotSubtitle, SnapshotTitle
} from "./SimpleProductPolaroid.sc";


interface ISimpleProductPolaroid {
  data: {
    name: string,
    subtitle: Array<string> | string,
    slug?: string,
    price: number,
    image: string,
    regularPrice?: number;
  };
  options?: any;
}

const defaultOptions = {
  innerIndent: 15,
}

const SimpleProductPolaroid = ({item, options}: any) => {

  if (!item) return null

  const assembledOptions = {...defaultOptions, ...options}
  // const {name, subtitle, slug, price, image, regularPrice} = data
  console.log(item)
  return (
          <div></div>
    // <PolaroidCard innerIndent={assembledOptions.innerIndent}>
    //   <Link href={slug ? `/product/${slug}` : '/'} passHref>
    //     <a>
    //       <SnapshotOuter>
    //         <SnapshotInner title={name}>
    //           <Snapshot src={image} alt={name}/>
    //         </SnapshotInner>
    //       </SnapshotOuter>
    //
    //       <SnapshotTitle>{name}</SnapshotTitle>
    //       <SnapshotSubtitle>{subtitle ? formatSubtitle(subtitle) : null}</SnapshotSubtitle>
    //
    //       <SnapshotPrices>
    //         <SnapshotPrice>{formatPrice(price)}</SnapshotPrice>
    //         {regularPrice ? <SnapshotRegularPrice>{formatPrice(regularPrice)}</SnapshotRegularPrice> : null}
    //       </SnapshotPrices>
    //     </a>
    //   </Link>
    //
    // </PolaroidCard>
  )
}




export default SimpleProductPolaroid;