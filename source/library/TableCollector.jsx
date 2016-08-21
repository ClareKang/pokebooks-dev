import React, { PropTypes } from 'react';

export const Table = props => {
  const TableStyle = {
    width: '100%',
    marginTop: 10,
    borderCollapse: 'collapse',
    borderTop: '2px solid #c7c7c7',
  };
  return (
    <table style={TableStyle}>{props.children}</table>
  );
};

Table.propTypes = {
  children: PropTypes.node,
};

export const TableRow = props => {
  const TableRowStyle = {
    borderBottom: '1px solid #c7c7c7',
  };
  return (
    <tr style={TableRowStyle}>{props.children}</tr>
  );
};

TableRow.propTypes = {
  children: PropTypes.node,
};

export const TableHeaderColumn = props => {
  const TableHeaderColumnStyle = {
    textAlign: 'center',
    padding: '6px 6px',
    whiteSpace: 'nowrap',
  };
  return (
    <th style={TableHeaderColumnStyle} {...props}>{props.label}</th>
  );
};

TableHeaderColumn.propTypes = {
  label: PropTypes.node,
};

export const TableRowColumn = props => {
  const TableRowColumnStyle = {
    textAlign: 'center',
    padding: '6px 6px',
  };
  return (
    <td style={TableRowColumnStyle} {...props}>{props.label}</td>
  );
};

TableRowColumn.propTypes = {
  label: PropTypes.node,
};
