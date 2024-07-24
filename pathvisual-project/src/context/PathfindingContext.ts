import { ReactNode, createContext, useState } from "react";
import { AlgorithmType, GridType, MazeType } from "../utils/types";
import { createGrid } from "../utils/helpers";

interface PathfindingContextInterface{
    algorithm: AlgorithmType;
    setAlgorithm: (algorithm: AlgorithmType) => void;
    maze: MazeType;
    setMaze: (maze: MazeType) => void;
    grid: GridType;
    setGrid: (grid: GridType) => void;
    isGraphVisualized: boolean;
    setGraphVisualization: (isGraphVisualization: boolean) => void;
}

export const PathfindingContext = createContext<
PathfindingContextInterface | undefined
>(undefined);

export const PathfindingProvider = ({children}: {children: ReactNode[]}) => {
const [algorithm, setAlgorithm] = useState<AlgorithmType>("BFS");
const [maze, setMaze] = useState<MazeType>("NONE");
const [grid, setGrid] = useState<GridType>(createGrid ());
}
