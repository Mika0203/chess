import { styled } from "styled-components"
import Piece from "./piece/Piece";
import ICoordinates from "../interfaces/Coordinates";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { move, onClick } from "../redux/slices/boardDataSlice";
import { useMemo } from "react";

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
    const selecetdPiece = useAppSelector(state => state.boardDataSlice.selectedPiece);

    const movePoints = useMemo<ICoordinates[]>(() => {
        if (selecetdPiece === null) return [];
        if (selectedBlock === null) return [];

        const arr: ICoordinates[] = [];


        arr.push(...new Array(selecetdPiece.moveOffset.up ?? 0).fill(0).map((_, idx) => ({
            x: selectedBlock.x,
            y: selectedBlock.y + idx + 1,
        })));
        arr.push(...new Array(selecetdPiece.moveOffset.right ?? 0).fill(0).map((_, idx) => ({
            x: selectedBlock.x + idx + 1,
            y: selectedBlock.y,
        })));
        arr.push(...new Array(selecetdPiece.moveOffset.left ?? 0).fill(0).map((_, idx) => ({
            x: selectedBlock.x - (idx + 1),
            y: selectedBlock.y,
        })));
        arr.push(...new Array(selecetdPiece.moveOffset.down ?? 0).fill(0).map((_, idx) => ({
            x: selectedBlock.x,
            y: selectedBlock.y - (idx + 1),
        })));
        arr.push(...new Array(selecetdPiece.moveOffset.cross ?? 0).fill(0).map((_, idx) => ({
            x: selectedBlock.x,
            y: selectedBlock.y - (idx + 1),
        })));
        arr.push(...new Array(selecetdPiece.moveOffset.cross ?? 0).fill(0).map((_, idx) => ({
            x: selectedBlock.x,
            y: selectedBlock.y - (idx + 1),
        })));

        console.log(arr);
        return arr;

    }, [selecetdPiece, selectedBlock]);

    const getIsDrawMove = (coordinates: ICoordinates) => {
        return !!movePoints.find(e => e.x === coordinates.x && e.y === coordinates.y);
    }

    const Ranks = new Array(8).fill(0).map((_, y) => <Rank key={y}>
        {
            new Array(8).fill(0).map((_, x) => {
                const coordinates: ICoordinates = { x: x + 1, y: 8 - y };
                const data = Object.hasOwn(pieceData, coordinates.y)
                    ? pieceData[coordinates.y][coordinates.x]
                    : null;

                const isDrawMove = getIsDrawMove(coordinates);

                return <Block
                    haspiece={(data !== null || isDrawMove)}
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