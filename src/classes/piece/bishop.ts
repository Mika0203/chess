import Color from "../../interfaces/color.interface";
import PieceClass from "./_piece";

export default class Bishop extends PieceClass {
    constructor({
        color,
    }: {
        color: Color
    }) {
        super({
            color: color, type: "B", moveOffeset: {
                cross: 8,
            }
        });
    }
}