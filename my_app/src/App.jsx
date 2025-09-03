
import './App.css'
import Greeting from './my-components/Greeting'
import Welcome from './my-components/Welcome'
function App() {
  const btnName = "Click Me";
  return (

    <> {/* this is use for all tags or components return */}

      <div className='app'>This is my application</div>
      <button className='link'>{btnName}</button>
      <Greeting className="greeting"/>
      <Welcome name="User"/>
      <Welcome name="Admin"/>
    </>
  )
}

export default App
  