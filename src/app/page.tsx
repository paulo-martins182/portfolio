import Tab from "@/components/Tab";
import { About } from "@/templates/About";
import { Profile } from "@/templates/Profile";
import { Resume } from "@/templates/Resume";
import { BiGame, BiHomeSmile } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { GiCharacter } from "react-icons/gi";

export default function Home() {
  const tabsData = [
    {
      id: "11",
      title: "Resume",
      content: <Resume />,
    },
    {
      id: "1",
      title: "About",
      content: <About />,
    },
    {
      id: "2",
      title: "Carrer",
      content: <Profile />,
    },
    {
      id: "3",
      title: "Hobbies",
      icon: <BiGame />,
      content: <p>This is the settings content.</p>,
    },
  ];

  return <Tab tabs={tabsData} />;
}
