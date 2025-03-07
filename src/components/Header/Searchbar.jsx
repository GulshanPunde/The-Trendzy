import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../../features/product/product";
function Searchbar() {
  const { searchTerm } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
   
  };
  return (
    <form className="d-flex ms-md-0 ms-lg-3" onSubmit={handleSubmit}>
      <input
        className="form-control ms-md-auto "
        type="search"
        placeholder="Search Products"
        onChange={handleChange}
        value={searchTerm}
      />
    </form>
  );
}

export default Searchbar;
