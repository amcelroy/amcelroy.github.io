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
export enum WaveformMode {
  Dynamic = 0,
  InPlace = 1,
}
/**
 * Different types of waveforms that can be generated.
 */
export enum WaveformType {
  Sine = 0,
  Square = 1,
  Triangle = 2,
  Sawtooth = 3,
  Noise = 4,
  Bounce = 5,
}
/**
 * Parameters for calculating a waveform.
 */
export class WaveformParams {
  private constructor();
  free(): void;
  static new(dt: number, amplitude: number, freq: number, phase: number, offset: number, waveform: WaveformType, mode: WaveformMode): WaveformParams;
  /**
   * Copy the parameters to a new struct.
   */
  get(): WaveformParams;
  amplitude: number;
  freq: number;
  phase: number;
  offset: number;
  dt: number;
  waveform: WaveformType;
  mode: WaveformMode;
}
