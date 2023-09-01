import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css'


function BusinessList(props){
    return( 
    <div className='BusinessList'>
        {
            props.businesses.map(business => <Business business={business} key={business.name}/>)
        } 
    </div>
 
    )
}

export default BusinessList