//-----------------------------------------------//
//Imports 
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { animeActions } from "../actions/anime";
//-----------------------------------------------//

//-----------------------------------------------//
//Hook
export const useDrawer = () => {

    //-----------------------------------------------//
    //Consumo de servicios
    const dispatch = useDispatch();

    const {
        animeList,
        nameList
    } = useSelector(state => state.animeStreaming);

    const {
        actGetTop,
        actGetGenre,
        actGetNameList
    } = animeActions();
    //-----------------------------------------------//

    //-----------------------------------------------//
    //Funcionalidades del componente drawer
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 300) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 300) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    const handleAnimeList = (tier, name) => {
        dispatch(actGetTop(tier));
        dispatch(actGetNameList(name));
    };

    useEffect(() => {
        if (animeList.length === 0) {
            dispatch(actGetNameList("TV"));
            dispatch(actGetTop("tv"));
        }
    }, []);

    const handleAnimeByGenre = (type, name) => {
        dispatch(actGetGenre(type));
        dispatch(actGetNameList(name));

    }
    //-----------------------------------------------//

    return {
        click,
        handleClick,
        closeMobileMenu,
        dropdown,
        onMouseEnter,
        onMouseLeave,

        animeList,
        nameList,

        handleAnimeList,
        handleAnimeByGenre,
    }
}
//-----------------------------------------------//
