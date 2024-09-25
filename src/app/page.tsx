import Tab from "@/components/Tab";
import { About } from "@/templates/About";
import { Hobbies } from "@/templates/Hobbies";
import { Profile } from "@/templates/Profile";
import { Resume } from "@/templates/Resume";
import { BiGame } from "react-icons/bi";

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
      content: <Hobbies />,
    },
  ];

  return <Tab tabs={tabsData} />;
}
