import React from 'react';
import { MDBDataTable } from 'mdbreact';
import WidgetsActionButton from './WidgetsActionButton';

const WidgetsTopbarTable = () => {
  const data = {
    columns: [
      {
        label: '#',
        field: 'number',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Content',
        field: 'content',
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
        content: '40% discount on all products',
        status: 'inactive',
        last_modified: '4 days',
        action: <WidgetsActionButton />
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

export default WidgetsTopbarTable;