import React from 'react';
import SearchBar from "material-ui-search-bar";
import { useState } from 'react';


export default function Searchbar() {

    const [finalQuery, setQuery] = useState("");
  
  
      return(
          <SearchBar              
            value={finalQuery}
            onChange={(newValue) => setQuery(newValue)}
            onRequestSearch={() => (console.log(finalQuery))}
          />
      )
  }