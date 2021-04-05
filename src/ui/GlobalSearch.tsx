import React from "react";
import { SearchIcon } from "@heroicons/react/solid";

interface Props {}

const GlobalSearch: React.FC<Props> = (props: Props) => {
  return (
    <div className="w-full flex items-center bg-primary-700 hover:bg-primary-600 text-primary-300 focus-within:text-primary-100 rounded-lg">
      <div className="h-full px-4">
        <SearchIcon className="w-6 h-6" />
      </div>
      <input
        type="text"
        placeholder="Search for Courses, Users or Posts"
        className="w-full py-3 px-4 rounded-8 bg-transparent placeholder-primary-300 focus:outline-none"
      />
    </div>
  );
};

export default GlobalSearch;
