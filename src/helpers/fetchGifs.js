export const fetchGifs = async (query) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=u2RRvBs8iKqwudzK7Xwv6VXzosjDiAxf&q=${encodeURI(query)}&limit=10`;

    const response = await fetch(url);

    const {data} = await response.json();

    return data.map((gifObject) => {
        return {
            id : gifObject.id,
            title : gifObject.title,
            url : gifObject.images.downsized_medium.url
        }
    });

}
