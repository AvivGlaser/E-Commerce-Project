import React from "react";
import { ISearch } from "../../utils/interfaces";


export function Search(props: ISearch) {
  return (
    <div className="search-input">
      <h5>Looking for something?</h5>
      <br/>
      <input
        onChange={(e) => props.searchHandler(e)}
        className="form-control"
        placeholder="Search..."
      />
    </div>
  );
}
