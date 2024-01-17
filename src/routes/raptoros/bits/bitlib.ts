export class BitLib {
    signed: boolean;
    bits: boolean[];
    value: number;
    max: number;
    min: number;

    constructor(bits: boolean[], signed: boolean) {
        this.bits = bits;
        this.signed = signed;
        this.value = 0;

        if(signed) {
            this.max = 2 ** (bits.length - 1) - 1;
            this.min = -(2 ** (bits.length - 1));
        }else{
            this.max = 2 ** bits.length - 1;
            this.min = 0;
        }

        if(this.signed) {

        }else{
            this.bits.forEach((bit: boolean, index: number) => {
                this.value += bit ? 2 ** (index) : 0;
            });
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
}