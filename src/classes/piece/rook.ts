import Color from "../../interfaces/color.interface";
import PieceClass from "./_piece";

export default class Rook extends PieceClass {
    constructor({
        color,
    }: {
        color: Color
    }) {
        super({
            color: color, type: "R", m: {
                down: -1,
                left: -1,
                right: -1,
                up: -1,
            }
        });
    }
}