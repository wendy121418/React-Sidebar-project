import React from "react";
import Moment from "react-moment";
import * as ImIcons from 'react-icons/im'

function DateNow() {
  const dateToFormat = new Date();
  return (
    <div className="bg-red-600 w-48 p-2 text-white flex rounded-lg">
      <div className="flex items-center pr-3">
      <ImIcons.ImCalendar size={35} />
      </div>
      <div>
        <div className="text-lg">
          <Moment format="MMMM DD, YYYY" date={dateToFormat} />
        </div>
        <div className="text-sm">
          <Moment format="dddd h:mm A" date={dateToFormat} />
        </div>
      </div>
    </div>
  );
}

export default DateNow;
