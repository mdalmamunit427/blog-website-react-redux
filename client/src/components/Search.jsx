import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { searched } from "../redux/features/filter/filterSlice";

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filter);
  const [input, setInput] = useState(search);

  const match = useMatch("/");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));
    // console.log(dispatch(searched(input)))

    if (!match) {
      navigate("/");
    }
    setInput("")
  };
  console.log(search)
  return (
    <form onSubmit={handleSubmit} className="relative flex items-center h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
      <div className="grid place-items-center h-full w-24 text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <input
        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder="Search something.."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default Search;
