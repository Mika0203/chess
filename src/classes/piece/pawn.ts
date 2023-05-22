import Color from "../../interfaces/color.interface";
import PieceClass from "./_piece";

export default class Pawn extends PieceClass {

    constructor({
        color,
    }: {
        color: Color
    }) {
        super({
            color: color, type: "P",
            moveOffeset: {
                up: 2,
            }
        });
    }

    move() {
        this.moveOffset.up = 1;
    }
}