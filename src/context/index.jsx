import { createContext, use, useState } from "react";
import { useNavigate } from "react-router-dom";

const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [searchParams, setSearchParams] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`
      );
      const data = await res.json();
      //   console.log(data);
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParams("");
        setSearchQuery("");
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  // console.log(loading, recipeList);

  const handleAddToFavorite = (getCurrentItem) => {
    let cpyFavoritesList = [...favoritesList];
    const index = cpyFavoritesList.findIndex(
      (item) => item.id === getCurrentItem.id
    );

    if (index === -1) {
      cpyFavoritesList.push(getCurrentItem);
    } else {
      cpyFavoritesList.splice(index, 1);
    }

    setFavoritesList(cpyFavoritesList);
    // console.log(favoritesList);
  };
  return (
    <GlobalContext.Provider
      value={{
        searchParams,
        setSearchParams,
        searchQuery,
        setSearchQuery,
        handleSubmit,
        loading,
        recipeList,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavorite,
        favoritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
export { GlobalState };
