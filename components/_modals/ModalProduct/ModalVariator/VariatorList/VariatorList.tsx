import * as React from 'react';
import VariatorListName from "../VariatorListName";
import VariatorItem from "../VariatorItem";
import {SCVariatorList} from "./VariatorList.sc";
import {IVariableAttribute} from "../../../../../types/IVariableAttribute";

const VariatorList = ({ parameters }: {parameters: IVariableAttribute; }): JSX.Element => {
  if (!parameters) return null;

  const { taxonomy_name, taxonomy_slug, taxonomy_options } = parameters;

    return (
        <SCVariatorList data-taxonomy={taxonomy_slug}>
            <VariatorListName value={taxonomy_name} />

            {taxonomy_options
                .sort((a, b) => a.term_name.length < b.term_name.length ? -1 : a.term_name.length > b.term_name.length ? 1 : a.term_name <= b.term_name ? -1 : 1)
                .map(( option, index ) =>
                    <VariatorItem
                        attribute={option}
                        taxonomy={taxonomy_slug}
                        key={index}
                    />
                )
            }
        </SCVariatorList>
    );
};



export default VariatorList;