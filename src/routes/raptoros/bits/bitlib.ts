export interface IBitsChanged {
    bits: boolean[],
    startBit: number,
}

export class BitLib {
    signed: boolean;
    bits: boolean[];
    value: number;

    constructor(bits: boolean[], signed: boolean) {
        this.signed = signed;
        this.value = 0;
        this.bits = bits;

        this.setBits(bits);
    }

    setValue(value: number) {
        this.value = value;

        for(let i = 0; i < 8; i++){
            this.bits[i] = (value >> i) & 1 ? true : false;
        }
    }

    setBits(bits: boolean[]) {
        this.bits = bits;

        this.value = 0;
        this.bits.forEach((bit: boolean, index: number) => {
            this.value += bit ? 2 ** (index) : 0;
        });
    }

    getValue(): number {
        return this.value;
    }

    getBits(): boolean[] {
        return this.bits;
    }
}