import { styled } from "styled-components"
import GameController from "../controllers/GameController";
import Unit from "./unit/Unit";

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

const Block = styled.div<{ y: number, x: number }>`
    width: 100%;
    height: 100%;
    background-color: ${e => (e.y + e.x) % 2 === 0 ? "skyblue" : "grey"};
`;



export default function Board() {
    const Ranks =
        new Array(8).fill(0).map((e, y) => <Rank key={y}>
            {
                new Array(8).fill(0).map((e2, x) => {
                    const z = GameController.instance.getUnitDataByPosition({
                        x: x + 1,
                        y: 8 - y,
                    });
                    return <Block y={y} x={x} key={y + x}>
                        {z && <Unit color={z.color} type={z.type} />}
                    </Block>
                })
            }
        </Rank>
        )

    return <StyledBoard>
        {Ranks}
    </StyledBoard>
}