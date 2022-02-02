import React from 'react';

let h1 = <h1 className="text-warning">Bonjour à tous</h1>


class App extends React.Component {

render(){
    // possible de mettre la variable à cette endroit 
    
    return (
    <div>
        {h1}
    </div>
    )
}
}


export default App;

