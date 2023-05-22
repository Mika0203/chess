import { styled } from "styled-components"
import GameController from "../controllers/GameController";
import Piece from "./piece/Piece";
import ICoordinates from "../interfaces/Coordinates";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { onClick } from "../redux/slices/boardDataSlice";
import { builtinModules } from "module";
import { useEffect, useMemo, useState } from "react";

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

    :hover {
        cursor: ${e => e.haspiece ? "pointer" : ""} ;
    }
`;


export default function Board() {
    const disPatch = useAppDispatch();
    const onClickBlock = (coordinates: ICoordinates) => disPatch(onClick(coordinates));

    const pieceData = useAppSelector(state => state.boardDataSlice.pieceData)
    const selectedBlock = useAppSelector(state => state.boardDataSlice.selectedBlock);
    const selecetdPiece = useAppSelector(state => state.boardDataSlice.selectedPiece);

    const movePoints = useMemo<ICoordinates[]>(() => {
        if (selecetdPiece === null) return [];
        if (selectedBlock === null) return [];

        return [
            {
                x: selectedBlock.x + (selecetdPiece.moveOffset.right ?? 0),
                y: selectedBlock.y + (selecetdPiece.moveOffset.up ?? 0),
            }
        ];

    }, [selecetdPiece, selectedBlock]);

    const Ranks = new Array(8).fill(0).map((_, y) => <Rank key={y}>
        {
            new Array(8).fill(0).map((_, x) => {
                const coordinates: ICoordinates = { x: x + 1, y: 8 - y };
                const data = Object.hasOwn(pieceData, coordinates.y)
                    ? pieceData[coordinates.y][coordinates.x]
                    : null;

                const isDrawMove = !!movePoints.find(e => e.x === coordinates.x && e.y === coordinates.y);

                return <Block
                    haspiece={(data !== null)}
                    selected={selectedBlock?.x === x + 1 && selectedBlock.y === 8 - y}
                    onClick={() => onClickBlock(coordinates)}
                    y={y} x={x}
                    key={y + x}>
                    {(isDrawMove && selecetdPiece) && <Piece isShadow={true} piece={selecetdPiece} />}
                    {data && <Piece piece={data} />}
                </Block>
            })
        }
    </Rank>
    )

    return <StyledBoard>
        {Ranks}
    </StyledBoard>
}