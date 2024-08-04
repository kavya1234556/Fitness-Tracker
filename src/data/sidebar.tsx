import Sidebar from "@/components/sidebar";
import DashboardIcon from "../components/icon/dashboard";
import Heart from "../components/icon/heart";

export type subMenuType = {
  id: number;
  title: string;
  link: string;
  icon: any;
};

export type SidebarType = {
  id: number;
  title: string;
  link: string;
  mainlink?: string;
  icon: any;
  subMenu?: SidebarType[];
};

export const sidebarMenuList: SidebarType[] = [
  {
    id: 0,
    title: "Dashboard",
    link: "/dashboard",
    mainlink: "dashboard",
    icon: <DashboardIcon />,
    subMenu: [
      {
        id: 0,
        title: "dashboard",
        link: "/cms/pages",
        icon: <DashboardIcon />,
        subMenu: [
          {
            id: 0,
            title: "pages",
            link: "/dashboard",
            icon: <DashboardIcon />,
            subMenu: [
              {
                id: 0,
                title: "pages",
                link: "/dashboard",
                icon: <DashboardIcon />,
              },
              {
                id: 0,
                title: "haha",
                link: "/dashboard",
                icon: <DashboardIcon />,
                subMenu: [
                  {
                    id: 0,
                    title: "pages",
                    link: "/dashboard",
                    icon: <DashboardIcon />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 1,
    title: "Home",
    link: "/home",
    mainlink: "home",
    icon: <Heart />,
    subMenu: [
      {
        id: 0,
        title: "pages",
        link: "/cms/pages",
        icon: <DashboardIcon />,
      },
      {
        id: 1,
        title: "Intro Screens",
        link: "/cms/intro",
        icon: <DashboardIcon />,
      },
      {
        id: 3,
        title: "How it works?",
        link: "/cms/how-it-works/user",
        icon: <DashboardIcon />,
      },
      {
        id: 4,
        title: "Settings",
        link: "/cms/setting",
        icon: <DashboardIcon />,
      },
    ],
  },
];
