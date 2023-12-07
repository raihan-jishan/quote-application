import { CiCloudMoon, CiMusicNote1 } from "react-icons/ci";
import { GiLifeBar } from "react-icons/gi";
import { LuInspect, LuQuote } from "react-icons/lu";
import { MdAttachMoney } from "react-icons/md";
import { RiGitRepositoryLine } from "react-icons/ri";
import { TbFreezeRowColumn } from "react-icons/tb";
import { VscListFlat } from "react-icons/vsc";
export const  TopicsData = [
  {
    id:1,
    title:"Motivational",
    sendLink:"/motivational",
    icon:  <VscListFlat  size={35} /> , 
  },
  {
    id:2,
    title:"Inspirational",
    sendLink:"/inspirational",
    icon: <LuInspect size={35} /> , 
  },
  {
    id:3,
    title:"Positive",
    sendLink:"/positive",
    icon: <RiGitRepositoryLine size={35} /> , 
    
  },
  {
    id:4,
    title:"Life",
    sendLink:"/life",
    icon: <GiLifeBar size={40} /> , 
  },
  {
    id:5,
    title:"Music",
    sendLink:"/music",
    icon: <CiMusicNote1 size={40} /> , 
  },
  {
    id:6,
    title:"Dreams",
    sendLink:"/dreams",
    icon: <CiCloudMoon size={50} />,
  },
  {
    id:7,
    title:"Billionaire",
    sendLink:"/billionaire",
    icon: <MdAttachMoney size={40} />,
  },
  {
    id:6,
    title:"Legend",
    sendLink:"/legend",
    icon: <LuQuote size={35}  /> ,
    
    },
    {
    id:6,
    title:"Alone",
    sendLink:"/alone",
    icon: <TbFreezeRowColumn size={35}  /> ,
  },
]