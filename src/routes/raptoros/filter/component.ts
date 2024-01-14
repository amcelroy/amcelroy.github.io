enum ComponentType {
    Resistor,
    Capacitor,
    Inductor,
    Battery,
    Sinusoid,
}

enum ComponentOrientation {
    Horizontal,
    Vertical,
}

const resistor_horz: string[][] = [
    [" ", " ", "R", "!", "@", "#", " ", ""],
    ["-", "-", "/", `\\`, `/`, `\\`, '-', "-"],
    [" ", " ", " ", " ", " ", " ", " ", " "],
];

const resistor_vert: string[][] = [
    [" ", "|", " "],
    [" ", "|", " "],
    [" ", "/", "R"],
    [" ", "\\", "!"],
    [" ", "/", "@"],
    [" ", "\\", " "],
    [" ", "|", " "],
    [" ", "|", " "],
];


class Component {
    type: ComponentType;
    value: number;
    orientation: ComponentOrientation;
    schematic: string[][];

    origin?: [number, number];

    in_node?: any;
    out_node?: any;
        
    constructor(type: ComponentType, value: number, orientation: ComponentOrientation) {
        this.type = type;
        this.value = value;
        this.orientation = orientation;
        switch (type) {
            case ComponentType.Resistor:
                if(orientation == ComponentOrientation.Vertical) {
                    this.schematic = resistor_vert;
                } else {
                    this.schematic = resistor_horz;
                }
                break;

            default:
                this.schematic = [
                    []
                ];
                break;

        }
    }

    get_size(): [number, number] {
        return [this.schematic[0].length, this.schematic.length];
    }

    set_origin(origin: [number, number]) {
        this.origin = origin;
    }

    get_origin(): [number, number] | undefined {
        return this.origin;
    }
}
