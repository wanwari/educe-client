import { atom } from "jotai";
import { PointInterface } from "../Interfaces";

export const showTooltipState = atom(false);
export const activePointState = atom<PointInterface | null>(null);
