import * as React from "react"
import {Heading} from "./HeadingPage.sc"


interface IHeading {
  children: string;
  size?: 'large' | 'medium' | 'small';
  transform?: 'uppercase' | 'capitalize' | 'lowercase' | 'default' | 'firstCapital'
}


const HeadingPage = ({children, size = 'large', transform = 'default'}: IHeading) => {

  if( !children ) return null;

  const title = ((text, transform) => {
    let title = '';
    switch(transform){
      case 'uppercase': {
        title = text
          .trim()
          .toLocaleUpperCase()
        break
      }
      case 'capitalize': {
        title = text
          .trim()
          .toLocaleLowerCase()
          .replace(/[\wа-яА-Я]\S*/g, (w) => (
            w.replace(/^[\wа-яА-Я]/, (c) => c.toUpperCase())
          ))
        break
      }
      case 'lowercase': {
        title = text
          .trim()
          .toLocaleLowerCase()
        break
      }
      case 'firstCapital': {
        text = text
          .trim()
          .toLocaleLowerCase()
        title = text.charAt(0).toUpperCase() + text.slice(1)
        break
      }
      default:
        title = text
    }
    return title
  })(children, transform)

  return (
    <Heading size={size}>
      {title}
    </Heading>
  )
}


export default React.memo(HeadingPage)
