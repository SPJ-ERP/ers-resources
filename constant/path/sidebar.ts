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
        name: "Accounting",
        icon: "solar:document-text-outline",
        type: "sub-group",
        subMenuList: [
          { name: "Master General Ledger", href: "/master-data/master-data-general-ledger", port: ALL_MODULE_PORTS.MASTER_DATA },
          { name: "Master Departemen", href: "/master-data/master-data-department", port: ALL_MODULE_PORTS.MASTER_DATA },
          // { name: "Master Subsidiary", href: "/master-data/master-subsidiary", port: ALL_MODULE_PORTS.MASTER_DATA },
          { name: "Master COA", href: "/master-data/master-data-coa", port: ALL_MODULE_PORTS.MASTER_DATA },
          { name: "Master Kode Jurnal", href: "/master-data/master-data-kode-jurnal", port: ALL_MODULE_PORTS.MASTER_DATA },
        ]
      },
      // {
      //   name: "Departemen",
      //   icon: "solar:diagram-down-outline",
      //   type: "sub-group",
      //   subMenuList: [
      //     {
      //       name: "Master Departemen",
      //       href: "/master-data/master-departemen",
      //       port: ALL_MODULE_PORTS.MASTER_DATA,
      //     },
      //   ]
      // },
      // {
      //   name: "Finance",
      //   icon: "solar:chart-square-outline",
      //   type: "sub-group",
      //   subMenuList: [
      //     { name: "Master Kode Kas", href: "/master-data/master-kode-kas", port: ALL_MODULE_PORTS.MASTER_DATA },
      //   ]
      // },
      {
        name: "Partner",
        icon: "solar:users-group-two-rounded-outline",
        type: "sub-group",
        subMenuList: [
          { name: "Master Kode Area", href: "/master-data/master-data-kode-area", port: ALL_MODULE_PORTS.MASTER_DATA },
          // { name: "Master Kode Sub Distributor", href: "/master-data/master-kode-sub-distributor", port: ALL_MODULE_PORTS.MASTER_DATA },
          { name: "Master Distributor/Customer", href: "/master-data/master-data-distributor", port: ALL_MODULE_PORTS.MASTER_DATA },
          // { name: "Master Customer", href: "/master-data/master-data-customer", port: ALL_MODULE_PORTS.MASTER_DATA },
          { name: "Master Supplier", href: "/master-data/master-data-supplier", port: ALL_MODULE_PORTS.MASTER_DATA },
        ]
      }
    ],
  },
];
