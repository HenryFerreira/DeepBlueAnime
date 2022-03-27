//-----------------------------------------------//
//Imports
import { useDetailAnime } from "../../hooks/useDetailAnime";
//-----------------------------------------------//

//-----------------------------------------------//
//Componente que devuelve la miniatura de un anime favorito
export const FavoriteCard = (favorite) => {
    const { handleNameAndDate } = useDetailAnime();

    return (
        <div
            onClick={() => handleNameAndDate(favorite.name, favorite.start_date, favorite.id)}
            className="favorite_card"
            style={{ marginTop: "20px" }}
        >
            <div className="favorite_img">
                <img src={favorite.img} alt="img_favorite" />
            </div>
            <div className="favorite_text">
                <h2>{favorite.name}</h2>
            </div>
        </div>
    )
}
//-----------------------------------------------//