import React from 'react';
import '../public/style.css'
function Component2() {
    return (
        <div>
            <button>Don't Click</button>
            
        </div>
    );
}

export default Component2;



// import React, { useState } from 'react';
// import '../public/style.css';

// function Component2() {
//     const colors = ['orange', 'pink', 'cyan', 'purple']; // Define your array of colors
//     const [colorIndex, setColorIndex] = useState(0);

//     const handleClick = () => {
//         setColorIndex((prevIndex) => (prevIndex + 1) % colors.length); // Cycle through colors
//     };

//     return (
//         <div id="Component2" style={{ backgroundColor: colors[colorIndex] }}>
//             <button onClick={handleClick}>Change Color</button>
//         </div>
//     );
// }

// export default Component2;
