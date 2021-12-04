import React from "react";
import {API_URL} from "../CONST";

export const searchTermAutoCompletion = (searchTerm="Austin", resetHint) => {
    // return fetch(`${API_URL}/search_auto_completion/${searchTerm}`)
    //     .then(res=>["111", "aaa"])
    //     .catch(e=>["222", "bbb"])

    if (searchTerm===""){
        resetHint([]);
    } else {
        fetch(`${API_URL}/autocomplete/restaurant/${searchTerm}`)
            .then(res=>res.json())
            .then(response=>{
                resetHint(response.map(hint=>hint.text));
            })
            .catch((e)=>{
                resetHint([]);
            });
    }



    // return []

}
