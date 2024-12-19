import React, { useContext, useState } from "react";
import FeaturedIcon from "../Atoms/Card/FeaturedIcon";
import Star from "../icons/Star";
import Heading from "../Atoms/Heading";
import Subtitle from "../Atoms/Card/Subtitle";
import PrivacyBtn from "../Atoms/Card/PrivacyBtn";
import PracticeButton from "../Atoms/Card/PracticeButton";
import RoundedIcon from "../Atoms/Card/RoundedIcon";
import Code from "../icons/Code";
import Share from "../icons/Share";
import Refresh from "../icons/Refresh";
import LevelSquare from "../Atoms/Card/LevelSquare";
import { FilterContext } from "../../contexts/filterContext";
import { PrivacyContext } from "../../contexts/privacyContext";

/* 
 Favorite card
*/
function FavouriteCard({ userFavouriteData }) {
  return (
    <div className="bg-black-secondary max-w-[375px] border border-[#fafafa0f] rounded-lg p-6">
      <FavouriteUpper
        currStatus={userFavouriteData.currentStatus}
        statusOptions={userFavouriteData.statusOptions}
        savedQuestionCount={userFavouriteData.savedQuestions.length}
        practiceBtnTooltipText={
          userFavouriteData.savedQuestions[0].questionText
        }
        userName={userFavouriteData.username}
      />
      <FavouriteLower questionStats={userFavouriteData} />
    </div>
  );
}

/* 
 Favorite cards upper section
*/
function FavouriteUpper({
  statusOptions,
  currStatus,
  userName,
  savedQuestionCount,
  practiceBtnTooltipText,
}) {
  const [currentStatus, setCurrentStatus] = useState(currStatus);
  return (

      <div>
        <FeaturedIcon
          size="lg"
          icon={<Star className="text-yellow-secondary" />}
        />
        <Heading variant="h1" className="leading-[150%]">
          Favorite
        </Heading>
        <div className="flex items-center gap-2">
          <Subtitle text={userName} />
          <span className="text-white-primary text-sm">•</span>
          <Subtitle text={savedQuestionCount + " questions"} />
          <span className="text-white-primary text-sm">•</span>
          <PrivacyBtn
            currentStatus={currentStatus}
            setCurrentStatus={setCurrentStatus}
            statusOptions={statusOptions}
          />
        </div>

        <div className="my-4 flex items-center gap-3 ">
          <PracticeButton toolTipQuestion={practiceBtnTooltipText} />
          <div className="flex gap-2">
            {currentStatus == "public" && (
              <RoundedIcon icon={<Share />} toolTipText={"Share"} />
            )}

            <RoundedIcon icon={<Code />} toolTipText={"Fork"} />
          </div>
        </div>

        <hr className="border-inherit opacity-15 " />
      </div>

  );
}

/* 
 Favorite cards Lower section
*/

function FavouriteLower({ questionStats }) {
  const totalEasyCount = questionStats.savedQuestions.filter(
    (question) => question.level == "easy"
  ).length;
  const totalEasySolved = questionStats.savedQuestions.filter(
    (question) => question.level == "easy" && question.submitted == true
  ).length;
  const totalMedCount = questionStats.savedQuestions.filter(
    (question) => question.level == "med"
  ).length;
  const totalMedSolved = questionStats.savedQuestions.filter(
    (question) => question.level == "med" && question.submitted == true
  ).length;
  const totalHardCount = questionStats.savedQuestions.filter(
    (question) => question.level == "hard"
  ).length;
  const totalHardSolved = questionStats.savedQuestions.filter(
    (question) => question.level == "hard" && question.submitted == true
  ).length;

  return (
    <div className="pt-5">
      <div className="flex justify-between items-center pb-2">
        <Heading variant="h4">Progress</Heading>
        <Refresh className="text-white-secondary size-4" />
      </div>

      <div className="flex justify-between items-center gap-2">
        <div className="h-[176px] w-[227px]  bg-black-light rounded-md"></div>
        <div className="flex flex-col justify-center gap-2   ">
          <LevelSquare
            level="easy"
            submittedQuestionCount={totalEasySolved}
            totalQuestionCount={totalEasyCount}
          />
          <LevelSquare
            level="med"
            submittedQuestionCount={totalMedSolved}
            totalQuestionCount={totalMedCount}
          />
          <LevelSquare
            level="hard"
            submittedQuestionCount={totalHardSolved}
            totalQuestionCount={totalHardCount}
          />
        </div>
      </div>
    </div>
  );
}

export default FavouriteCard;
