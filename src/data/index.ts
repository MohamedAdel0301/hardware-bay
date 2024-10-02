import {
  Category as prismaCategory,
  Brand as prismaBrand,
} from "@prisma/client";

export type Category = Omit<prismaCategory, "id">;

export const categories: Category[] = [
  {
    name: "Case",
    slug: "case",
    image: "/catalogues/case.png",
  },
  {
    name: "CPU",
    slug: "cpu",
    image: "/catalogues/cpu.png",
  },
  {
    name: "Motherboard",
    slug: "motherboard",
    image: "/catalogues/motherboard.png",
  },
  {
    name: "PSU",
    slug: "psu",
    image: "/catalogues/psu.png",
  },
  {
    name: "RAM",
    slug: "ram",
    image: "/catalogues/ram.png",
  },
  {
    name: "SSD",
    slug: "ssd",
    image: "/catalogues/ssd.png",
  },
  {
    name: "HDD",
    slug: "hdd",
    image: "/catalogues/hdd.png",
  },
  {
    name: "Keyboard",
    slug: "keyboard",
    image: "/catalogues/keyboard.png",
  },
  {
    name: "Mouse",
    slug: "mouse",
    image: "/catalogues/mouse.png",
  },
  {
    name: "Monitor",
    slug: "monitor",
    image: "/catalogues/monitor.png",
  },
  {
    name: "Headset",
    slug: "headset",
    image: "/catalogues/headset.png",
  },
  {
    name: "Controller",
    slug: "controller",
    image: "/catalogues/controller.png",
  },
  {
    name: "Speakers",
    slug: "speakers",
    image: "/catalogues/speakers.png",
  },
  {
    name: "Webcam",
    slug: "webcam",
    image: "/catalogues/webcam.png",
  },
  {
    name: "Thermal Paste",
    slug: "thermal-paste",
    image: "/catalogues/thermal-paste.png",
  },
  {
    name: "Cooling Fan",
    slug: "cooling-fan",
    image: "/catalogues/cooling-fan.png",
  },
  {
    name: "Graphics Card",
    slug: "gpu",
    image: "/catalogues/gpu.png",
  },
  {
    name: "Power Strip",
    slug: "power-strip",
    image: "/catalogues/power-strip.png",
  },
  {
    name: "external-SSD",
    slug: "external-ssd",
    image: "/catalogues/external-ssd.png",
  },
  {
    name: "External HDD",
    slug: "external-hdd",
    image: "/catalogues/external-hdd.png",
  },
  {
    name: "Docking Station",
    slug: "docking-station",
    image: "/catalogues/docking-station.png",
  },
  {
    name: "UPS",
    slug: "ups",
    image: "/catalogues/ups.png",
  },
  {
    name: "Network Adapter",
    slug: "network-adapter",
    image: "/catalogues/network-adapter.png",
  },
  {
    name: "Printer",
    slug: "printer",
    image: "/catalogues/printer.png",
  },
];

export type Brand = Omit<prismaBrand, "id" | "logoUrl" | "websiteUrl">;

export const brands: Brand[] = [
  { name: "ASUS", slug: "asus" },
  { name: "MSI", slug: "msi" },
  { name: "Gigabyte", slug: "gigabyte" },
  { name: "EVGA", slug: "evga" },
  { name: "Corsair", slug: "corsair" },
  { name: "NZXT", slug: "nzxt" },
  { name: "Cooler Master", slug: "cooler-master" },
  { name: "Noctua", slug: "noctua" },
  { name: "Thermaltake", slug: "thermaltake" },
  { name: "Intel", slug: "intel" },
  { name: "AMD", slug: "amd" },
  { name: "NVIDIA", slug: "nvidia" },
  { name: "Zotac", slug: "zotac" },
  { name: "ASRock", slug: "asrock" },
  { name: "Be Quiet!", slug: "be-quiet" },
  { name: "G.Skill", slug: "gskill" },
  { name: "Patriot", slug: "patriot" },
  { name: "Crucial", slug: "crucial" },
  { name: "Seagate", slug: "seagate" },
  { name: "Western Digital", slug: "western-digital" },
  { name: "Kingston", slug: "kingston" },
  { name: "SilverStone", slug: "silverstone" },
];
