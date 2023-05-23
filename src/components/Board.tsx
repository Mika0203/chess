import { styled } from "styled-components"
import Piece from "./piece/Piece";
import ICoordinates from "../interfaces/Coordinates";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { move, onClick } from "../redux/slices/boardDataSlice";
import { useCallback } from "react";
import useMovePoints from "../hooks/useMovePoints";

const StyledBoard = styled.div`
    background-color: brown;
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

const Rank = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
`;

const Block = styled.div<{ y: number, x: number, selected: boolean, haspiece: boolean }>`
    width: 100%;
    height: 100%;
    background-color: ${e => (e.y + e.x) % 2 === 0 ? "skyblue" : "grey"};
    box-shadow: ${e => e.selected ? "inset 0px 0px 10px 10px rgba(0, 0, 0, 0.5)" : "none"};
    position: relative;

    :hover {
        cursor: ${e => e.haspiece ? "pointer" : ""} ;
    }
`;


export default function Board() {
    const disPatch = useAppDispatch();
    const onClickBlock = (coordinates: ICoordinates) => {
        if (getIsDrawMove(coordinates) && selectedBlock !== null) {
            disPatch(move({
                from: selectedBlock,
                to: coordinates,
            }))
        } else {
            disPatch(onClick(coordinates))
        }
    };

    const pieceData = useAppSelector(state => state.boardDataSlice.pieceData)
    const selectedBlock = useAppSelector(state => state.boardDataSlice.selectedBlock);
    const selectedPiece = useAppSelector(state => state.boardDataSlice.selectedPiece);

    const getPiece = useCallback((coordinates: ICoordinates) => {
        return Object.hasOwn(pieceData, coordinates.y)
            ? pieceData[coordinates.y][coordinates.x] ?? null
            : null;
    }, [pieceData]);


    const movePoints = useMovePoints({
        selectedPiece,
        selectedBlock,
        getPiece,
    });

    const getIsDrawMove = (coordinates: ICoordinates) => {
        return !!movePoints.find(e => e.x === coordinates.x && e.y === coordinates.y);
    }

    const Ranks = new Array(8).fill(0).map((_, y) => <Rank key={y}>
        {
            new Array(8).fill(0).map((_, x) => {
                const coordinates: ICoordinates = { x: x + 1, y: 8 - y };
                const data = getPiece(coordinates);
                const isDrawMove = getIsDrawMove(coordinates);

                return <Block
                    haspiece={!!(data !== null || isDrawMove)}
                    selected={selectedBlock?.x === x + 1 && selectedBlock.y === 8 - y}
                    onClick={() => onClickBlock(coordinates)}
                    y={y} x={x}
                    key={y + x}>
                    {(isDrawMove && selectedPiece && data === null) && <Piece isShadow={true} piece={selectedPiece} />}
                    {data && <Piece piece={data} isUnderAttack={isDrawMove} />}
                </Block>
            })
        }
    </Rank>
    )

    console.log(movePoints);

    return <StyledBoard>
        {Ranks}
    </StyledBoard>
}