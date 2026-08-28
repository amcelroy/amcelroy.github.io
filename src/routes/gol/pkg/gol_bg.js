export class GolBoard {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        GolBoardFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_golboard_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    generation() {
        const ret = wasm.golboard_generation(this.__wbg_ptr);
        return ret >>> 0;
    }
    constructor() {
        const ret = wasm.golboard_new();
        this.__wbg_ptr = ret;
        GolBoardFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * Move to the next seed in the table.
     */
    next_seed() {
        wasm.golboard_next_seed(this.__wbg_ptr);
    }
    /**
     * @returns {number}
     */
    population() {
        const ret = wasm.golboard_population(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * RGBA bytes for the whole board, ready for `ImageData` / `putImageData`.
     * Returned as a copy because the engine's grid is not laid out as RGBA.
     * @returns {Uint8Array}
     */
    rgba() {
        const ret = wasm.golboard_rgba(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * Stamp seed `index` (wrapping) and clear the stall history.
     * @param {number} index
     */
    seed(index) {
        wasm.golboard_seed(this.__wbg_ptr, index);
    }
    /**
     * @returns {number}
     */
    seedIndex() {
        const ret = wasm.golboard_seedIndex(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {string}
     */
    seedName() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.golboard_seedName(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Advance one generation. Returns a human-readable reason if the board
     * stalled on this step, otherwise `None`.
     * @returns {string | undefined}
     */
    step() {
        const ret = wasm.golboard_step(this.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getStringFromWasm0(ret[0], ret[1]);
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
}
if (Symbol.dispose) GolBoard.prototype[Symbol.dispose] = GolBoard.prototype.free;

/**
 * @returns {number}
 */
export function height() {
    const ret = wasm.height();
    return ret >>> 0;
}

/**
 * Number of seeds in the table, for building a picker in JS.
 * @returns {number}
 */
export function seedCount() {
    const ret = wasm.seedCount();
    return ret >>> 0;
}

/**
 * Name of seed `index`, for the picker.
 * @param {number} index
 * @returns {string}
 */
export function seedNameAt(index) {
    let deferred1_0;
    let deferred1_1;
    try {
        const ret = wasm.seedNameAt(index);
        deferred1_0 = ret[0];
        deferred1_1 = ret[1];
        return getStringFromWasm0(ret[0], ret[1]);
    } finally {
        wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
}

/**
 * @returns {number}
 */
export function width() {
    const ret = wasm.width();
    return ret >>> 0;
}
export function __wbg___wbindgen_throw_bb96b2010945f0bc(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
}
export function __wbindgen_init_externref_table() {
    const table = wasm.__wbindgen_externrefs;
    const offset = table.grow(4);
    table.set(0, undefined);
    table.set(offset + 0, undefined);
    table.set(offset + 1, null);
    table.set(offset + 2, true);
    table.set(offset + 3, false);
}
const GolBoardFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_golboard_free(ptr, 1));

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

function getStringFromWasm0(ptr, len) {
    return decodeText(ptr >>> 0, len);
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}


let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}
