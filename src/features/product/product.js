import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";
import { uniq, sortBy } from "lodash";
import { loremIpsum } from "lorem-ipsum";
import { stringSimilarity as getScore } from "string-similarity-js";

data.forEach((product) => {
  product.description = loremIpsum();
});
const categories = uniq(data.map((product) => product.category)).sort();
const DEFAULT_CATEGORY = "All";

const initialState = {
  products: data,
  productsFromSearch: data,
  categories: [DEFAULT_CATEGORY, ...categories],
  selectedCategory: DEFAULT_CATEGORY,
  single: data[0],
  singleSimilarProducts: data.slice(0, 4),
  searchTerm: "",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      let { payload: searchTerm } = action;
      state.searchTerm = searchTerm;
      state.productsFromSearch = state.products;
      if (state.searchTerm.length > 0) {
        state.productsFromSearch.forEach((p) => {
          p.simScore = getScore(`${p.name}${p.category}`, state.searchTerm);
        });
        state.productsFromSearch = sortBy(
          state.productsFromSearch,
          "simScore"
        ).reverse();
      }
    },
    setSelectedCategory: (state, action) => {
      let { payload: selectedCategory } = action;
      state.searchTerm = "";
      state.selectedCategory = selectedCategory;
      if (state.selectedCategory === DEFAULT_CATEGORY) {
        state.productsFromSearch = state.products;
      } else {
        state.productsFromSearch = state.products.filter((p) => {
          return p.category === selectedCategory;
        });
      }
    },
    setSingleProduct: (state, action) => {
      let { payload: id } = action;
      state.single = state.products.find((p) => p.id == id);
      state.singleSimilarProducts = state.products.filter((p) => {
        return p.category === state.single.category && p.id !== state.single.id;
      });
    },
    updateProductDetails: (state, action) => {
      const { id, name, price, size, stock, description } = action.payload;
      const productIndex = state.products.findIndex((p) => p.id === id);
      if (productIndex !== -1) {
        // Update the product in the `products` array
        state.products[productIndex] = {
          ...state.products[productIndex],
          name,
          price,
          size,
          stock,
          description,
        };

        // If the updated product is the currently selected `single` product
        if (state.single.id === id) {
          state.single = {
            ...state.single,
            name,
            price,
            size,
            stock,
            description,
          };
        }
      }
    },
  },
});

export const {
  setSearchTerm,
  setSelectedCategory,
  setSingleProduct,
  updateProductDetails,
} = productSlice.actions;
export default productSlice.reducer;
