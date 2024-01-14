export class BitLib {
    signed: boolean;
    bits: number;
    value: number;
    max: number;
    min: number;

    constructor(bits: number, signed: boolean) {
        this.bits = bits;
        this.signed = signed;
        this.value = 0;

        if(signed) {
            this.max = (1 << (bits - 1)) - 1;
            this.min = -(1 << (bits - 1));
        }else{
            this.max = (1 << bits) - 1;
            this.min = 0;
        }
    }

    setValue(value: number) {
        if(this.min <= value && value <= this.max){
            this.value = value;
        }else{
            if (value > this.max) {
                this.value = this.max;
            }else{
                this.value = this.min;
            }
        }
    }

    getValue(): number {
        return this.value;
    }

    getBit(position: number): boolean {
        return (this.value >> position) == 1;
    }

    setBit(position: number, value: boolean) {
        if (value) {
            this.value |= (1 << position);
        } else {
            this.value &= ~(1 << position);
        }
    }

}