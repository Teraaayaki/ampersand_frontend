import React, { ReactElement } from "react";

import Button from "../atoms/Button";
import Input from "../atoms/Input";

const SearchBar = (): ReactElement => {
  return (
    <div className="flex space-x-4">
      <Input />
      <Button>Search</Button>
    </div>
  );
};

export default SearchBar;
