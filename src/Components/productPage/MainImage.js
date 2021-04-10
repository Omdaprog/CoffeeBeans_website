import React from 'react'

function MainImage({src}) {
    return (
        <div >
            <div 
            style={{
                backgroundImage:`url('${src}')`,
                backgroundColor: "rgb(241, 234, 242)",
                paddingTop: "80%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain"
            }} 
            src={src} alt=""/>
        </div>
    )
}

export default MainImage
