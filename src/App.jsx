import React, { useState } from "react";

const App = () => {
    const [counter, setCounter] = useState(0);
    
    return (
        <div>
            <h2>Welcome to React App</h2>
            <h3>Date : {new Date().toDateString()}</h3>
        </div>
    )
}

export default App;