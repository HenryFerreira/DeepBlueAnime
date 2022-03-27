//-----------------------------------------------//
import { AnimeCard } from "../AnimeCard/AnimeCard"
import { useDrawer } from "../../hooks/useDrawer";
//-----------------------------------------------//

//-----------------------------------------------//
//Componente que devuelve una lista de animes
export const AnimeScreen = () => {
    const { animeList, nameList } = useDrawer();

    return (
        <div className="anime_wrapper">
            <h3>{nameList}</h3>
            <div className="container_card">
                {
                    animeList.map((anime, idx) => {
                        return (
                            <AnimeCard key={idx} {...anime} />
                        )
                    })
                }
            </div>
        </div>
    )
}
//-----------------------------------------------//