import Color from "../../interfaces/color.interface";
import PieceClass from "./_pieceClass";

export default class Rook extends PieceClass {
    constructor({
        color,
    }: {
        color: Color
    }) {
        super({
            point: 5,
            color: color,
            type: "R",
            moveOffeset: {
                verHor: 8,
            }
        });
    }
}