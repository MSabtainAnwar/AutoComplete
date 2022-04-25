import React from "react";
// style
import "../../style/css/style.css";
// Components
import AutoComplete from "../../components/AutoComplete";
// countries-data
import countryData from "../../config/config.json";
const countries = countryData.countries;

export default function ReactAutoComplete() {
  return (
    <>
      <AutoComplete countryData={countries} />
    </>
  );
}
