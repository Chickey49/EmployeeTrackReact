import React, { useState } from "react";
import API from "./API";


export default function Search(props) {

    return (
        <div>
            <input type='text' placeholder='search' onChange={props.handleSearch}></input>
        </div>
    )
}

