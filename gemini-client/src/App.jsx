import { useState, useEffect } from 'react'
import hampii from '../coquette-hampter.jpg';


function App() {

  const [serverData, setServerData]= useState('')
  const [userPrompt, setUserPrompt] = useState('')


  function handleSubmit(){
      
    fetch('/api', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({'prompt': userPrompt})
    })
      .then((res) => res.json())
      .then((data) => {
        setServerData(data)
        console.log(data)
      })

  }
  
  return (
    <main style={{height: '100vh', display: "flex", flexDirection: 'column'}}>
      <h1 style={{ color: '#fff7ef', paddingRight:'10px', paddingBottom: '10px', marginBottom: '0'}}> Boss GPT
            <img src={hampii} style={{width:55, height:40}} alt="Hampster"/>

      </h1>

      <text style={{color: '#AA336A'}}> Be your on GPT</text>
      <div style={{margin: '0', flexGrow: '1', overflow:'scroll'}}>
        <div style= {{width: '100%', height: '100%'}}>
          <article style= {{margin: '0'}}>
              {serverData}
            </article>
        </div>
        </div>

        <div style= {{display: 'flex', alignItems: 'end', background: 'pink', padding: '10px'}}>
            <textarea onChange={(e) => setUserPrompt(e.target.value)} style= {{margin: '0', flexGrow: '1', overflowY: 'hidden'}}  placeholder='Type Prompt..'/>
            <button onClick={handleSubmit} style= {{background: '#F9629F', margin: '10', padding: '20px'}} >GO!</button>

        </div>

    </main>  



      
  )
}

export default App
