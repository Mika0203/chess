import Color from "../../interfaces/color.interface";
import PieceClass from "./_piece";

export default class King extends PieceClass {
    constructor({
        color,
    }: {
        color: Color
    }) {
        super({
            color: color, type: "K", m: {
                cross: 1,
                down: 1,
                left: 1,
                right: 1,
                up: 1,
            }
        });
    }
}