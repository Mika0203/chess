import ICoordinates from "../../interfaces/Coordinates";
import Color from "../../interfaces/color.interface";
import PieceTypes from "../../interfaces/piece";

interface IMoveOffeset {
    verHor?: number | null,
    cross?: number | null,
}

export default class PieceClass {
    isFirstMoved: boolean = false;
    type: PieceTypes;
    color: Color;
    point: number;
    position: ICoordinates | null = null;
    moveOffset: IMoveOffeset;

    constructor({
        color,
        type,
        moveOffeset,
        point,
    }: {
        color: Color,
        type: PieceTypes,
        moveOffeset: IMoveOffeset,
        point: number,
    }) {
        this.type = type;
        this.color = color;
        this.moveOffset = moveOffeset;
        this.point = point;
    }

    toString() {
        return "hi";
    }

    move() {
        this.isFirstMoved = true;
    }
}