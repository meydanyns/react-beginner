import logo from './logo.svg'



function App() {
  return (
    <div className="App">
     <h3>{process.env.NODE_ENV}</h3>

<p>
{process.env.REACT_APP_API_URL}

</p>


     {process.env.NODE_ENV == 'production' && (

      <div>
        <img src="/logo192.png"  alt=""/>
        <img src="/logo192.png"  alt=""/>
      <div/>
     )


     }
     
     <img  src="/logo192.png" alt=""/>
     <img src={logo}  alt="" />
    </div>
  )

    }
export default App;

