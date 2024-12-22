import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import Heading from "../Atoms/Heading";
import FoldIcon from "../icons/FoldIcon";
import FeaturedIcon from "../Atoms/Card/FeaturedIcon";
import Globe from "../icons/Globe";
import Star from "../icons/Star";
import FoldBtn from "../Atoms/Sidebar/FoldBtn";
import { useContext, useEffect, useRef } from "react";
import { SideBarVisibleContext } from "../../contexts/sideBarVisibleContext";
import { motion } from "motion/react";
import { PrivacyContext } from "../../contexts/privacyContext";
import Lock from "../icons/Lock";
// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

// export default function AppSidebar() {
//   const [isVisible, setIsVisible] = useContext(SideBarVisibleContext);

//   const [currentStatus] = useContext(PrivacyContext);

//   return (
//     <>
//       {isVisible && (
//         <motion.aside
//           initial={{ x: -100 }}
//           animate={{ x: 0 }}
//           transition={{ type: "spring", duration: 0.7 }}
//           className=" absolute md:relative min-h-[100vh] z-10 bg-black-tersiary w-[70%] sm:w-[40%]  md:max-w-[20%] md:w-[18%] text-white-primary p-4"
//         >
//           <div className=" flex justify-between items-center px-2">
//             <Heading className="font-semibold text-base">My Lists</Heading>
//             <FoldBtn />
//           </div>
//           <Heading className="font-semibold p-2 " variant="h4">
//             Created by me
//           </Heading>

//           {/* sidebar list item */}
//           <div className="bg-black-extra-light w-full flex items-center justify-between py-2 px-2 rounded-md">
//             <div className="flex items-center gap-2">
//               <FeaturedIcon
//                 size="sm"
//                 icon={<Star className="text-yellow-secondary" />}
//               />
//               <div>Favorite</div>
//             </div>
//             {currentStatus == "public" ? (
//               <Globe className="size-4" />
//             ) : (
//               <Lock className="size-4" />
//             )}
//           </div>
//         </motion.aside>
//       )}
//     </>
//   );
// }


export default function AppSidebar() {
  const [isVisible, setIsVisible] = useContext(SideBarVisibleContext);
  const [currentStatus] = useContext(PrivacyContext);

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
    
        setIsVisible(false); 
      }
    };
    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <motion.aside
          ref={sidebarRef}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 0.7 }}
          className="absolute md:relative min-h-[100vh] z-10 bg-black-tersiary w-[70%] sm:w-[40%] md:max-w-[20%] md:w-[18%] text-white-primary p-4"
        >
          <div className="flex justify-between items-center px-2">
            <Heading className="font-semibold text-base">My Lists</Heading>
            <FoldBtn />
          </div>
          <Heading className="font-semibold p-2 " variant="h4">
            Created by me
          </Heading>

          {/* Sidebar list item */}
          <div className="bg-black-extra-light w-full flex items-center justify-between py-2 px-2 rounded-md">
            <div className="flex items-center gap-2">
              <FeaturedIcon
                size="sm"
                icon={<Star className="text-yellow-secondary" />}
              />
              <div>Favorite</div>
            </div>
            {currentStatus === "public" ? (
              <Globe className="size-4" />
            ) : (
              <Lock className="size-4" />
            )}
          </div>
        </motion.aside>
      )}
    </>
  );
}
