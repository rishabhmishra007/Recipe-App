import React, { useContext } from "react";
import RecipeItem from "../../components/recipe-item";
import GlobalContext from "../../context";

const Favorites = () => {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item, index) => <RecipeItem key={index} item={item} />)
      ) : (
        <h1 className="lg:text-4xl text-xl text-center text-black font-extrabold">
          Nothing is added.
        </h1>
      )}
    </div>
  );
};

export default Favorites;
