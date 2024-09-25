import {
  IoCalendarOutline,
  IoLocationOutline,
  IoMailOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";

export const INFO_LIST = [
  {
    id: "mail",
    icon: <IoMailOutline />,
    name: "Email",
    value: "paulomn2013@gmail.com",
  },
  {
    id: "phone",
    icon: <IoPhonePortraitOutline />,
    name: "Phone",
    value: "+55 65 99308-5699",
    url: "https://api.whatsapp.com/send?phone=5565993085699",
  },

  {
    id: "birthday",
    icon: <IoCalendarOutline />,
    name: "Birthday",
    value: "17/04/2001",
  },
  {
    id: "location",
    icon: <IoLocationOutline />,
    name: "Location",
    value: "Brasil - São Paulo - SP",
  },
];
