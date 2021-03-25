import React from 'react';
import { MDBDataTable } from 'mdbreact';
import WidgetsActionButton from './WidgetsActionButton';
import * as BsIcons from 'react-icons/bs'

const WidgetsHomePageBannerTable = () => {
  const data = {
    columns: [
      {
        label: '#',
        field: 'number',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Heading',
        field: 'heading',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Shop Quicklinks',
        field: 'shop_quicklinks',
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
        heading: <div className="flex"><div className="flex items-center"><BsIcons.BsCardImage size={15} /></div> <div className="pl-1">FRIED BBQ</div></div>,
        shop_quicklinks: 'active',
        status: 'active',
        last_modified: '5 hrs',
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

export default WidgetsHomePageBannerTable;