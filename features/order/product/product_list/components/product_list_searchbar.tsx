import { useState } from "react";
import { Searchbar } from "react-native-paper";

const ProductListSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
};

export default ProductListSearchBar;