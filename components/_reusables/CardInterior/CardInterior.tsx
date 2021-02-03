import * as React from "react"
import Link from "next/link"
import {Card, CardCarcass, CardWrapper, Image, Button} from "./CardInterior.sc"


const CardInterior = ({image, slug, lead = 'Перейти к интерьеру'}) => {
  return (
    <CardCarcass>
      <CardWrapper>
        <Card>
          <Image src={image} alt={slug}/>
          <Link href={`interior/${slug}`} passHref>
            <a>
              <Button>{lead}</Button>
            </a>
          </Link>
        </Card>
      </CardWrapper>
    </CardCarcass>
  )
}


export default CardInterior