import { MAX_COLS, MAX_ROWS } from "./constants";
import { GridType, TitleType } from "./types";

const createRow = (row: number, startTitle: TitleType, endTitle: TitleType) => {
    const currentRow = [];
    for(let col=0; col<MAX_COLS; col++) {
      currentRow.push({
        row,
        col,
        isEnd: row === endTitle.row && col === endTitle.col,
        isWall: false,
        isPath: false,
        distance: Infinity,
        isStart: row === startTitle.row && col === startTitle.col,
        isTraversed: false,
        parent: null,
      }); 
    }
    return currentRow;
}

export const createGrid = (startTitle: TitleType, endTitle: TitleType) => {
    const grid: GridType = [];

    for(let row=0; row < MAX_ROWS; row++) {
      grid.push(createRow(row, startTitle, endTitle))  
}
return grid
}