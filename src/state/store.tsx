import { atom } from "jotai";
import { latLng, LatLng } from "leaflet";
import { PointInterface } from "../Interfaces";

export const showTooltipState = atom(false);
export const activePointState = atom<PointInterface | null>(null);
export const mapCenterState = atom<LatLng>(latLng(0, 0));
