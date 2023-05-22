import ICoordinates from "../interfaces/Coordinates";

export default class GameController {
    static _instance: GameController | null = null;

    currentSelectedCoordinates: ICoordinates | null = null;

    static get instance() {
        if (this._instance == null)
            this._instance = new GameController();
        return this._instance!;
    }

    getPieceDataByPosition(coordinates: ICoordinates) {
        coordinates.x += 1;
        coordinates.y = 8 - coordinates.y;

        // if (Object.hasOwn(this.pieceData, coordinates.y))
        //     return this.pieceData[coordinates.y][coordinates.x];
    }

    onClickBlock(coordinates: ICoordinates) {
        this.currentSelectedCoordinates = coordinates;
        return this.getPieceDataByPosition(coordinates);
    }

}