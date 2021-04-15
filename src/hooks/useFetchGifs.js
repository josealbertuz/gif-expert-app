import {useEffect, useState} from "react";
import {fetchGifs} from "../helpers/fetchGifs";


export const useFetchGifs = (query) => {

    const [state, setState] = useState({
        data : [],
        loading : true
    });

    useEffect(() => {

        fetchGifs(query)
            .then(gifs => setState({
                data : gifs,
                loading : false
            }));
        }, [query])


    return state;
}
