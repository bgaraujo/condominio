import React from 'react';
import logo from './midia/foto6.jpg';
import './App.css';
import 'gridlex'

const App = () => {
  const pending = [
    {
      name:'vidro hall t-7 danificado',
      action:'trocar o vidro de uma porta',
      starttedAt:'2019-12-01',
      link:'https://drive.google.com/open?id=1n-P0vZSmp0HOX3YVtU_P7i_GFUcFF4p5'
    },
    {
      name:'implantação de segurança 100%',
      action:'seguir o cronograma',
      starttedAt:'2019-7-31',
      link:'https://drive.google.com/open?id=1JAwAvOR4kUPsKzFeu0CWbr-kTZBCzTb2'
    },
    {
      name:'grelhas das churrasqueiras',
      action:'Trocar as custas de quem danificou',
      starttedAt:'2018-12-28',
      link:'https://drive.google.com/open?id=1nVJq-AVzrEXFu7CWcxxKF7hxsixE2Qzr'
    },
  ]

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
    <div className="grid">
      <header className="col-12" style={style.header}>
        <img style={style.header.img} src={logo}/>
      </header>
      <div className="col-12">
        <h1>Pendencias</h1>
        <ul>
          {
            pending.map((obj,key)=>
              <li className="grid" key={key}>
                <div className="col-2_sm-12">
                  <label>#{key+1}</label>
                </div>
                <div className="col-4_sm-12">
                  <label>item:<b>{obj.name}</b></label>
                  <label>data:<b>{date(obj.starttedAt)}</b></label>
                  <label>Ação: <b>{obj.action}</b></label>
                </div>
                <div className="col-4_sm-12">
                  <label>{waiting(obj.starttedAt)}</label>
                  <img src={require('./midia/wa'+(key+1)+'.gif')}/>  
                </div>
                <div className="col-2_sm-12">
                  <label><a href={obj.link} target="_blank">evidencia</a></label>
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
