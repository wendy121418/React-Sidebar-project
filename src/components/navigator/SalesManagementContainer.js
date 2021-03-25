import React from 'react'
import SalesOrder from '../salesManagement/SalesOrder'
import DailyTransactions from '../salesManagement/DailyTransactions'


function SalesManagementContainer(props) {

    const sales_management_container = props.match.params.sales_management_container;

    const sales_management_items = {
        sales_order : <SalesOrder />,

        daily_transactions : <DailyTransactions />,
        
    }

    return (
        <div>
            {sales_management_items[sales_management_container]}
        </div>
    )
}

export default SalesManagementContainer
