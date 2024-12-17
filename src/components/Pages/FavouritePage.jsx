import React, { useState } from "react";
import FavouriteCard from "../Molecules/FavouriteCard";
import Container from "../LayoutHelpers/Container";
import FilterBtn from "../Atoms/Filter/FilterBtn";
import { FilterContext } from "../../contexts/filterContext";
import QuestionList from "../Molecules/QuestionList";

function FavouritePage({ data }) {
  const [filterArr, setFilterArr] = useState([]);
  return (
    <FilterContext.Provider value={[filterArr, setFilterArr]}>
      <Container>
        <div className="w-full grid grid-cols-2">
          <div className="w-[80%] mx-auto flex flex-col items-end mt-8">
            <FavouriteCard userFavouriteData={data}></FavouriteCard>
          </div>
          <div className="h-[100vh] w-full mt-8 ">
            <FilterBtn setFilterArr={setFilterArr} />
            <QuestionList data={data}/>
          </div>
        </div>
      </Container>
    </FilterContext.Provider>
  );
}

export default FavouritePage;
