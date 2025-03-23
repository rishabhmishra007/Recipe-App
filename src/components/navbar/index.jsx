import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import GlobalContext from "../../context";

const Navbar = () => {
  const {
    searchParams,
    setSearchParams,
    searchQuery,
    setSearchQuery,
    handleSubmit,
  } = useContext(GlobalContext);

  //   const debounceTimeout = useRef(null);

  // console.log(searchParams);

  //   const handleSearchChange = (e) => {   """one way to do it"""
  //     setSearchQuery(e.target.value);
  //     if (debounceTimeout.current) {
  //       clearTimeout(debounceTimeout.current);
  //     }
  //     debounceTimeout.current = setTimeout(() => {
  //       setSearchParams(e.target.value);
  //     }, 500);
  //   };

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchParams(searchQuery);
    }, 200);
    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  return (
    <div>
      <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
        <h2 className="text-2xl text-black font-semibold">
          <NavLink to={"/"}>FoodRecipe</NavLink>
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter Item..."
            className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
          />
        </form>
        <ul className="flex gap-5">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-semibold hover:text-red-300 duration-300"
                  : "text-black hover:text-gray-700 duration-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/favorites"}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-semibold hover:text-red-300 duration-300"
                  : "text-black hover:text-gray-700 duration-300"
              }
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
