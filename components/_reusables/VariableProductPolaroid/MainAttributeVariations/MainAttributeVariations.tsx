import React from 'react';
import {MobileOptions, MobileSelect, VariationsBlock, VariationsItem} from "../VariableProductPolaroid.sc";
import {attributesSort, getFun} from "../../../CatalogPage/CatalogPageFunctions";
import useOutsideClicked from "../../../_hooks/useOutsideClick";
import {MainAttributeVariationsStyle} from "./MainAttributeVariations.sc";
import useResizeListener from "../../../_hooks/useResizeListener";

const MainAttributeVariations = ({activeVariation, variation , isActiveAttribute, existingAttributes, changeActiveVariations}) => {
  const [active, setActive] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(false)
  const ref = React.useRef(null);
  useOutsideClicked(ref, () => {
    setActive(false);
  });
  useResizeListener(767, setIsMobile)

  return <MainAttributeVariationsStyle ref={ref} >
    <MobileSelect active={active} onClick={() => setActive(!active)}>
      <svg width="6" height="4" viewBox="0 0 6 4"  xmlns="http://www.w3.org/2000/svg">
        <path d="M3.49704 3.3123L5.93121 0.883186C6.02284 0.791733 6.02298 0.643339 5.93155 0.551733C5.84012 0.460104 5.69173 0.459952 5.6001 0.551381L3.16575 2.98067C3.07437 3.07205 2.92568 3.07205 2.83412 2.98049L0.399952 0.551381C0.308323 0.459952 0.159928 0.460104 0.0684986 0.551733C0.0228424 0.597471 2.67029e-05 0.657389 2.67029e-05 0.717284C2.67029e-05 0.777342 0.0229716 0.837401 0.0688505 0.883186L2.50285 3.31212C2.77699 3.58627 3.22307 3.58627 3.49704 3.3123Z"/>
      </svg>
      {activeVariation.variation_attributes.find(attr =>  attr.taxonomy_slug === variation.taxonomy_slug)?.term_name}
    </MobileSelect>
    <MobileOptions active={active}>
      {variation.taxonomy_options.sort(attributesSort).map(option =>
              <VariationsItem
                      key={option.term_slug}
                      active={isActiveAttribute(option.term_slug, activeVariation)}
                      isExist={existingAttributes
                              .find(attr => attr.taxonomy_slug === variation.taxonomy_slug)?.taxonomy_options?.includes(option.term_slug)}
                      onClick={() => {
                        changeActiveVariations(variation.taxonomy_slug, option, activeVariation)
                        setActive(false)
                      }}
              >
                {option.term_name}
              </VariationsItem>
      )}
    </MobileOptions>
  </MainAttributeVariationsStyle>
};

export default MainAttributeVariations;
