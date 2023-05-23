import { useMemo } from "react";
import PieceClass from "../classes/piece/_piece";
import ICoordinates from "../interfaces/Coordinates";

export default function useMovePoints({
    selectedPiece,
    selectedBlock,
    getPiece,
}: {
    selectedPiece: PieceClass | null,
    selectedBlock: ICoordinates | null,
    getPiece: (coordinates: ICoordinates) => PieceClass | null,
}) {
    return useMemo<ICoordinates[]>(() => {
        if (selectedPiece === null || selectedPiece === undefined) return [];
        if (selectedBlock === null) return [];

        const arr: ICoordinates[] = [];

        const getBreakCase = (coordinates: ICoordinates) => {
            const piece = getPiece(coordinates);

            if (piece) return true;
        }

        // vertical
        if (selectedPiece.moveOffset.verHor != null) {
            // up
            for (let i = 1; i <= selectedPiece.moveOffset.verHor; i++) {
                if (i === 0) continue;
                const toCoordinates = {
                    x: selectedBlock.x,
                    y: selectedBlock.y + (i * (selectedPiece.color === "B" ? -1 : 1)),
                };

                arr.push(toCoordinates);
                if (getBreakCase(toCoordinates)) break;
            }

            //down 
            if (selectedPiece.type !== "P")
                for (let i = 1; i <= selectedPiece.moveOffset.verHor; i++) {
                    if (i === 0) continue;
                    const toCoordinates = {
                        x: selectedBlock.x,
                        y: selectedBlock.y - i,
                    };
                    arr.push(toCoordinates);
                    if (getBreakCase(toCoordinates)) break;
                }
        }

        // horizontal
        if (selectedPiece.moveOffset.verHor != null && selectedPiece.type !== "P") {
            // right

            for (let i = 1; i <= selectedPiece.moveOffset.verHor; i++) {
                if (i === 0) continue;
                const toCoordinates = {
                    x: selectedBlock.x + i,
                    y: selectedBlock.y,
                };
                arr.push(toCoordinates);
                if (getBreakCase(toCoordinates)) break;
            }

            //down 
            for (let i = 1; i <= selectedPiece.moveOffset.verHor; i++) {
                if (i === 0) continue;
                const toCoordinates = {
                    x: selectedBlock.x - i,
                    y: selectedBlock.y,
                };
                arr.push(toCoordinates);
                if (getBreakCase(toCoordinates)) break;
            }
        }

        // right up
        for (let i = 1; i <= (selectedPiece.moveOffset.cross ?? 0); i++) {
            const toCoordinates = {
                x: selectedBlock.x + i,
                y: selectedBlock.y + i,
            };
            arr.push(toCoordinates);
            if (getBreakCase(toCoordinates)) break;
        }

        // left up
        for (let i = 1; i <= (selectedPiece.moveOffset.cross ?? 0); i++) {
            const toCoordinates = {
                x: selectedBlock.x - i,
                y: selectedBlock.y + i
            };
            arr.push(toCoordinates);
            if (getBreakCase(toCoordinates)) break;
        }

        // left down
        for (let i = 1; i <= (selectedPiece.moveOffset.cross ?? 0); i++) {
            const toCoordinates = {
                x: selectedBlock.x - i,
                y: selectedBlock.y - i
            };
            arr.push(toCoordinates);
            if (getBreakCase(toCoordinates)) break;
        }

        // right down
        for (let i = 1; i <= (selectedPiece.moveOffset.cross ?? 0); i++) {
            const toCoordinates = {
                x: selectedBlock.x + i,
                y: selectedBlock.y - i
            };
            arr.push(toCoordinates);
            if (getBreakCase(toCoordinates)) break;
        }

        return arr.filter(e => e.x >= 1 && e.y >= 1 && e.x <= 8 && e.y <= 8);

    }, [getPiece, selectedPiece, selectedBlock]);
}