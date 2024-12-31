import { useState } from 'react'


function App() {

  return (
    <main style={{height: '85vh', display: "flex", flexDirection: 'column'}}>
      <h1 style={{paddingBottom: '10px', marginBottom: '0'}}>My Prompter</h1>
      <div style={{margin: '0', flexGrow: '1'}}>
        <div style= {{width: '100%', height: '100%'}}>
          <article style= {{margin: '0'}}/>
        </div>

        <div style= {{display: 'flex', alignItems: 'end', backgroundColor: '#222', padding: '10px'}}>
            <textarea style= {{margin: '10', flexGrow: '1', overflowY: 'hidden'}}  placeholder='Type Prompt..'/>
            <button style= {{margin: '100', flexGrow: '1', padding: '15px'}} >GO!</button>

        </div>
      </div>

    </main>  



      
  )
}

export default App
