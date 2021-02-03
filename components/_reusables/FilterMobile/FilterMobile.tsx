import * as React from 'react';
import {FilterBlock, MobilaAccept, MobileBlock, MoBileButton, MobileClose} from "./FilterMobile.sc";
import {BREAKPOINTS_NUMBERS} from "../../../constants/breakpoints";
import {setBobyClassnameFixed} from "../../../utils";

const FilterMobile = ({openFilter, setOpenFilter, children, isMobile, acceptIsActive = false }) => {
  const ref = React.useRef(null) as React.MutableRefObject<HTMLInputElement>;
  const [firstOpen, setFirstOpen] = React.useState(true)
  React.useEffect(() => {
    window.addEventListener('resize',  () => {
      if (window.innerWidth > BREAKPOINTS_NUMBERS.MD) {
        document.body.className = ''
      }
    })
  }, [])

  React.useEffect( () => {
    firstOpen && openFilter ? setFirstOpen(false) : null
  }, [openFilter])

  function closeFilter() {
    setOpenFilter(false)
    setBobyClassnameFixed()
  }

  return (
    <FilterBlock ref={ref} active={openFilter} firstOpen={firstOpen}

       onClick={(e) =>  {
        if (isMobile && ref.current === e.target) {
          closeFilter()
        }
    }}>
      <MoBileButton openFilter={openFilter}>
        <MobilaAccept onClick={closeFilter} isChanged={acceptIsActive}/>
        <MobileClose onClick={closeFilter} />
      </MoBileButton>

      <MobileBlock openFilter={openFilter}>
        {children}
      </MobileBlock>
    </FilterBlock>
  );
};



export default FilterMobile;