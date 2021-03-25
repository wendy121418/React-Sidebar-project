import React from 'react';
import { MDBDataTable } from 'mdbreact';
import FAQsActionButton from './FAQsActionButton';

const FAQsTable = () => {
  const data = {
    columns: [
      {
        label: '#',
        field: 'number',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Question',
        field: 'question',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Sorting',
        field: 'sorting',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Status',
        field: 'status',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Last Modified',
        field: 'last_modified',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Action',
        field: 'action',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        number: '1',
        question: '1. How much it cost for franchising?',
        sorting: '0',
        status: 'published',
        last_modified: 'Mar 17',
        action: <FAQsActionButton />
      },
      {
        number: '2',
        question: '8. How much is the fixed annual service fee?',
        sorting: '0',
        status: 'published',
        last_modified: 'Mar 17',
        action: <FAQsActionButton />
      },
    ]
  };

  return (
    <MDBDataTable
      striped
      bordered
      small
      hover
      data={data}
    />
  );
}

export default FAQsTable;