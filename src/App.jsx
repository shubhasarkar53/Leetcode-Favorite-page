import Navbar from "./components/Molecules/Navbar";
import FavouritePage from "./components/Pages/FavouritePage";


const data = {
  username: "Shubha Sarkar",
  statusOptions: ["public", "private"],
  currentStatus: "private",
  toolTipQuesion: "7. Reverse Integer",
  savedQuestions: [
    {
      id: crypto.randomUUID(),
      sn: 1,
      questionText: "Reverse a Integer.",
      level: "easy",
      submitted: true,
    },
    {
      id: crypto.randomUUID(),
      sn: 2,
      questionText: "Print all Integer.",
      level: "easy",
      submitted: true,
    },
    {
      id: crypto.randomUUID(),
      sn: 3,
      questionText: "Next Grater Element.",
      level: "med",
      submitted: false,
    },
    {
      id: crypto.randomUUID(),
      sn: 5,
      questionText: "Next Grater Element.",
      level: "med",
      submitted: true,
    },
    {
      id: crypto.randomUUID(),
      sn: 4,
      questionText: "Valid Parenthesis.",
      level: "hard",
      submitted: false,
    },
  ],
};
export default function App() {
  return (
    <div className="box-border bg-black-primary">
      <Navbar />
      <FavouritePage data={data}></FavouritePage>
    </div>
  );
}


