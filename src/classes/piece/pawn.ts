import Color from "../../interfaces/color.interface";
import PieceClass from "./_pieceClass";

export default class Pawn extends PieceClass {

    constructor({
        color,
    }: {
        color: Color
    }) {
        super({
            point: 1,
            color: color, type: "P",
            moveOffeset: {
                verHor: 2,
            }
        });
    }

    move() {
        this.moveOffset.verHor = 1;
    }
}