import React , {useState} from 'react';
import logo from './midia/foto6.jpg';
import './App.css';

const App = () => {
  const [pending,setPending] = useState([
    {
      name:'vidro hall t-7 danificado',
      action:'trocar o vidro de uma porta',
      starttedAt:'2019-12-01'
    }
  ])

  const date = (dateString) => {
    let date = new Date(dateString)
    return date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()
  }
  const waiting = (dateString) => {
    const now = new Date()
    const past = new Date(dateString)
    const diff = Math.abs(now.getTime() - past.getTime())
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
    
    return 'estamos a ' + days + ' dias no aguardo'
  }

  return (
    <div className="App">
      <header style={style.header}>
        <img style={style.header.img} src={logo}/>
      </header>
      <div>
        <h1>Pendencias</h1>
        <ul>
          {
            pending.map((obj,key)=>
              <li className="flex" key={key}>
                <div className="flex-item">
                  <label>#{key+1}</label>
                </div>
                <div className="flex-item">
                  <label>item:<b>{obj.name}</b></label>
                  <label>data do problema:<b>{date(obj.starttedAt)}</b></label>
                  <label>Ação: <b>{obj.action}</b></label>
                </div>
                <div className="flex-item">
                  <h2>{waiting(obj.starttedAt)}</h2>
                  <img src={require('./midia/wa1.gif')}/>  
                </div>

              </li>
            )
          }
        </ul>
      </div>
    </div>
  );
}

const style = {
  header:{
    img:{
      width:'100%',
      marginTop: '-30%'
    },
    width: '100%',
    height: '250px',
    overflow:' hidden'
  }
}

export default App;
