import React, { forwardRef, ReactElement } from "react";
import cx from "classnames";
import { SubIcon, VibeComponent, VibeComponentProps } from "../../../types";
import styles from "./Table.module.scss";
import { ITableHeaderProps } from "../TableHeader/TableHeader";
import { ITableBodyProps } from "../TableBody/TableBody";
import { getTableRowLayoutStyles } from "./tableHelpers";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";

export type TableLoadingStateType = "long-text" | "medium-text" | "circle" | "rectangle";

export interface ITableColumn {
  id: string;
  title: string;
  infoContent?: string;
  width?: number | { min: number; max: number };
  icon?: SubIcon;
  loadingStateType?: TableLoadingStateType;
}

interface ITableProps extends VibeComponentProps {
  columns: ITableColumn[];
  dataState?: {
    isLoading?: boolean;
    isError?: boolean;
  };
  errorState: ReactElement;
  emptyState: ReactElement;
  style?: React.CSSProperties;
  children?:
    | ReactElement<ITableHeaderProps>
    | ReactElement<ITableBodyProps>
    | Array<ReactElement<ITableHeaderProps> | ReactElement<ITableBodyProps>>;
}

interface ITableContext {
  columns: ITableProps["columns"];
  dataState?: ITableProps["dataState"];
  emptyState: ITableProps["emptyState"];
  errorState: ITableProps["errorState"];
}

export const TableContext = React.createContext<ITableContext>(null);

const Table: VibeComponent<ITableProps, HTMLDivElement> = forwardRef(
  ({ id, className, "data-testid": dataTestId, columns, errorState, emptyState, dataState, style, children }, ref) => {
    const classNames = cx(styles.table, className);
    const { gridTemplateColumns } = getTableRowLayoutStyles(columns);

    /**
     * The `--table-grid-template-columns` variable will be available under each <Table /> scope
     * and will be consumed in the stylesheets of its children (<TableHeader />, <TableRow />)
     */
    const calculatedStyle = { "--table-grid-template-columns": gridTemplateColumns, ...style } as React.CSSProperties;

    const testId = dataTestId || getTestId(ComponentDefaultTestId.TABLE, id);

    return (
      <TableContext.Provider value={{ columns, emptyState, errorState, dataState }}>
        <div ref={ref} id={id} className={classNames} data-testid={testId} role="table" style={calculatedStyle}>
          {children}
        </div>
      </TableContext.Provider>
    );
  }
);

export default Table;
