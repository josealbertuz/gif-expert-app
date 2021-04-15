import React, {useState} from 'react';
import SearchGif from "./components/SearchGif";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

    const [queryies, setQueries] = useState(['Shingeki no Kyojin']);

    return (
        <>
            <h2>Gif Expert App</h2>
            <SearchGif setAnimes={setQueries}/>
            <hr/>
            <ol>
                {
                    queryies.map((query) => <GifGrid query={query} key={query}/>)
                }
            </ol>
        </>
    );
}


export default GifExpertApp;
