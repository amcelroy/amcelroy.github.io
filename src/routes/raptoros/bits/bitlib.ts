export interface IBitsChanged {
    bits: boolean[],
    startBit: number,
}

export class BitLib {
    signed: boolean;
    bitArray: boolean[];
    value: number;
    bits: number;

    constructor(bits: number, signed: boolean) {
        this.bits = bits;
        this.signed = signed;
        this.value = 0; 
        this.bitArray = Array(false);
    }

    setValue(value: number) {
        this.value = value;

        for(let i = 0; i < 8; i++){
            this.bitArray[i] = (value >> i) & 1 ? true : false;
        }
    }

    setBits(bits: boolean[]) {
        this.bitArray = bits;

        this.value = 0;
        this.bitArray.forEach((bit: boolean, index: number) => {
            this.value += bit ? 2 ** (index) : 0;
        });
    }

    setValueHex(hex: string) {
        this.value = Number('0x' + hex);
        return this;
    }

    getValue(): number {
        return this.value;
    }

    getHex(): string {
        return this.value.toString(16).padStart(2, '0');
    }

    getBits(): boolean[] {
        return this.bitArray;
    }
}