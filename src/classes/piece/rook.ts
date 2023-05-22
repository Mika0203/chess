import Color from "../../interfaces/color.interface";
import PieceClass from "./_piece";

export default class Rook extends PieceClass {
    constructor({
        color,
    }: {
        color: Color
    }) {
        super({
            color: color,
            type: "R",
            moveOffeset: {
                down: 8,
                left: 8,
                right: 8,
                up: 8,
            }
        });
    }
}