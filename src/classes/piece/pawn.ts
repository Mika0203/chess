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
            m: {
                up: 2,
            }
        });
    }
}