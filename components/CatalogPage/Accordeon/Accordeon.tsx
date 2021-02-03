import * as React from "react"
import FilterSlider from "./FilterSlider";
import { useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import AccordeonFilter from "../../_reusables/AccordeonFilter";
import AccordeonCheckboxItem from "./AccordeonCheckboxItem";


const  Accordeon = ({filterItem}) => {
  const activeFilter= useSelector((state:RootState) => state.catalog.activeFilter)
  const activeFilterAttr = activeFilter.attributeFilter
  const activeAttribute = activeFilterAttr.find(attr => attr.taxonomy_slug === filterItem.taxonomy_slug)

  return (
          <AccordeonFilter
                  initialActive={filterItem.taxonomy_slug === 'pa_color'}
                  order={filterItem.taxonomy_slug === 'pa_color' ? '5' : '15'}
                  title={filterItem.taxonomy_name}
                  issetMore={filterItem.taxonomy_slug !== 'pa_color' && filterItem.values.length > 5 && activeAttribute.type === 'checkbox'}
                  count={filterItem.values.length - 5}
          >
            {{
              'checkbox': <AccordeonCheckboxItem filterItem={filterItem} activeAttribute={activeAttribute}/>,
              'range':
                      <FilterSlider
                              filterItem={filterItem}
                      />
            } [activeAttribute.type]}
          </AccordeonFilter>
  )
}



export default Accordeon