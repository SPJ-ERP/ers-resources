import { ALL_MODULE_PORTS } from "../port/all-module-port";

export type SidebarSubMenuItem = {
  name: string;
  href: string;
  /** Port modul target (untuk cross-module navigation via Module Federation) */
  port?: number;
  type?: "item";
};

export type SidebarSubMenuGroup = {
  name: string;
  icon: string;
  type: "sub-group";
  subMenuList: ReadonlyArray<SidebarSubMenuItem>;
};

export type SidebarItemDefault = {
  name: string;
  icon: string;
  href: string;
  /** Port modul target. Jika undefined, navigasi internal (same module) */
  port?: number;
  type: "default";
};

export type SidebarItemDropdown = {
  name: string;
  icon: string;
  href: string;
  /** Port modul target. Jika undefined, navigasi internal (same module) */
  port?: number;
  type: "dropdown";
  subMenuList: ReadonlyArray<SidebarSubMenuItem | SidebarSubMenuGroup>;
};

export type SidebarItem = SidebarItemDefault | SidebarItemDropdown;

export const SIDEBAR_PATHS: SidebarItem[] = [
  {
    name: "Dashboard",
    icon: "solar:home-smile-outline",
    href: "/",
    port: ALL_MODULE_PORTS.DASHBOARD,
    type: "default",
  },
  {
    name: "Master Data",
    icon: "solar:folder-linear",
    href: "/master-data",
    port: ALL_MODULE_PORTS.MASTER_DATA,
    type: "dropdown",
    subMenuList: [
      {
        name: "User & Role",
        icon: "solar:user-outline",
        type: "sub-group",
        subMenuList: [
          {
            name: "Master User",
            href: "/master-data/master-data-user",
            port: ALL_MODULE_PORTS.MASTER_DATA,
          },
          {
            name: "Master Role",
            href: "/master-data/master-data-role",
            port: ALL_MODULE_PORTS.MASTER_DATA,
          },
        ]
      },
      {
        name: "Departemen",
        icon: "solar:diagram-down-outline",
        type: "sub-group",
        subMenuList: [
          {
            name: "Master Departemen",
            href: "/master-data/departemen",
            port: ALL_MODULE_PORTS.MASTER_DATA,
          },
          {
            name: "Karyawan",
            href: "/master-data/karyawan",
            port: ALL_MODULE_PORTS.MASTER_DATA,
          },
          {
            name: "Job Position",
            href: "/master-data/job-position",
            port: ALL_MODULE_PORTS.MASTER_DATA,
          }
        ]
      },
    ],
  },
];
