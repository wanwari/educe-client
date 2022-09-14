import { atom } from "jotai";
import { PointInterface } from "../Interfaces";

export const showTooltip = atom(false);
export const activePoint = atom<PointInterface | null>(null);
