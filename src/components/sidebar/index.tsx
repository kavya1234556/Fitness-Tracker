import { NavLink, useLocation } from "react-router-dom";
import { sidebarMenuList } from "../../data/sidebar";

function getMainLink(pathname: string) {
  return pathname.split("/")[1];
}

const Sidebar = () => {
  const pathname = useLocation();
  return (
    <>
      <div className="mb-[10px] text-center p-[20px] font-bold text-[30px] text-red bg-white">
        FITNESS
      </div>
      <div>
        {sidebarMenuList?.map((val) => {
          return (
            <div key={val.id}>
              <NavLink
                className="h-[56px] pl-[20px] flex gap-[14px] items-center"
                to={val.link}
                style={({ isActive }) => {
                  const isActiveNav =
                    isActive || getMainLink(pathname.pathname) === val.mainlink;
                  return {
                    color: isActiveNav ? "#121f3e" : "#93B0C8",
                    borderLeft: isActiveNav ? "4px solid #4f1787 " : "",
                  };
                }}
              >
                <div className="flex gap-[14px] items-center">
                  <div>{val.icon}</div>
                  <div className="text-sm font-normal capitalize text-theme">
                    {val?.title}
                  </div>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
