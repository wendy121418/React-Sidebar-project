import React from 'react'
import * as BsIcons from "react-icons/bs";
import * as ImIcons from "react-icons/im";
import * as RiIcons from "react-icons/ri";
import { Link } from 'react-router-dom';

function SubCategoryActionButton() {
    return (
        <div>
            <div className="dropdown" style={{ float: "right" }}>
                  <button className="dropbtn flex">
                    <BsIcons.BsPencilSquare />
                    <RiIcons.RiArrowDownSFill size={15} />
                  </button>
                  <div className="dropdown-content ">
                    <Link to="#" ><div className="flex"><div className="pr-2 flex items-center"><BsIcons.BsPencilSquare size={15}/></div><div>Shor Detail</div></div></Link>
                    <Link to="#" ><div className="flex"><div className="pr-2 flex items-center"><ImIcons.ImFilePdf size={15}/></div><div>PDF</div></div></Link>
                    <Link to="#" ><div className="flex"><div className="pr-2 flex items-center"><ImIcons.ImFilePdf size={15}/></div><div>POS</div></div></Link>
                  </div>
                </div>
        </div>
    )
}

export default SubCategoryActionButton
