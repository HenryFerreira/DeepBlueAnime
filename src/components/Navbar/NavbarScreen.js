//-----------------------------------------------//
//Imports
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearchAnime } from "../../hooks/useSearchAnime";
import { SearchWindow } from "./SearchWindow";
//-----------------------------------------------//

//-----------------------------------------------//
//Componente que devuelve la barra de navegacion
export const NavbarScreen = () => {
    const {
        animeName,
        handleInputChange,
        showSearchDiv,
        onMouseEnterSearch,
        onMouseLeaveSearch,
    } = useSearchAnime();

    return (
        <div
            className="search-toggle">
            <input
                onFocus={onMouseEnterSearch}
                onBlur={onMouseLeaveSearch}

                type="text"
                placeholder="Buscar..."
                name="animeName"
                onChange={handleInputChange}
                value={animeName}
                autoComplete="off"
            />
            <i>
                <FontAwesomeIcon icon={faSearch} />
            </i>
            {
                (showSearchDiv && animeName.length > 3) && <SearchWindow />
            }
        </div>
    )
}
//-----------------------------------------------//