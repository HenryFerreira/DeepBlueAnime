//-----------------------------------------------//
//Imports
import axios from '../config';
//-----------------------------------------------//

//-----------------------------------------------//
//Servicios a utilizar
export const animeStreamingServices = () =>{

    //-----------------------------------------------//
    //Obtiene los animes que estan en el top de visitas
    const getTop =(tier)=>{
        return axios({
            method: 'GET',
            url: `/top/anime/1/${tier}`,
        })
    }
    //-----------------------------------------------//

    //-----------------------------------------------//
    //Obtiene el anime dependeindo de su genero
    const getGenre =(type)=>{
        return axios({
            method: 'GET',
            url: `search/anime?genre=${type}`,
        })
    }
    //-----------------------------------------------//

    //-----------------------------------------------//
    //Obtiene los personajes y los actores de vos
    const getCharactersStaff  =(animeId)=>{
        return axios({
            method: 'GET',
            url: `/anime/${animeId}/characters_staff`,
        })
    }
    //-----------------------------------------------//

    //-----------------------------------------------//
    //Obtiene la imagen de un anime
    const getPictures  =(animeId)=>{
        return axios({
            method: 'GET',
            url: `/anime/${animeId}/pictures`,
        })
    }
    //-----------------------------------------------//

    //-----------------------------------------------//
    //Obtiene los videos relacionados con un anime
    const getVideos  =(animeId)=>{
        return axios({
            method: 'GET',
            url: `/anime/${animeId}/videos`,
        })
    }
    //-----------------------------------------------//

    //-----------------------------------------------//
    //Obtiene los epusodios de un anime
    const getEpisodes  =(animeId)=>{
        return axios({
            method: 'GET',
            url: `/anime/${animeId}/episodes`,
        })
    }
    //-----------------------------------------------//

    //-----------------------------------------------//
    //Obtiene las noticias relacionadas con un anime
    const getNews =(animeId)=>{
        return axios({
            method: 'GET',
            url: `/anime/${animeId}/news`,
        })
    }
    //-----------------------------------------------//

    //-----------------------------------------------//
    //Obtiene las recomendaciones relacionadas con un anime
    const getMoreInfo =(animeId)=>{
        return axios({
            method: 'GET',
            url: `/anime/${animeId}/moreinfo`,
        })
    }
    //-----------------------------------------------//

    //-----------------------------------------------//
    //Obtiene los animes por el nombre
    const getSearchAnimeByName =(animeName)=>{
        return axios({
            method: 'GET',
            url: `search/anime?q=${animeName}&limit=5`,
        })
    }
    //-----------------------------------------------//

    return{
        getTop,
        getGenre,
        getCharactersStaff,
        getPictures,
        getVideos,
        getEpisodes,
        getNews,
        getMoreInfo,
        getSearchAnimeByName,
    }
}
//-----------------------------------------------//