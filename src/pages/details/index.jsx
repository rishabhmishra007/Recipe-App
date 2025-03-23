import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import GlobalContext from "../../context";

const Details = () => {
  const params = useParams();

  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleAddToFavorite,
    favoritesList,
  } = useContext(GlobalContext);

  useEffect(() => {
    const getRecipeDetails = async () => {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`
      );
      const data = await res.json();
      // console.log(data);
      if (data?.data) {
        setRecipeDetailsData(data?.data?.recipe);
      }
    };
    getRecipeDetails();
  }, []);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailsData?.image_url}
            alt="yele photo"
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetailsData?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipeDetailsData?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavorite(recipeDetailsData)}
            className="text-sm p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block 
        shadow-md bg-black text-white cursor-pointer"
          >
            {favoritesList && favoritesList.length > 0 && favoritesList.findIndex(
              (item) => item.id === recipeDetailsData?.id
            ) !== -1
              ? "Remove from favorites"
              : "Add to favorites"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients:{" "}
          </span>
          <ul className="flex flex-col gap-3">
            {recipeDetailsData?.ingredients.map((item, index) => (
              <li key={index}>
                <span className="text-xl font-medium text-black">
                  {item.quantity} {item.unit}
                </span>
                <span className="text-xl font-medium text-black">
                  &nbsp;{item.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
