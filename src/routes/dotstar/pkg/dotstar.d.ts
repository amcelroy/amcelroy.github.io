/* tslint:disable */
/* eslint-disable */
/**
 * Initializes the chart with default waveforms and configures the mutex.
 */
export function init(): void;
/**
 * Returns a u32 array that represents ARGB values for the pixels on the Dotstar strip.
 */
export function argb_array(): Uint32Array;
/**
 * Update a waveforms
 */
export function update_waveform(waveform: number, params: WaveformParams): void;
/**
 * Update the chart in time
 */
export function tick(): void;
export function reset(): void;
export enum Endian {
  Big = 0,
  Little = 1,
}
export enum WaveformType {
  Sine = 0,
  Square = 1,
  Triangle = 2,
  Sawtooth = 3,
  Noise = 4,
}
export class WaveformParams {
  private constructor();
  free(): void;
  static new(dt: number, amplitude: number, freq: number, phase: number, offset: number): WaveformParams;
  get(): WaveformParams;
  set_dt(dt: number): void;
  set_amplitude(amplitude: number): void;
  set_freq(freq: number): void;
  set_phase(phase: number): void;
  set_offset(offset: number): void;
  set(w: WaveformParams): void;
  get_amplitude(): number;
  get_freq(): number;
  get_phase(): number;
  get_offset(): number;
  get_dt(): number;
  amplitude: number;
  freq: number;
  phase: number;
  offset: number;
  dt: number;
}
