import React from 'react';
import { MDBDataTable } from 'mdbreact';
import PagesActionButton from './PagesActionButton';

const PagesTable = () => {
  const data = {
    columns: [
      {
        label: '#',
        field: 'number',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Page Slug',
        field: 'page_slug',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Title',
        field: 'title',
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
        page_slug: '/reviews',
        title: 'Reviews',
        status: 'draft',
        last_modified: 'Mar 17',
        action: <PagesActionButton />
      },
      {
        number: '2',
        page_slug: '/about',
        title: 'About Tokyo Tempura',
        status: 'published',
        last_modified: 'Mar 15',
        action: <PagesActionButton />
      },
      {
        number: '3',
        page_slug: '/contact-us',
        title: 'Contact Us',
        status: 'published',
        last_modified: 'Mar 15',
        action: <PagesActionButton />
      },
      {
        number: '4',
        page_slug: '/policy',
        title: 'Return Policy',
        status: 'published',
        last_modified: 'Mar 15',
        action: <PagesActionButton />
      },
      {
        number: '5',
        page_slug: '/terms',
        title: 'Terms of Service',
        status: 'published',
        last_modified: 'Mar 15',
        action: <PagesActionButton />
      },
      {
        number: '6',
        page_slug: '/how-it-works',
        title: 'How it Works',
        status: 'published',
        last_modified: 'Mar 15',
        action: <PagesActionButton />
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

export default PagesTable;