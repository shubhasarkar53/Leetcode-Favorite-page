import { useContext, useState } from "react";
import Down from "../../icons/Down";
import Globe from "../../icons/Globe";
import Lock from "../../icons/Lock";
import Subtitle from "./Subtitle";
import Tick from "../../icons/Tick";
import { PrivacyContext } from "../../../contexts/privacyContext";


// function PrivacyBtn({ statusOptions, currentStatus, setCurrentStatus }) {
function PrivacyBtn({ statusOptions }) {


  const [currentStatus, setCurrentStatus] = useContext(PrivacyContext)

  const [isVisible, setIsVisible] = useState(false);

  function handleCurrentStatus(status) {
    setCurrentStatus(status);
    setIsVisible(false);
  }

  function toogleDropDown() {
    setIsVisible((prev) => !prev);
  }
  function renderIcon(status) {
    if (status == "private")
      return <Lock className="size-5 text-white-primary" />;
    if (status == "public")
      return <Globe className="size-5 text-white-primary" />;
    else return null;
  }

  return (
   
      <div className=" inline-block relative ">
        <div className="  bg-black-secondary">
          <button
            onClick={toogleDropDown}
            className="flex text-white-primary items-center capitalize gap-1 "
          >
            <div className="size-4 flex items-center justify-center">
              {renderIcon(currentStatus)}
            </div>

            <Subtitle>{currentStatus}</Subtitle>
            <Down className="size-4 text-white-primary" />
          </button>
        </div>

        {isVisible && (
          <div className="absolute left-0 top-8 bg-black-light rounded-md capitalize p-1 py-2 z-30">
            {statusOptions.map((option, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleCurrentStatus(option)}
                  className="flex items-center cursor-pointer py-1 px-2 gap-1 rounded-md w-full hover:bg-black-extra-light text-white-primary"
                >
                  {renderIcon(option)}
                  <Subtitle
                    className={`${
                      currentStatus == option ? "font-medium" : ""
                    }`}
                  >
                    {option}
                  </Subtitle>
                  {currentStatus == option && (
                    <Tick className="size-3 ml-3 text-white-primary" />
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

  );
}

export default PrivacyBtn;
