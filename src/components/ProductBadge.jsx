import React from 'react'

const ProductBadge = ({badge}) => {
    if(badge==="choice"){
        return (
            <span>Amazon's Choice</span>
        )
    } else if(badge==="seller"){
        return <span>#1 Best Seller</span>;
    }

    else if(badge==="limited"){
        return <span>Limited Time Deal</span>;
    }

  return (
    <div></div>
  )
}

export default ProductBadge