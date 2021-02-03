import React from 'react';
import VariatorTerm from "../VariatorTerm";
import OptionRound from "../../OptionRound/OptionRound";

const VariatorTaxonomy = ({taxonomy_slug, taxonomy_name, taxonomy_options, active_term}) => {
  return (
    <div>
      {taxonomy_name}
      <div>
        {
          taxonomy_options.map((to) => {
            console.log(to);
            if(taxonomy_slug === 'pa_fabric')
              return <OptionRound key={to.term_slug} active={active_term === to.term_slug} name={to.term_name}/>
            return <VariatorTerm key={to.term_slug} active={active_term === to.term_slug}>{to.term_name}</VariatorTerm>
          })
        }
      </div>
    </div>
  );
};

export default VariatorTaxonomy;