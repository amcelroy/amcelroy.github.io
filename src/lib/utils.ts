export class Color {
    abgr: number;
    b: number;
    g: number;
    r: number;
    a: number;

    constructor() {
        this.abgr = 0;
        this.b = 0;
        this.g = 0;
        this.r = 0;
        this.a = 0;
    }

    red(): number {    
        return this.r;
    }

    green(): number {
        return this.g;
    }

    blue(): number {
        return this.b;
    }

    alpha(): number {
        return this.a;
    }

    from_u32(abgr: number): Color {
        this.abgr = abgr;
        [this.a, this.r, this.g, this.b] = this.u32_to_argb(abgr);
        return this;
    }

    from_argb(r: number, g: number, b: number, a: number): Color {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        return this;
    }

    u32_to_argb(u32: number): [number, number, number, number] {
        const a = (u32 >> 24) & 0xff;
        const b = (u32 >> 16) & 0xff;
        const g = (u32 >> 8) & 0xff;
        const r = u32 & 0xff;
        return [a, r, g, b];
    }

    abgr_to_u32(a: number, r: number, g: number, b: number): number {
        return (a & 0xFF << 24) | (b & 0xFF << 16) | (g & 0xFF << 8) | r & 0xFF;
    }

    to_css_string(): string {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a / 255})`;
    }

    to_blue_css_string(): string {
        return `rgba(0, 0, ${this.b}, ${this.a / 255})`;
    }

    to_red_css_string(): string {
        return `rgba(${this.r}, 0, 0, ${this.a / 255})`;
    }

    to_green_css_string(): string {
        return `rgba(0, ${this.g}, 0, ${this.a / 255})`;
    }
}