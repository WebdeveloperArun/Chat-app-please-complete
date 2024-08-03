import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="w-full flex gap-4">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered rounded-full w-64"
      />
      <button
        type="submit"
        className="btn btn-circle bg-sky-500 text-white"
      >
        <IoSearchSharp className="outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
