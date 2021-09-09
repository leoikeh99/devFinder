import React from "react";
import searchIcon from "../images/icon-search.svg";

const SearchInput = ({ name, setName, getUser }) => {
  return (
    <div className="w-full bg-bg2 dark:bg-bg2_d flex items-center justify-between p-1.5 pl-2 screen2:pl-6 rounded-xl shadow-input dark:shadow-none mb-4 transition">
      <div className="flex gap-1 screen2:gap-4 w-3/4">
        <img src={searchIcon} alt="" />
        <input
          className="w-full text-text2 placeholder-text2 dark:text-text2_d text-xs screen2:text-base dark:bg-bg2_d dark:placeholder-text1_d transition"
          type="text"
          placeholder="Search Github username..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="github-username"
        />
      </div>
      <button
        className="bg-primary dark:bg-primary_d text-white text-sm screen2:text-base py-2 px-3 screen2:py-3 screen2:px-5 rounded-lg"
        onClick={() => getUser()}>
        Search
      </button>
    </div>
  );
};
export default SearchInput;
