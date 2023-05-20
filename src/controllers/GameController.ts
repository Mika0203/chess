import IUnit from "../interfaces/Unit.interface";

interface LineUnitData {
    [number: number]: IUnit | null;
}

interface L2Data {
    [number: number]: LineUnitData
}

const defaultUnitData: L2Data = {

    1: {
        1: { color: "W", type: "R" },
        2: { color: "W", type: "Kn" },
        3: { color: "W", type: "B" },
        4: { color: "W", type: "Q" },
        5: { color: "W", type: "K" },
        6: { color: "W", type: "B" },
        7: { color: "W", type: "Kn" },
        8: { color: "W", type: "R" },
    },
    2: {
        1: { color: "W", type: "P" },
        2: { color: "W", type: "P" },
        3: { color: "W", type: "P" },
        4: { color: "W", type: "P" },
        5: { color: "W", type: "P" },
        6: { color: "W", type: "P" },
        7: { color: "W", type: "P" },
        8: { color: "W", type: "P" },
    },
    7: {
        1: { color: "B", type: "P" },
        2: { color: "B", type: "P" },
        3: { color: "B", type: "P" },
        4: { color: "B", type: "P" },
        5: { color: "B", type: "P" },
        6: { color: "B", type: "P" },
        7: { color: "B", type: "P" },
        8: { color: "B", type: "P" },
    },
    8: {
        1: { color: "B", type: "R" },
        2: { color: "B", type: "Kn" },
        3: { color: "B", type: "B" },
        4: { color: "B", type: "Q" },
        5: { color: "B", type: "K" },
        6: { color: "B", type: "B" },
        7: { color: "B", type: "Kn" },
        8: { color: "B", type: "R" },
    },

}

export default class GameController {
    static _instance: GameController | null = null;
    static get instance() {
        if (this._instance == null)
            this._instance = new GameController();
        return this._instance!;
    }

    unitData = defaultUnitData
    getUnitDataByPosition({ x, y }: { x: number, y: number }) {
        console.log({ x, y, z: Object.hasOwn(this.unitData, y) })
        if (Object.hasOwn(this.unitData, y))
            return this.unitData[y][x];
    }

}