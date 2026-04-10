import { ALL_MODULE_PORTS } from "../port/all-module-port";

export type SidebarSubMenuItem = {
  name: string;
  href: string;
  /** Port modul target (untuk cross-module navigation via Module Federation) */
  port?: number;
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
  subMenuList: ReadonlyArray<SidebarSubMenuItem>;
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
    icon: "solar:folder-outline",
    href: "/master-data",
    port: ALL_MODULE_PORTS.MASTER_DATA,
    type: "dropdown",
    subMenuList: [
      {
        name: "Bahan Baku",
        href: "/master-data/bahan-baku",
        port: ALL_MODULE_PORTS.MASTER_DATA,
      },
      {
        name: "Bahan Pembantu",
        href: "/master-data/bahan-pembantu",
        port: ALL_MODULE_PORTS.MASTER_DATA,
      },
      {
        name: "Produk",
        href: "/master-data/products",
        port: ALL_MODULE_PORTS.MASTER_DATA,
      },
      {
        name: "Brand",
        href: "/master-data/brand",
        port: ALL_MODULE_PORTS.MASTER_DATA,
      },
      {
        name: "Supplier",
        href: "/master-data/supplier",
        port: ALL_MODULE_PORTS.MASTER_DATA,
      },
      {
        name: "Gudang",
        href: "/master-data/gudang",
        port: ALL_MODULE_PORTS.MASTER_DATA,
      },
      {
        name: "COA",
        href: "/master-data/coa",
        port: ALL_MODULE_PORTS.MASTER_DATA,
      },
      {
        name: "User & Role",
        href: "/master-data/user",
        port: ALL_MODULE_PORTS.MASTER_DATA,
      },
    ],
  },
];
