import React, { FC } from "react";
import {ReactComponent as SearchIcon} from "../assets/images/icons/Search.svg";
import ClassNames from "classnames";
interface ISearchBar {
  size?: "small" | "medium";
  value?:string,
  setValue?:any
}
const SearchBar: FC<ISearchBar> = ({ size = "small",value,setValue }) => {
  return (
    <div
      className={ClassNames(
        "rounded-md border border-gray-400 flex h-10  py-1 px-1",
        {
          "w-[250px]": size === "small",
          "w-[350px]": size === "medium",
        }
      )}
    >
      <SearchIcon className="mx-2 py-1 h-7 w-7" />
      <input
        type="text"
        className="outline-none bg-transparent w-full"
        placeholder="Search"
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
    </div>
  );
};

export default SearchBar;
