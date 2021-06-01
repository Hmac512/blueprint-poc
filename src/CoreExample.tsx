import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Intent,
  Slider,
  KeyCombo,
  FormGroup, H5, InputGroup, Switch, Text, TextArea, MenuItem
} from "@blueprintjs/core";

import { Select } from "@blueprintjs/select";

import { Example } from "./Example";

import { filterFilm, renderFilm, IFilm, TOP_100_FILMS } from "./films";

const FilmSelect = Select.ofType<IFilm>();



export const CoreExample: React.FC = () => {

  const [film, setFilm] = useState<IFilm>(TOP_100_FILMS[0]);


  

  return (
    <Example header="Add Device Form">
    <FormGroup
                    inline={true}
                    label={"Device Name"}
                    labelFor="text-input"
                    labelInfo={"(required)"}
                >
                    <InputGroup id="text-input" placeholder="Name" disabled={false} />
                </FormGroup>
         <br />
    <FormGroup
                    inline={false}
                    label={"Description"}
                    labelFor="text-area"
                    labelInfo={"(required)"}
                >
                    <TextArea id="text-area" fill={true} />
                </FormGroup>
         <br />

    <FormGroup
                    inline={false}
                    label={"OEM"}
                    labelInfo={"(required)"}
                >
                    <FilmSelect
                        items={TOP_100_FILMS}
                        itemPredicate={filterFilm}
                        itemRenderer={renderFilm}
                        noResults={<MenuItem disabled={true} text="No results." />}
                        onItemSelect={setFilm}
                      >
                        <Button text={film.title} rightIcon="caret-down" />
                      </FilmSelect>
                </FormGroup>
         <br />


             <br />         
        <Button intent={Intent.PRIMARY} text="Submit" />
     
    </Example>
  );
};
