import React from 'react';
import { MDBDataTable } from 'mdbreact';
import WidgetsActionButton from './WidgetsActionButton';

const WidgetsAdManagerTable = () => {
  const data = {
    columns: [
      {
        label: '#',
        field: 'number',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Type',
        field: 'type',
        sort: 'asc',
        width: 270
      },
      {
        label: 'External Link',
        field: 'external_link',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Target',
        field: 'target',
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
        type: 'category',
        external_link: '---',
        target: 'Tempura',
        status: 'active',
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

export default WidgetsAdManagerTable;