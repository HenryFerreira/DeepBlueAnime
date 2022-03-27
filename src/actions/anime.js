//-----------------------------------------------//
//Imports
import { animeStreamingServices } from '../services/animeStreaming';
import { types } from '../types/types';
//-----------------------------------------------//

//-----------------------------------------------//
//Servicios a utilizar
const {
    getTop,
    getGenre,
    getCharactersStaff,
    getPictures,
    getVideos,
    getEpisodes,
    getNews,
    getMoreInfo,
    getSearchAnimeByName
} = animeStreamingServices();
//-----------------------------------------------//

//-----------------------------------------------//
//Comportamiento de getTop
const actGetTop = (tier) => async (dispatch) => {
    try {
        const res = await getTop(tier);
        const { top } = res.data;
        dispatch({
            type: types.getListTopAnimes,
            payload: top
        });
    } catch (e) {
        console.log(e)
    }
}
//-----------------------------------------------//

//-----------------------------------------------//
//Comportamiento de getGenre
const actGetGenre = (type) => async (dispatch) => {
    try {
        const res = await getGenre(type);
        const { results } = res.data;
        dispatch({
            type: types.getListWithGenre,
            payload: results
        });
    } catch (e) {
        console.log(e)
    }
}
//-----------------------------------------------//

//-----------------------------------------------//
//Comportamiento de getCharactersStaff
const actGetCharactersStaff = (animeId) => async (dispatch) => {
    try {
        const res = await getCharactersStaff(animeId);
        const { characters, staff } = res.data;

        //-----------------------------------------------//
        //Limite de busquedas
        const charactersLimit = characters.slice(0, 40);
        const staffLimit = staff.slice(0, 40);
        //-----------------------------------------------//

        dispatch({
            type: types.getlistCharactersStaff,
            payload: {
                charactersLimit,
                staffLimit,
            }
        });
    } catch (e) {
        console.log(e)
    }
}
//-----------------------------------------------//

//-----------------------------------------------//
//Comportamiento de getPictures
const actGetPictures = (animeId) => async (dispatch) => {
    try {
        const res = await getPictures(animeId);
        const { pictures } = res.data;
        dispatch({
            type: types.getListPictures,
            payload: pictures
        });
    } catch (e) {
        console.log(e)
    }
}
//-----------------------------------------------//

//-----------------------------------------------//
//Comportamiento de getVideos
const actGetVideos = (animeId) => async (dispatch) => {
    try {
        const res = await getVideos(animeId);
        const { promo } = res.data;
        dispatch({
            type: types.getListVideos,
            payload: promo
        });
    } catch (e) {
        console.log(e)
    }
}
//-----------------------------------------------//

//-----------------------------------------------//
//Comportamiento de getEpisodes
const actGetEpisodes = (animeId) => async (dispatch) => {
    try {
        const res = await getEpisodes(animeId);
        const { episodes } = res.data;
        dispatch({
            type: types.getListEpisodes,
            payload: episodes
        });
    } catch (e) {
        console.log(e)
    }
}
//-----------------------------------------------//

//-----------------------------------------------//
//Comportamiento de getNews
const actGetNews = (animeId) => async (dispatch) => {
    try {
        const res = await getNews(animeId);
        const { articles } = res.data;
        dispatch({
            type: types.getListNews,
            payload: articles
        });
    } catch (e) {
        console.log(e)
    }
}
//-----------------------------------------------//

//-----------------------------------------------//
//Comportamiento de gerMoreInfo
const actGetMoreInfo = (animeId) => async (dispatch) => {
    try {
        const res = await getMoreInfo(animeId);
        const { moreinfo } = res.data;
        dispatch({
            type: types.getMoreInfo,
            payload: moreinfo
        });
    } catch (e) {
        console.log(e)
    }
}
//-----------------------------------------------//

//-----------------------------------------------//
//Comportamiento de getSearchAnimeByName
const actGetSearchAnimeByName = (animeName) => async (dispatch) => {
    try {
        const res = await getSearchAnimeByName(animeName);
        const { results } = res.data;
        dispatch({
            type: types.getSearchAnime,
            payload: results
        });
    } catch (e) {
        console.log(e)
    }
}
//-----------------------------------------------//

//-----------------------------------------------//
//Comportamiento de getNameAndDate
const actGetNameAndDate = (name, date, id) => (dispatch) => {
    dispatch({
        type: types.getNameAndDate,
        payload: {
            name,
            date,
            id,
        }
    });
}
//-----------------------------------------------//

//-----------------------------------------------//
//Comportamiento de getTitleOfListAnime
const actGetNameList = (name) => (dispatch) => {
    dispatch({
        type: types.getTitleOfListAnime,
        payload: name
    });
}
//-----------------------------------------------//

//-----------------------------------------------//
//Comportamiento de getClearAllDetail
const actgetClearAllDetail = () => (dispatch) => {
    dispatch({
        type: types.getClearAllDetail,
    });
}
//-----------------------------------------------//

//-----------------------------------------------//
//Comportamiento de getAddAnimeFavorite
const actGetAddAnimeFavorite = (id, img, name, date) => (dispatch) => {
    const anime = {
        id: id,
        img: img,
        name: name,
        date: date,
    }
    dispatch({
        type: types.getAddAnimeFavorite,
        payload: anime
    });
}
//-----------------------------------------------//

//-----------------------------------------------//
//Comportamiento de getRemoveAnimeFavorite
const actGetRemoveAnimeFavorite = (id) => (dispatch) => {
    dispatch({
        type: types.getRemoveAnimeFavorite,
        payload: id
    });
}
//-----------------------------------------------//

//-----------------------------------------------//
//Exports
export const animeActions = () => {
    return {
        actGetTop,
        actGetGenre,
        actGetCharactersStaff,
        actGetPictures,
        actGetVideos,
        actGetEpisodes,
        actGetNews,
        actGetMoreInfo,
        actGetSearchAnimeByName,
        actGetNameAndDate,
        actGetNameList,
        actgetClearAllDetail,
        actGetAddAnimeFavorite,
        actGetRemoveAnimeFavorite,
    }
}
//-----------------------------------------------//