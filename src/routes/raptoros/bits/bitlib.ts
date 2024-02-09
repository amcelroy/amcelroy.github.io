export interface IBitsChanged {
    bits: boolean[],
    startBit: number,
}

export class BitLib {
    signed: boolean;
    bitArray: boolean[];
    value: bigint;
    bits: number;

    constructor(bits: number, signed: boolean) {
        this.bits = bits;
        this.signed = signed;
        this.value = BigInt(0); 
        this.bitArray = Array(false);
    }

    setValue(value: bigint) {
        this.value = value;

        for(let i = 0; i < 8; i++){
            this.bitArray[i] = (this.value >> BigInt(i)) & BigInt(1) ? true : false;
        }
    }

    setBits(bits: boolean[]) {
        this.bitArray = bits;

        this.value = BigInt(0);
        this.bitArray.forEach((bit: boolean, index: number) => {
            this.value += bit ? BigInt(2) ** BigInt((index)) : BigInt(0);
        });
    }

    setValueHex(hex: string) {
        this.value = BigInt(Number('0x' + hex));
        return this;
    }

    getValue(): BigInt {
        return this.value;
    }

    getHex(): string {
        return this.value.toString(16).padStart(2, '0');
    }

    getBits(): boolean[] {
        return this.bitArray;
    }
}