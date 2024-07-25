import { useContext } from "react";
import { PathfindingContext  } from "../context/PathfindingContext";


export const usePathfinding =() => {
    const context = useContext(PathfindingContext);

    if(!context){
        throw new Error("usePathfinding must be used within a PathfindingContext");
    }
      // Use the destructured properties directly
    // const grid = context.grid;
    // const setGrid = context.setGrid;
    // const algorithm = context.algorithm;
    // const setAlgorithm = context.setAlgorithm;

    // // Or, you can return the entire context object
    return ;
};
