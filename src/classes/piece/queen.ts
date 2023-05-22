import Color from "../../interfaces/color.interface";
import PieceClass from "./_piece";

export default class Queen extends PieceClass {
    constructor({
        color,
    }: {
        color: Color
    }) {
        super({
            color: color, type: "Q", moveOffeset: {
                cross: 8,
                down: 8,
                left: 8,
                right: 8,
                up: 8,
            }
        });
    }
}