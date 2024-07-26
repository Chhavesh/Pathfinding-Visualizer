import { createContext, ReactNode, useState } from "react";
import { TileType } from "../utils/types";
import { END_TITLE_CONFIGURATION, START_TITLE_CONFIGURATION } from "../utils/constants";


interface TileContextInterface {
    startTile: TileType;
    setStartTile: (startTile: TileType) => void;
    endTile: TileType;
    setEndTile: (endTile: TileType) => void;
}

export const TileContext= createContext<TileContextInterface | undefined>
(undefined);

export const TileProvider = ({children}: {children: ReactNode}) => {
    const [startTile, setStartTile] = useState<TileType>(START_TITLE_CONFIGURATION);
    const [endTile, setEndTile] = useState<TileType>(END_TITLE_CONFIGURATION);

    return (
        <TileContext.Provider value={{
            startTile,
            setStartTile,
            endTile,
            setEndTile
        }}>
            {children}
        </TileContext.Provider>
    );
};