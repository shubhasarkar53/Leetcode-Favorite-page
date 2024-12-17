import React, { useContext } from "react";
import { FilterContext } from "../../contexts/filterContext";
import QuestionListItem from "../Atoms/QuestionList/QuestionListItem";

function QuestionList({ data }) {
  const [filterArr] = useContext(FilterContext);
//levelmapping for handling the "medium"-"med" issue
  const levelMapping = {
    easy: "easy",
    medium: "med",
    hard: "hard",
  };
  return (
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
  );
}

export default QuestionList;
