import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = ()  => {
    return ( 
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (424)</div>
            </div>
            <div className="descriptionbox-description">
                <p>
                    An e-commerce website is an online platform that facilitate
                    buying and selling of products or services over the internet
                    serves as a virtual marketplace where businesses and individual
                    showcase their products, internet with customers, and conduct
                    transactions without the need for a physical presence. E-commerce
                    websites have gained immense popularity due to their convenion accessibility, and the global reach they offer.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox