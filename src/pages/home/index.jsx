import React, { useContext } from "react";
import GlobalContext from "../../context";
import RecipeItem from "../../components/recipe-item/index.jsx";

const Home = () => {
  const { loading, recipeList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {loading ? (
        <h2>Loading...</h2>
      ) : recipeList && recipeList.length > 0 ? (
        recipeList.map((item, index) => <RecipeItem key={index} item={item} />)
      ) : (
        <h1 className="lg:text-4xl text-xl text-center text-black font-extrabold">
          Nothing to show. Pls search something else
        </h1>
      )}
    </div>
  );
};

export default Home;
