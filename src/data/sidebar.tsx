import DashboardIcon from "../components/icon/dashboard";
import Heart from "../components/icon/heart";

export const sidebarMenuList = [
  {
    id: 0,
    title: "Dashboard",
    link: "/dashboard",
    mainlink: "dashboard",
    icon: <DashboardIcon />,
  },
  {
    id: 1,
    title: "Home",
    link: "/home",
    mainlink: "home",
    icon: <Heart />,
  },
];
