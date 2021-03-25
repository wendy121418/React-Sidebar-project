import React from 'react'
import AdminAccountManagement from '../../components/userManagement/AdminAccountManagement'
import UserAccountManagement from '../../components/userManagement/UserAccountManagement'
import SubscriberManagement from '../../components/userManagement/SubscriberManagement'

function UserManagementContainer(props) {

    const user_management_container = props.match.params.user_management_container;

    const user_management_items = {
        admin_account_management : <AdminAccountManagement />,

        user_account_management : <UserAccountManagement />,

        subscriber_management: <SubscriberManagement />,
        
        
          
          
    }

    return (
        <div className="user_management_container w-full h-screen">
            {user_management_items[user_management_container]}
        </div>
    )
}

export default UserManagementContainer
