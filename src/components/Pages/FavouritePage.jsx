import React, { useContext, useState } from "react";
import FavouriteCard from "../Molecules/FavouriteCard";
import QuestionListItem from "../Atoms/QuestionList/QuestionListItem";
import Container from "../LayoutHelpers/Container";
import FilterBtn from "../Atoms/Filter/FilterBtn";
import { FilterContext } from "../../contexts/filterContext";

function FavouritePage({ data }) {
  const [filterArr, setFilterArr] = useState([]);

  //levelmapping for handling the "medium"-"med" issue
  const levelMapping = {
    easy: "easy",
    medium: "med",
    hard: "hard",
  };

  return (
    <FilterContext.Provider value={[filterArr, setFilterArr]}>
      <Container>
        <div className="w-full grid grid-cols-2">
          <div className="w-[80%] mx-auto flex flex-col items-end mt-8">
            <FavouriteCard userFavouriteData={data}></FavouriteCard>
          </div>
          <div className="h-[100vh] w-full mt-8 ">
            <FilterBtn setFilterArr={setFilterArr} />
            <div className="my-2">
              {filterArr.length == 0
                ? data.savedQuestions.map((question, index) => (
                    <QuestionListItem key={index} questionDetail={question} />
                  ))
                : data.savedQuestions
                    // .filter((question) => filterArr.includes(question.level))
                    .filter((question) =>
                      filterArr
                        .map((level) => levelMapping[level])
                        .includes(question.level)
                    )
                    .map((question, index) => (
                      <QuestionListItem key={index} questionDetail={question} />
                    ))}
            </div>
          </div>
        </div>
      </Container>
    </FilterContext.Provider>
  );
}

export default FavouritePage;
