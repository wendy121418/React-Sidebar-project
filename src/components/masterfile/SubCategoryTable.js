import React from 'react';
import { MDBDataTable } from 'mdbreact';
import SubCategoryActionButton from './SubCategoryActionButton';
import { Link } from 'react-router-dom';

const SubCategoryTable = () => {
  const data = {
    columns: [
      {
        label: '#',
        field: 'number',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Parent Category',
        field: 'parent_category',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Title',
        field: 'title',
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
        parent_category: <Link to="#" className="text-blue-600">Offbeat Burger</Link>,
        title: 'Offbeat Burger',
        featured: 'yes',
        status: 'active',
        last_modified: '2 days',
        action: <SubCategoryActionButton />
      },
      {
        number: '2',
        parent_category: <Link to="#" className="text-blue-600" >Tempura</Link>,
        title: 'Tempura',
        featured: 'yes',
        status: 'active',
        last_modified: '3 days',
        action: <SubCategoryActionButton />
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

export default SubCategoryTable;