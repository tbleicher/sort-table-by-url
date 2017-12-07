import React, { Component } from 'react';

import data from './data';

import './table.css';

const keys = [
  'id',
  'City',
  'Country',
  'All Buildings',
  '100m+',
  '150m+',
  '200m+',
  '300m+',
  'Telecom Towers',
  'All Structures'
];
const keys_lower = keys.map(k => k.toLowerCase());

function getSortFunc(sortby) {
  return sortby === 'City' || sortby === 'Country'
    ? (a, b) => a[sortby].localeCompare(b[sortby])
    : (a, b) => b[sortby] - a[sortby];
}

function getSortKey(params) {
  return keys[getSortKeyIndex(params)];
}

function getSortKeyIndex(params) {
  if (!params.sortby) {
    return 0;
  }
  const key = params.sortby.toLowerCase();

  return keys_lower.includes(key) ? keys_lower.indexOf(key) : 0;
}

function getTableRow(obj) {
  const id = `${obj.City}|${obj.Country}`;
  const tds = keys.map(k => <td key={k}>{obj[k]}</td>);

  return <tr key={id}>{tds}</tr>;
}

class URLSortedTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortby: getSortKey(this.props.match.params)
    };

    this.onClick = this.onClick.bind(this);

    // when incorrect or lower case url is entered manually
    // push correct location to browser history
    this.props.history.push('/' + this.state.sortby);
  }

  onClick(key) {
    this.props.history.push('/' + key);
  }

  componentWillReceiveProps(nextProps) {
    const params = nextProps.match.params;

    if (this.state.sortby !== params.sortby) {
      const sortby = getSortKey(params);

      this.setState({ sortby });
    }
  }

  render() {
    const header = keys.map(k => (
      <th key={k} id={k} onClick={() => this.onClick(k)}>
        {k}
      </th>
    ));
    const rows = data
      .sort(getSortFunc(this.state.sortby))
      .map(r => getTableRow(r));

    return (
      <div>
        <p>
          sorted by: '{`${this.state.sortby}`}' (click column header to sort by
          column)
        </p>
        <table id="urltable" className="pure-table">
          <thead>
            <tr>{header}</tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default URLSortedTable;
