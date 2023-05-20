import styled from "styled-components"
import IUnit from "../../interfaces/Unit.interface";
import { useMemo } from "react";

const StyledUnit = styled.div<{ color: string, type: number }>`
    background-image: url('/images/sprite.png');
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 600%;
    background-position-x: ${e => `calc(100% * (${e.type}/5))`} ;
    background-position-y: ${e => `calc(100% * (${e.color === "W" ? 0 : 2}/2))`} ;
`;



export default function Unit(data: IUnit) {
    const type = useMemo(() => {
        switch (data.type) {
            case "K": return 0;
            case "Q": return 1;
            case "B": return 2;
            case "Kn": return 3;
            case "R": return 4;
            case "P": return 5;
            default: return 0;
        }
    }, [data.type]);

    return <StyledUnit type={type} color={data.color}>
    </StyledUnit>
}