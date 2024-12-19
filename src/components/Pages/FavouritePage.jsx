import React, { useState } from "react";
import FavouriteCard from "../Molecules/FavouriteCard";
import Container from "../LayoutHelpers/Container";
import FilterBtn from "../Atoms/Filter/FilterBtn";
import { FilterContext } from "../../contexts/filterContext";
import QuestionList from "../Molecules/QuestionList";
import AppSidebar from "../Molecules/AppSideBar";
import FoldBtn from "../Atoms/Sidebar/FoldBtn";
import { SideBarVisibleContext } from "../../contexts/sideBarVisibleContext";
import { motion } from "motion/react";
import { PrivacyContext } from "../../contexts/privacyContext";

function FavouritePage({ data }) {
  const [filterArr, setFilterArr] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(data.currentStatus);

  return (
    <FilterContext.Provider value={[filterArr, setFilterArr]}>
      <SideBarVisibleContext.Provider value={[isVisible, setIsVisible]}>
        <PrivacyContext.Provider value={[currentStatus, setCurrentStatus]}> 
          {/* sidebar */}
          <div className="flex flex-1">
            <AppSidebar isVisible={isVisible}></AppSidebar>
            <Container>
              <div className="relative w-full">
                {!isVisible && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className=" absolute   left-2 md:left-5 xl:left-44 top-6"
                  >
                    <FoldBtn />
                  </motion.div>
                )}
                <main className="w-full grid grid-cols-1 lg:grid-cols-2">
                  <div className="w-[85%] mx-auto flex flex-col items-center lg:items-end mt-8">
                    <FavouriteCard userFavouriteData={data}></FavouriteCard>
                  </div>
                  <div className=" h-[100vh] w-full mt-8 ">
                    <FilterBtn setFilterArr={setFilterArr} />
                    <QuestionList data={data} />
                  </div>
                </main>
              </div>
            </Container>
          </div>
        </PrivacyContext.Provider>
      </SideBarVisibleContext.Provider>
    </FilterContext.Provider>
  );
}

export default FavouritePage;
