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
  onDeleteClick?: (row: T) => void;
  onDetailsClick?: (row: T) => void;
}

const Table: <T>(p: TableProps<T>) => React.ReactElement<T> = ({
  columns,
  data,
  loading,
  onRowClick,
  onDeleteClick,
  onDetailsClick,
}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.label}</th>
          ))}
          {onDeleteClick ? <th>Delete</th> : null}
          {onDetailsClick ? <th>Details</th> : null}
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
              {onDeleteClick ? (
                <td
                  data-label="Delete"
                  className="delete"
                  onClick={() => onDeleteClick(row)}
                >
                  <i className="bx bx-trash" />
                </td>
              ) : null}

              {onDetailsClick ? (
                <td
                  data-label="Delete"
                  className="details"
                  onClick={() => onDetailsClick(row)}
                >
                  <i className="bx bx-file" />
                </td>
              ) : null}
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
