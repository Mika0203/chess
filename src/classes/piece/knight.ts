import Color from "../../interfaces/color.interface";
import PieceClass from "./_piece";

export default class Knight extends PieceClass {
    constructor({
        color,
    }: {
        color: Color
    }) {
        super({
            point: 3,
            color: color, type: "Kn", moveOffeset: {
                verHor: 1,
                cross: 1,
            }
        });
    }
}