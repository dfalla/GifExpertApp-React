export const getGifs = async(personaje) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=AxUUI55KKjVxmMnMtj1L1DpmqtRELFM2&q=${personaje}&limit=10`;

    const resp = await fetch(url);

    const {data} = await resp.json();

    const gifs = data.map((img)=>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;

}