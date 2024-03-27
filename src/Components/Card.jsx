import React from "react";
import { useContextGlobal } from "./utils/global.context";
import MyLink from "./MyLink";

const Card = ({ item }) => {
const { state, dispatch, favs } = useContextGlobal();
console.log(favs);

const addFav = () => {
    const esFav = state.favs.some((dentist) => dentist.id === item.id);

    if (esFav) {
      alert("Este doctor ya está en la lista de favoritos.");
    } else {
      dispatch({ type: "ADD_FAV", payload: item });
      alert("El doctor se agregó a tu lista.");
    }
  };

return (
  <div className="card">
    <img src="./public/images/doctor.jpg" alt="" />
    <MyLink to={"/detalle/" + item.id} name={item.name} />
    <h5>{item.username}</h5>
    <button onClick={addFav} className="favButton">
      ⭐
    </button>
  </div>
  );
};

export default Card;