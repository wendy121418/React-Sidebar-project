import React from 'react'
import Widgets from '../contentManagement/Widgets'
import Pages from '../contentManagement/Pages'
import FAQs from '../contentManagement/FAQs'

function ContentManagementContainer(props) {

    const content_management_container = props.match.params.content_management_container;

    const content_management_items = {
        widgets : <Widgets />,

        pages : <Pages />,

        faqs: <FAQs />,
        
        
          
          
    }

    return (
        <div className="content_management_container w-full h-screen">
            {content_management_items[content_management_container]}
        </div>
    )
}

export default ContentManagementContainer
