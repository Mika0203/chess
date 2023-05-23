import { useMemo } from "react";
import { useAppSelector } from "../redux/hooks";
import PieceClass from "../classes/piece/_pieceClass";

export default function usePieceValue() {
    const pieces = useAppSelector(state => state.boardDataSlice.pieceData);

    return useMemo(() => {
        const points = {
            "W": 0,
            "B": 0,
        }
        Object.values(pieces).forEach((c) => {
            Object.values(c).forEach((c2) => {
                if (c2 === null) return;
                const piece = c2 as PieceClass;
                if (piece.color === "B") {
                    points.B += piece.point;
                } else {
                    points.W += piece.point;
                }
            });
        });
        return points
    }, [pieces]);
}