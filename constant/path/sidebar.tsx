import { ALL_MODULE_PORTS } from "../port/all-module-port";
import HomeSmileOutline from "@iconify-react/solar/home-smile-outline";
import FolderLinear from "@iconify-react/solar/folder-linear";
import UserOutline from "@iconify-react/solar/user-outline";
import DiagramDownOutline from "@iconify-react/solar/diagram-down-outline";
import AltArrowRightOutline from "@iconify-react/solar/alt-arrow-right-outline";

export type SidebarSubMenuItem = {
  name: string;
  href: string;
  /** Port modul target (untuk cross-module navigation via Module Federation) */
  port?: number;
  type?: "item";
  /** Jika true, aktif status akan match untuk semua subpath (contoh: "/master-data/department" akan match "/master-data/department/*") */
  matchSubPaths?: boolean;
};

export type SidebarSubMenuGroup = {
  name: string;
  icon: React.ReactNode;
  type: "sub-group";
  subMenuList: ReadonlyArray<SidebarSubMenuItem>;
};

export type SidebarItemDefault = {
  name: string;
  icon: React.ReactNode;
  href: string;
  /** Port modul target. Jika undefined, navigasi internal (same module) */
  port?: number;
  type: "default";
  /** Jika true, aktif status akan match untuk semua subpath (contoh: "/master-data/department" akan match "/master-data/department/*") */
  matchSubPaths?: boolean;
};

export type SidebarItemDropdown = {
  name: string;
  icon: React.ReactNode;
  href: string;
  /** Port modul target. Jika undefined, navigasi internal (same module) */
  port?: number;
  type: "dropdown";
  /** Jika true, aktif status akan match untuk semua subpath (contoh: "/master-data/department" akan match "/master-data/department/*") */
  matchSubPaths?: boolean;
  subMenuList: ReadonlyArray<SidebarSubMenuItem | SidebarSubMenuGroup>;
};

export type SidebarItem = SidebarItemDefault | SidebarItemDropdown;

export const SIDEBAR_PATHS: SidebarItem[] = [
  {
    name: "Dashboard",
    icon: <HomeSmileOutline />,
    href: "/",
    port: ALL_MODULE_PORTS.DASHBOARD,
    type: "default",
  },
  {
    name: "Master Data",
    icon: <FolderLinear />,
    href: "/master-data",
    port: ALL_MODULE_PORTS.MASTER_DATA,
    type: "dropdown",
    subMenuList: [
      {
        name: "User & Role",
        icon: <UserOutline />,
        type: "sub-group",
        subMenuList: [
          {
            name: "Master User",
            href: "/master-data/master-data-user",
            port: ALL_MODULE_PORTS.MASTER_DATA,
            matchSubPaths: true,
          },
          {
            name: "Master Role",
            href: "/master-data/master-data-role",
            port: ALL_MODULE_PORTS.MASTER_DATA,
            matchSubPaths: true,
          },
        ],
      },
      {
        name: "Departemen",
        icon: <DiagramDownOutline />,
        type: "sub-group",
        subMenuList: [
          {
            name: "Master Departemen",
            href: "/master-data/department",
            port: ALL_MODULE_PORTS.MASTER_DATA,
            matchSubPaths: true,
          },
          {
            name: "Karyawan",
            href: "/master-data/employee",
            port: ALL_MODULE_PORTS.MASTER_DATA,
            matchSubPaths: true,
          },
          {
            name: "Job Position",
            href: "/master-data/job-position",
            port: ALL_MODULE_PORTS.MASTER_DATA,
            matchSubPaths: true,
          },
        ],
      },
    ],
  },
];
