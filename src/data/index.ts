import { Category as prismaCategory } from "@prisma/client";

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
];
