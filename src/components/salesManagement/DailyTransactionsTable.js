import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DailyTransactionsTable = () => {

    

  const data = {
    columns: [
      {
        label: "Product Name",
        field: 'product_name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Qty',
        field: 'quantity',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Unit',
        field: 'unit',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Price',
        field: 'price',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Subtotal',
        field: 'subtotal',
        sort: 'asc',
        width: 150
      },
    ],
    rows: [
      {
        product_name: 'CHORI BURGER',
        quantity: '7',
        unit: 'pc',
        price: '150.00',
        subtotal: '1.050.00',
      },
      {
        product_name: 'TEMPURE',
        quantity: '1',
        unit: 'pc',
        price: '100.00',
        subtotal: '100.00',
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
    //   info={false}
    // paging={false}
    // scrollX
      className="p-0"
    />
  );
}

export default DailyTransactionsTable;