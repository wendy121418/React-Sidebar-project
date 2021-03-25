import React from 'react';
import { MDBDataTable } from 'mdbreact';
import SalesActionButton from './SalesActionButton';
import { Link } from 'react-router-dom';

const SubCategoryTable = () => {

    const paid = "Paid";
    const payment_tracking = paid === "Paid"
    const confirmed = "Confirmed";
    const transaction_tracking = confirmed === "Confirmed"

  const data = {
    columns: [
      {
        label: "Order ID /Buyer's Name",
        field: 'ID',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Purchased Date',
        field: 'purchased_date',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Payment & Delivery',
        field: 'payment_delivery',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Total',
        field: 'total',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Payment',
        field: 'payment',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Transaction',
        field: 'transaction',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Proof of Payment',
        field: 'proof_of_payment',
        sort: 'asc',
        width: 100
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
        ID: [
            <div><Link to="#" className="text-blue-600">6052e5d04163a</Link></div>,
            <div><p>testname</p></div>
        ],
        purchased_date: 'Mar 18, 2021 01:32 PM',
        payment_delivery: [
            <div><p>BDO</p></div>,
            <div className="text-blue-600 italic"><Link to="#">Regulary Delivery</Link></div>
        ],
        total: 'PHP 700.00',
        payment: [
            <div className={`${payment_tracking ? 'bg-green-500' : 'bg-gray-500'}`}>
                <div className="flex justify-center text-white">{paid}</div>
            </div>
        ],
        transaction: [
            <div className={`${transaction_tracking ? 'bg-blue-500' : 'bg-yellow-500'}`}>
                <div className="flex justify-center text-white">{confirmed}</div>
            </div>
        ],
        proof_of_payment: 'Confirmed',
        last_modified: '3 days',
        action: <SalesActionButton />
      },
      {
        ID: [
            <div><Link to="#" className="text-blue-600">60505b4a9451c</Link></div>,
            <div><p>testname</p></div>
        ],
        purchased_date: 'Mar 16, 2021 01:32 PM',
        payment_delivery: [
            <div><p>BDO</p></div>,
            <div className="text-blue-600 italic"><Link to="#">Regulary Delivery</Link></div>
        ],
        total: 'PHP 600.00',
        payment: [
            <div className={`${payment_tracking ? 'bg-green-500' : 'bg-gray-500'}`}>
                <div className="flex justify-center text-white">{paid}</div>
            </div>
        ],
        transaction: [
            <div className={`${transaction_tracking ? 'bg-blue-500' : 'bg-yellow-500'}`}>
                <div className="flex justify-center text-white">{confirmed}</div>
            </div>
        ],
        proof_of_payment: 'Confirmed',
        last_modified: 'Mar 16',
        action: <SalesActionButton />
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
      proSelect
    />
  );
}

export default SubCategoryTable;