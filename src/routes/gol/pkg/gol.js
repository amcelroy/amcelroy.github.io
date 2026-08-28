/* @ts-self-types="./gol.d.ts" */
import * as wasm from "./gol_bg.wasm";
import { __wbg_set_wasm } from "./gol_bg.js";

__wbg_set_wasm(wasm);
wasm.__wbindgen_start();
export {
    GolBoard, height, seedCount, seedNameAt, width
} from "./gol_bg.js";
