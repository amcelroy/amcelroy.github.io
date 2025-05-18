let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}


function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachedDataViewMemory0 = null;

function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8ArrayMemory0 = null;

function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}
/**
 * Initializes the chart with default waveforms and configures the mutex.
 */
export function init() {
    wasm.init();
}

/**
 * Returns a u32 array that represents ARGB values for the pixels on the Dotstar strip.
 * @returns {Uint32Array}
 */
export function argb_array() {
    const ret = wasm.argb_array();
    return ret;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
}
/**
 * Update a waveforms
 * @param {number} waveform
 * @param {WaveformParams} params
 */
export function update_waveform(waveform, params) {
    _assertClass(params, WaveformParams);
    var ptr0 = params.__destroy_into_raw();
    wasm.update_waveform(waveform, ptr0);
}

/**
 * Update the chart in time
 */
export function tick() {
    wasm.tick();
}

export function reset() {
    wasm.reset();
}

/**
 * @enum {0 | 1}
 */
export const Endian = Object.freeze({
    Big: 0, "0": "Big",
    Little: 1, "1": "Little",
});
/**
 * @enum {0 | 1}
 */
export const WaveformMode = Object.freeze({
    Dynamic: 0, "0": "Dynamic",
    InPlace: 1, "1": "InPlace",
});
/**
 * Different types of waveforms that can be generated.
 * @enum {0 | 1 | 2 | 3 | 4 | 5}
 */
export const WaveformType = Object.freeze({
    Sine: 0, "0": "Sine",
    Square: 1, "1": "Square",
    Triangle: 2, "2": "Triangle",
    Sawtooth: 3, "3": "Sawtooth",
    Noise: 4, "4": "Noise",
    Bounce: 5, "5": "Bounce",
});

const WaveformParamsFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_waveformparams_free(ptr >>> 0, 1));
/**
 * Parameters for calculating a waveform.
 */
export class WaveformParams {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(WaveformParams.prototype);
        obj.__wbg_ptr = ptr;
        WaveformParamsFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        WaveformParamsFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_waveformparams_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    get amplitude() {
        const ret = wasm.__wbg_get_waveformparams_amplitude(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set amplitude(arg0) {
        wasm.__wbg_set_waveformparams_amplitude(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get freq() {
        const ret = wasm.__wbg_get_waveformparams_freq(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set freq(arg0) {
        wasm.__wbg_set_waveformparams_freq(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get phase() {
        const ret = wasm.__wbg_get_waveformparams_phase(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set phase(arg0) {
        wasm.__wbg_set_waveformparams_phase(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get offset() {
        const ret = wasm.__wbg_get_waveformparams_offset(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set offset(arg0) {
        wasm.__wbg_set_waveformparams_offset(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get dt() {
        const ret = wasm.__wbg_get_waveformparams_dt(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set dt(arg0) {
        wasm.__wbg_set_waveformparams_dt(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {WaveformType}
     */
    get waveform() {
        const ret = wasm.__wbg_get_waveformparams_waveform(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {WaveformType} arg0
     */
    set waveform(arg0) {
        wasm.__wbg_set_waveformparams_waveform(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {WaveformMode}
     */
    get mode() {
        const ret = wasm.__wbg_get_waveformparams_mode(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {WaveformMode} arg0
     */
    set mode(arg0) {
        wasm.__wbg_set_waveformparams_mode(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} dt
     * @param {number} amplitude
     * @param {number} freq
     * @param {number} phase
     * @param {number} offset
     * @param {WaveformType} waveform
     * @param {WaveformMode} mode
     * @returns {WaveformParams}
     */
    static new(dt, amplitude, freq, phase, offset, waveform, mode) {
        const ret = wasm.waveformparams_new(dt, amplitude, freq, phase, offset, waveform, mode);
        return WaveformParams.__wrap(ret);
    }
    /**
     * Copy the parameters to a new struct.
     * @returns {WaveformParams}
     */
    get() {
        const ret = wasm.waveformparams_get(this.__wbg_ptr);
        return WaveformParams.__wrap(ret);
    }
}

export function __wbg_buffer_609cc3eee51ed158(arg0) {
    const ret = arg0.buffer;
    return ret;
};

export function __wbg_new_e3b321dcfef89fc7(arg0) {
    const ret = new Uint32Array(arg0);
    return ret;
};

export function __wbg_newwithbyteoffsetandlength_f1dead44d1fc7212(arg0, arg1, arg2) {
    const ret = new Uint32Array(arg0, arg1 >>> 0, arg2 >>> 0);
    return ret;
};

export function __wbindgen_init_externref_table() {
    const table = wasm.__wbindgen_export_0;
    const offset = table.grow(4);
    table.set(0, undefined);
    table.set(offset + 0, undefined);
    table.set(offset + 1, null);
    table.set(offset + 2, true);
    table.set(offset + 3, false);
    ;
};

export function __wbindgen_memory() {
    const ret = wasm.memory;
    return ret;
};

export function __wbindgen_number_get(arg0, arg1) {
    const obj = arg1;
    const ret = typeof(obj) === 'number' ? obj : undefined;
    getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
};

export function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

