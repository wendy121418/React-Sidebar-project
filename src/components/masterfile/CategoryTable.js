import React from 'react';
import { MDBDataTable } from 'mdbreact';
import CategoryActionButton from './CategoryActionButton';

const CategoryTable = () => {
  const data = {
    columns: [
      {
        label: '#',
        field: 'number',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Display Order',
        field: 'display_order',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Featured',
        field: 'featured',
        sort: 'asc',
        width: 100
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
        name: 'Offbeat Burger',
        display_order: '1',
        featured: 'yes',
        status: 'active',
        last_modified: '2 days',
        action: <CategoryActionButton />
      },
      {
        number: '2',
        name: 'Tempura',
        display_order: '1',
        featured: 'yes',
        status: 'active',
        last_modified: '3 days',
        action: <CategoryActionButton />
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

export default CategoryTable;