import { createSlice } from "@reduxjs/toolkit";
import ICoordinates from "../../interfaces/Coordinates";
import Pawn from "../../classes/piece/pawn";
import PieceClass from "../../classes/piece/_piece";
import Rook from "../../classes/piece/rook";
import Knight from "../../classes/piece/knight";
import Bishop from "../../classes/piece/bishop";
import Queen from "../../classes/piece/queen";
import King from "../../classes/piece/king";
import { stat } from "fs";


interface LinePieceData {
    [number: number]: null | PieceClass;
}

interface L2Data {
    [number: number]: LinePieceData
}

const defaultPieceData: L2Data = {
    1: {
        1: new Rook({ color: "W" }),
        2: new Knight({ color: "W" }),
        3: new Bishop({ color: "W" }),
        4: new Queen({ color: "W" }),
        5: new King({ color: "W" }),
        6: new Bishop({ color: "W" }),
        7: new Knight({ color: "W" }),
        8: new Rook({ color: "W" }),
    },
    2: {
        1: new Pawn({ color: "W" }),
        2: new Pawn({ color: "W" }),
        3: new Pawn({ color: "W" }),
        4: new Pawn({ color: "W" }),
        5: new Pawn({ color: "W" }),
        6: new Pawn({ color: "W" }),
        7: new Pawn({ color: "W" }),
        8: new Pawn({ color: "W" }),
    },
    7: {
        1: new Pawn({ color: "B" }),
        2: new Pawn({ color: "B" }),
        3: new Pawn({ color: "B" }),
        4: new Pawn({ color: "B" }),
        5: new Pawn({ color: "B" }),
        6: new Pawn({ color: "B" }),
        7: new Pawn({ color: "B" }),
        8: new Pawn({ color: "B" }),
    },
    8: {
        1: new Rook({ color: "B" }),
        2: new Knight({ color: "B" }),
        3: new Bishop({ color: "B" }),
        4: new Queen({ color: "B" }),
        5: new King({ color: "B" }),
        6: new Bishop({ color: "B" }),
        7: new Knight({ color: "B" }),
        8: new Rook({ color: "B" }),
    },

}

const initialState: {
    text: string | null,
    selectedBlock: ICoordinates | null,
    selectedPiece: PieceClass | null,
    pieceData: L2Data,
} = {
    text: null,
    selectedBlock: null,
    selectedPiece: null,
    pieceData: defaultPieceData
}

const boardDataSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        onClick: (state, { payload }: {
            payload: ICoordinates,
        }) => {

            if (Object.hasOwn(state.pieceData, payload.y)) {
                state.selectedBlock = payload;
                state.selectedPiece = state.pieceData[payload.y][payload.x];
            }
            else {
                state.selectedPiece = null;
                state.selectedBlock = null;
            }

        }
    }
})

export const { onClick } = boardDataSlice.actions;
export default boardDataSlice.reducer;