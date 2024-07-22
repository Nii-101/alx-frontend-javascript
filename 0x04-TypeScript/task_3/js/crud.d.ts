// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from './src/interface';

// Declare the types for the CRUD functions
declare module 'crud' {
  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowID: RowID): void;
  export function updateRow(rowID: RowID, row: RowElement): RowID;
}
