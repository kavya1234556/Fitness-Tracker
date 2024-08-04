import { sidebarMenuList, SidebarType } from "@/data/sidebar";
import { useState } from "react";
import ArrowRight from "../icon/arrow-right";
import Folder from "../icon/folder";
import Document from "../icon/document";

export function Page() {
  console.log("Try", sidebarMenuList);
  return (
    <ul>
      {sidebarMenuList.map((node) => (
        <Sidebar sideBarList={node} key={node.id} />
      ))}
    </ul>
  );
}

type SidebarProps = {
  sideBarList: SidebarType;
};

function Sidebar({ sideBarList }: SidebarProps) {
  console.log("🚀 ~ Sidebar ~ sideBarList:", sideBarList);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li key={sideBarList.id}>
      <span className="flex items-center gap-1.5 py-1">
        {sideBarList.subMenu && sideBarList.subMenu.length > 0 && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 -m-1"
            aria-label={isOpen ? "Collapse" : "Expand"}
          >
            <ArrowRight
              className={`size-4 text-gray-500 ${isOpen ? "rotate-90" : ""}`}
            />
          </button>
        )}

        {sideBarList.subMenu ? (
          <Folder
            className={`size-6 text-sky-500 ${
              sideBarList.subMenu.length === 0 ? "ml-[22px]" : ""
            }`}
          />
        ) : (
          <Document className="ml-[22px] size-6 text-gray-900" />
        )}
        {sideBarList.title}
      </span>
      {isOpen && sideBarList.subMenu && (
        <ul className="pl-6">
          {sideBarList.subMenu.map((node) => (
            <Sidebar sideBarList={node} key={node.id} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default Page;
