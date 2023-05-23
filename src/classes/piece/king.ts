import Color from "../../interfaces/color.interface";
import PieceClass from "./_pieceClass";

export default class King extends PieceClass {
    constructor({
        color,
    }: {
        color: Color
    }) {
        super({
            point: 0,
            color: color, type: "K", moveOffeset: {
                cross: 1,
                verHor: 1,
            }
        });
    }
}