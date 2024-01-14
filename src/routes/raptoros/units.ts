export const UNITS_FARAD = new Map<string, number>([
    ["pF", 1e-12],
    ["nF", 1e-9],
    ["μF", 1e-6],
    ["mF", 1e-3],
    ["F", 1],
]);

export const UNITS_OHM = new Map<string, number>([
    ["uΩ", 1e-6],
    ["mΩ", 1e-3],
    ["Ω", 1],
    ["kΩ", 1e3],
    ["MΩ", 1e6],
    ["GΩ", 1e9],
]);

export const UNITS_HENRIES = new Map<string, number>([
    ["H", 1],
    ["mH", 1e-3],
    ["μH", 1e-6],
    ["nH", 1e-9],
    ["pH", 1e-12],
]);