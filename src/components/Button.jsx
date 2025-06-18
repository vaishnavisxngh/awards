import React from 'react'

const Button = ({ title , id , rightIcon , leftIcon , containerClass }) => {
  return (
    <button id={id} className= {"group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-yellow-300 px-8 py-2 text-black ${containerClass} "} > 
<span className= "relative incline-flex overflow-hidden font-general text-xs uppercase">
    <div>
        {title} 
    </div>
</span>
    </button>
  )
}

export default Button