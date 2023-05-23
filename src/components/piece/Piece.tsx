import styled from "styled-components"
import { useMemo } from "react";
import PieceClass from "../../classes/piece/_pieceClass";

const StyledPiece = styled.div<{ color: string, type: number, isShadow: boolean, isUnderAttack: boolean }>`
    background-image: url('/images/sprite.png');
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 600%;
    position: absolute;
    opacity: ${e => e.isShadow ? 0.3 : 1};
    background-position-x: ${e => `calc(100% * (${e.type}/5))`} ;
    background-position-y: ${e => `calc(100% * (${e.color === "W" ? 0 : 2}/2))`} ;
    background-color: ${e => e.isUnderAttack ? "red" : "transparent"};
`;



export default function Piece({
    piece,
    isUnderAttack = false,
    isShadow = false,
}: {
    piece: PieceClass,
    isShadow?: boolean,
    isUnderAttack?: boolean,
}) {
    const type = useMemo(() => {
        switch (piece.type) {
            case "K": return 0;
            case "Q": return 1;
            case "B": return 2;
            case "Kn": return 3;
            case "R": return 4;
            case "P": return 5;
            default: return 0;
        }
    }, [piece.type]);

    return <StyledPiece type={type} color={piece.color} isShadow={isShadow} isUnderAttack={isUnderAttack}>
    </StyledPiece>
}