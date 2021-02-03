import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const Svg = styled(Icon)`
  width: 10px; 
  height: 10px;
`

export let BackModal = () => {
  return (
    <Svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0)">
        <path d="M0.482693 5.40213L9.59809 5.40213C9.8202 5.40213 10.0002 5.22197 10.0002 4.99997C10.0002 4.77797 9.82022 4.59781 9.59809 4.59781L0.482693 4.59781C0.26058 4.59781 0.0805387 4.77783 0.0805387 4.99997C0.0805387 5.2221 0.260561 5.40213 0.482693 5.40213Z" fill="#353238"/>
        <path d="M0.118184 5.28441L4.05913 9.2255C4.21624 9.38247 4.47066 9.38247 4.62777 9.2255C4.78488 9.06839 4.78488 8.8137 4.62777 8.65672L0.971147 4.99997L4.62777 1.3432C4.78488 1.18623 4.78488 0.931539 4.62777 0.774564C4.54922 0.696008 4.4464 0.65673 4.34345 0.65673C4.2405 0.65673 4.13768 0.696008 4.05913 0.774564L0.118184 4.71563C-0.0389285 4.87275 -0.0389285 5.12746 0.118184 5.28441Z" fill="#353238"/>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="10" height="10" fill="white" transform="translate(10.0002 10) rotate(-180)"/>
        </clipPath>
      </defs>
    </Svg>
  )
}
