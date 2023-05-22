import ICoordinates from "../../interfaces/Coordinates";
import Color from "../../interfaces/color.interface";
import PieceTypes from "../../interfaces/piece";

interface IMoveOffeset {
    up?: number | null,
    down?: number | null,
    right?: number | null,
    left?: number | null,
    cross?: number | null,
}

export default class PieceClass {
    type: PieceTypes;
    color: Color;
    position: ICoordinates | null = null;
    moveOffset: IMoveOffeset;

    constructor({
        color,
        type,
        m,
    }: {
        color: Color,
        type: PieceTypes,
        m: IMoveOffeset,
    }) {
        this.type = type;
        this.color = color;
        this.moveOffset = m;
    }

    toString() {
        return "hi";
    }
}