import React from 'react'
import * as BsIcons from 'react-icons/bs'

function AvatarRight() {
    return (
        <div className="flex">
            <div className="pr-3">
                <h3 className="text-sm p-0 m-0">Welcome Admin</h3>
                <p className="p-0 m-0 text-xs flex justify-end cursor-pointer">Sign out</p>
            </div>
            <div className="self-center cursor-pointer">
                <BsIcons.BsPeopleCircle size={28} />
            </div>
            
        </div>
    )
}

export default AvatarRight
