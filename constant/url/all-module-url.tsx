export const PORTAL_LOGIN = "http://localhost:3000/login";

import Widget5Outline from "@iconify-react/solar/widget-5-outline";
import DatabaseOutline from "@iconify-react/solar/database-outline";
import WalletMoneyOutline from "@iconify-react/solar/wallet-money-outline";
import DocumentsOutline from "@iconify-react/solar/documents-outline";

export const ALL_MODULE_URL = [
  {
    MODULE_CODE: "PORTAL",
    TITLE: "Portal",
    DESCRIPTION: "Portal utama untuk mengakses semua modul",
    URL: "http://localhost:3000/",
    ICON: <Widget5Outline className="size-6" />,
    DISABLED: false,
  },
  {
    MODULE_CODE: "MASTER_DATA",
    TITLE: "Master Data",
    DESCRIPTION: "Modul pengelolaan data master",
    URL: "http://localhost:3001/",
    ICON: <DatabaseOutline className="size-6" />,
    DISABLED: false,
  },
  {
    MODULE_CODE: "ACCOUNTING",
    TITLE: "Accounting",
    DESCRIPTION: "Modul pengelolaan akuntansi dan keuangan",
    URL: "http://localhost:3002/",
    ICON: <DocumentsOutline className="size-6" />,
    DISABLED: false,
  },
  {
    MODULE_CODE: "FINANCE",
    TITLE: "Finance",
    DESCRIPTION: "Modul pengelolaan keuangan dan laporan keuangan",
    URL: "http://localhost:3003/",
    ICON: <WalletMoneyOutline className="size-6" />,
    DISABLED: true,
  },
  {
    MODULE_CODE: "PURCHASING",
    TITLE: "Purchasing",
    DESCRIPTION: "Modul pengelolaan pembelian dan supplier",
    URL: "http://localhost:3004/",
    ICON: <DocumentsOutline className="size-6" />,
    DISABLED: true,
  },
  {
    MODULE_CODE: "INVENTORY",
    TITLE: "Inventory",
    DESCRIPTION: "Modul pengelolaan inventaris dan stok",
    URL: "http://localhost:3005/",
    ICON: <DatabaseOutline className="size-6" />,
    DISABLED: true,
  },
  {
    MODULE_CODE: "SALES",
    TITLE: "Sales",
    DESCRIPTION: "Modul pengelolaan penjualan dan pelanggan",
    URL: "http://localhost:3006/",
    ICON: <WalletMoneyOutline className="size-6" />,
    DISABLED: true,
  },
  {
    MODULE_CODE: "PAYROLL",
    TITLE: "Payroll",
    DESCRIPTION: "Modul pengelolaan gaji dan tenaga kerja",
    URL: "http://localhost:3007/",
    ICON: <DatabaseOutline className="size-6" />,
    DISABLED: true,
  },
];
