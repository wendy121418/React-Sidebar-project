import React from 'react'
import WidgetsHomePageBanner from './WidgetsHomePageBanner';

import WidgetsTopbar from './WidgetsTopbar';
import WidgetsAdManager from './WidgetsAdManager'
import WidgetsHeaderBanner from './WidgetsHeaderBanner'
import Navbar from './Navbar';

function Widgets() {
    
    return (
        <div className="h-full">
            
            <div>
                <WidgetsTopbar />
                {/* <WidgetsHomePageBanner /> */}
                {/* <WidgetsAdManager /> */}
                {/* <WidgetsHeaderBanner /> */}
              </div>
        </div>
    )
}

export default Widgets
