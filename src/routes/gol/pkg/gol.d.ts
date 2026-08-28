/* tslint:disable */
/* eslint-disable */

export class GolBoard {
    free(): void;
    [Symbol.dispose](): void;
    generation(): number;
    constructor();
    /**
     * Move to the next seed in the table.
     */
    next_seed(): void;
    population(): number;
    /**
     * RGBA bytes for the whole board, ready for `ImageData` / `putImageData`.
     * Returned as a copy because the engine's grid is not laid out as RGBA.
     */
    rgba(): Uint8Array;
    /**
     * Stamp seed `index` (wrapping) and clear the stall history.
     */
    seed(index: number): void;
    seedIndex(): number;
    seedName(): string;
    /**
     * Advance one generation. Returns a human-readable reason if the board
     * stalled on this step, otherwise `None`.
     */
    step(): string | undefined;
}

export function height(): number;

/**
 * Number of seeds in the table, for building a picker in JS.
 */
export function seedCount(): number;

/**
 * Name of seed `index`, for the picker.
 */
export function seedNameAt(index: number): string;

export function width(): number;
