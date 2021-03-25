import React from 'react'
import CategoryModule from '../masterfile/CategoryModule'
import ProductModule from '../masterfile/ProductModule'
import SubCategoryModule from '../masterfile/SubCategoryModule'

function MasterfileContainer(props) {

    const masterfile_container = props.match.params.masterfile_container;

    const masterfile_items = {
        category_module : <CategoryModule />,

        sub_category_module : <SubCategoryModule />,

        product_module: <ProductModule />,
        
    }

    return (
        <div className="masterfile_container w-full h-screen">
            {masterfile_items[masterfile_container]}
        </div>
    )
}

export default MasterfileContainer
