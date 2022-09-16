import React from "react";
import "./style.scss";

export type TableColumnProps<T> = {
  label: string;
  value: keyof T | ((data: T) => string | React.ReactNode);
  clamp?: number;
};

interface TableProps<T> {
  data: T[];
  columns: TableColumnProps<T>[];
  loading?: boolean;
  onRowClick?: (row: T) => void;
}

const Table: <T>(p: TableProps<T>) => React.ReactElement<T> = ({
  columns,
  data,
  loading,
  onRowClick,
}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {(!loading &&
          data.length &&
          data.map((row, index) => (
            <tr key={index} onClick={() => onRowClick && onRowClick(row)}>
              {columns.map(({ value, clamp }, index) => (
                <td
                  key={index}
                  data-label={columns[index].label}
                  {...{ clamp }}
                >
                  {typeof value === "function"
                    ? value(row)
                    : (row as any)[value]}
                </td>
              ))}
            </tr>
          ))) ||
          null}
        {!loading && !data.length && (
          <tr>
            <td colSpan={100}>No data found</td>
          </tr>
        )}
        {loading ? (
          <tr>
            <td colSpan={100}>
              <h3>Loading ...</h3>
            </td>
          </tr>
        ) : null}
      </tbody>
    </table>
  );
};

export default Table;
