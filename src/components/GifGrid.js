import React from 'react';
import GifGridItem from "./GifGridItem";
import {useFetchGifs} from "../hooks/useFetchGifs";


const GifGrid = ({query}) => {

    const {data:gifs, loading} = useFetchGifs(query);

    return (
        <>
            <h2>{query}</h2>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            <div className="card-grid">
                {
                    gifs.map((gif) => <GifGridItem
                        key={gif.id}
                        {...gif}/>)
                }

            </div>
        </>

    );
}

export default GifGrid;
