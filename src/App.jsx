import React from "react";

function App() {
    const temp = 'this from App.jsx';


    function printSameThing() {
        return (
            <div>
                {Date.now()}
                <br />
                {temp}
            </div>
        );
    }

    return (
        <article>
            {printSameThing()}
        </article>                  
    );
}

export default App;


// import React, { useState } from "react";

// function App() {
//     const temp = 'hello';

//     // Define a new function to print the same thing
//     function loginform() {
//         const [username, setUsername] = useState('');
//         const [password, setPassword] = useState('');

//         const handleLogin = (e) => {
//             e.preventDefault();
//             console.log('Username:', username);
//             console.log('Password:', password);
//         };

//         return (
//             <form onSubmit={handleLogin}>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button type="submit">Login</button>
//             </form>
//         );
//     }

//     // Call the loginform function within App's return statement
//     return (
//         <div>
//             {loginform()}
//         </div>
//     );
// }

// export default App;





