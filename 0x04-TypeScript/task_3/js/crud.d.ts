/// <reference path="./interface.ts" />

import { RowID, RowElement } from './interface';

// Ambient declarations of the CRUD functions

declare function insertRow(row: RowElement): number
export declare function updateRow(rowId: RowID, row: RowElement): RowID;
export declare function deleteRow(rowId: RowID): void;
export declare function getRow(rowId: RowID): RowElement | null;


