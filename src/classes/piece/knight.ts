import Color from "../../interfaces/color.interface";
import PieceClass from "./_piece";

export default class Knight extends PieceClass {
    constructor({
        color,
    }: {
        color: Color
    }) {
        super({
            color: color, type: "Kn", moveOffeset: {
                down: 1,
                left: 1,
                right: 1,
                up: 1,
                cross: 1,
            }
        });
    }
}