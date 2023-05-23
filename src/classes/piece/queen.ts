import Color from "../../interfaces/color.interface";
import PieceClass from "./_piece";

export default class Queen extends PieceClass {
    constructor({
        color,
    }: {
        color: Color
    }) {
        super({
            point: 9,
            color: color, type: "Q", moveOffeset: {
                cross: 8,
                verHor: 8,
            }
        });
    }
}