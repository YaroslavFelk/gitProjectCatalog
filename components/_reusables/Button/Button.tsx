import React from 'react';
import styled, {css} from "styled-components";
import Link from "next/link";


interface IButton {
  children: React.ReactNode;
  size?: 'large' | 'medium' | 'small' | 'xsmall';
  width?: 'full' | 'contain';
  theme?: 'light' | 'brand' | 'green';
  onClick?: () => void;
  palette?: IPalette;
  breakpoints?: IBreakpoints;
  href?: string | null;
  borderRadius?: [number, number, number, number] | [number, number, number] | [number, number] | [number]
}

interface IPalette {
  BACKGROUND_LIGHT?: string;
  BACKGROUND_DARK?: string;
  BACKGROUND_HOVER?: string;
  BACKGROUND_ACTIVE?: string;
  TEXT_DARK?: string;
  TEXT_LIGHT?: string;
  DIVIDER?: string;
}

interface IBreakpoints {
  TILL_LG?: string;
  TILL_MD?: string;
  TILL_SM?: string;
  TILL_XS?: string;
  FROM_LG?: string;
  FROM_MD?: string;
  FROM_SM?: string;
  FROM_XS?: string;
}


let _palette = {
  BACKGROUND_LIGHT: '#FFFFFF',
  BACKGROUND_DARK: '#0086A8',
  BACKGROUND_GREEN: '#5FD975',
  BACKGROUND_HOVER: '#007693',
  BACKGROUND_ACTIVE: '#00657E',
  TEXT_DARK: '#353238',
  TEXT_LIGHT: '#FFFFFF',
  DIVIDER: '#E3E3E3'
}

let _breakpoints = {
  TILL_LG: 'max-width: 1440px',
  TILL_MD: 'max-width: 1024px',
  TILL_SM: 'max-width: 768px',
  TILL_XS: 'max-width: 375px',
  FROM_LG: 'min-width: 1441px',
  FROM_MD: 'min-width: 1025px',
  FROM_SM: 'min-width: 769px',
  FROM_XS: 'min-width: 376px',
}


const Button = ({children, size = 'large', width = 'contain', theme = 'brand', onClick = null, palette = {}, breakpoints = {}, href = null, borderRadius = [3]}: IButton) => {

  return (
    <Carcass
      size={size}
      width={width}
      theme={theme}
      borderRadius={borderRadius}
      onClick={() => {
        onClick && onClick()
      }}
    >
      {href ? <Link passHref href={href}><a>{children}</a></Link> : children}
    </Carcass>
  );
};


const SizeExtraSmall = css`
  padding: 7px 8px;
`
const SizeSmall = css`
  padding: 6px 13px;
`
const SizeMedium = css`
  padding: 11px 18px;
`
const SizeLarge = css`
  padding: 16px 23px;
`
const WidthFull = css`
  width: 100%;
`
const WidthAuto = css`
  width: fit-content;
`
const ThemeLight = css`
  border-color: ${_palette.DIVIDER};
  background: ${_palette.BACKGROUND_LIGHT};
  color: ${_palette.TEXT_DARK};
  
  &:active {
    border-color: ${_palette.BACKGROUND_ACTIVE};
    background: ${_palette.BACKGROUND_ACTIVE};
    color: ${_palette.TEXT_LIGHT};
  }
  
  @media(${_breakpoints.FROM_MD}){
    &:hover {
      border-color: ${_palette.BACKGROUND_DARK};
      background: ${_palette.BACKGROUND_DARK};
      color: ${_palette.TEXT_LIGHT};
    }
    
    &:active {
      border-color: ${_palette.BACKGROUND_ACTIVE};
      background: ${_palette.BACKGROUND_ACTIVE};
      color: ${_palette.TEXT_LIGHT};
    }
  }
`
const ThemeGreen = css`
  border-color: ${_palette.BACKGROUND_GREEN};
  background: ${_palette.BACKGROUND_GREEN};
  color: ${_palette.TEXT_LIGHT};
`
const ThemeBrand = css`
  border-color: ${_palette.BACKGROUND_DARK};
  background: ${_palette.BACKGROUND_DARK};
  color: ${_palette.TEXT_LIGHT};
  
  &:active {
    border-color: ${_palette.BACKGROUND_ACTIVE};
    background: ${_palette.BACKGROUND_ACTIVE};
    color: ${_palette.TEXT_LIGHT};
  }
  
  @media(${_breakpoints.FROM_MD}){
    &:hover {
      border-color: ${_palette.BACKGROUND_HOVER};
      background: ${_palette.BACKGROUND_HOVER};
      color: ${_palette.TEXT_LIGHT};
    }
    
    &:active {
      border-color: ${_palette.BACKGROUND_ACTIVE};
      background: ${_palette.BACKGROUND_ACTIVE};
      color: ${_palette.TEXT_LIGHT};
    }
  }
`
const Carcass = styled.div<IButton>`
  font: normal normal 600 ${props => props.size === 'xsmall' ? '12' : '14'}px/1em 'Open-Sans', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: nowrap;
  user-select: none;
  background: ${_palette.BACKGROUND_LIGHT};
  border: 2px solid ${_palette.BACKGROUND_LIGHT};
  border-radius: ${props => props.borderRadius.reduce((acc, rad) => `${acc} ${rad}px`, '').trim()};
  text-align:center;
  cursor: pointer;
  transition: 0.1s;
  white-space: nowrap;
  ${props => props.size === 'small' ? SizeSmall : props.size === 'medium' ? SizeMedium : props.size === 'xsmall' ? SizeExtraSmall : SizeLarge}
  ${props => props.width === 'full' ? WidthFull : WidthAuto}
  ${props => {switch(props.theme){
    case 'light': return ThemeLight
    case 'brand': return ThemeBrand
    case 'green': return ThemeGreen
    default: return ThemeBrand
  }}}
`


export default Button;