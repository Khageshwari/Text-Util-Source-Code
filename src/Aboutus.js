import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import "./Aboutus.css"
import pp from "./pp.jpg"
import Wordcontext from './Wordcontext';
import Idcard from './Idcard';
import l from './l.jpg'
import p from './p.jpg'
import t from './t.jpg'
import Vegetables from './Vegetables';
export default function Aboutus() {
  const ourstates= useContext(Wordcontext);
  const handleChange= (e)=>{
    ourstates.setWord(e.target.value);
  }
  const students=[{name:"Arpita", id:"1", address:"Kathmandu"},{name:"Khageshwari", id:"2", address:"Dadeldhura"},{name:"Hari", id:"3", address:"Sindhuli"},{name:"Hemsagar", id:"4", address:"Dadeldhura"},{name:"Manisha", id:"5", address:"Mahendranagar"},{name:"Jeevan", id:"6", address:"Kathmandu"}];
  const vegetables=[{name:"Tomato", price:"40", quantity:"1kg", image:t}, {name:"pumpkin", price:"90", quantity:"2kg", image:p}, {name:"ladyfinger", price:"160", quantity:"1kg", image:l}]
  return (
    <>

    <div><Card style={{ width: '15%', marginTop:'20px'}}>
      <Card.Img variant="top" src={pp} id="pp" />
      <Card.Body>
        <Card.Title>About Us</Card.Title>
        <Card.Text>
          This website is created by Khageshwari Nath.
        </Card.Text>
      </Card.Body>
    </Card></div>
    
    <br></br>
    <textarea className='word' placeholder='Enter text here! ' value={ourstates.word} onChange={(e)=>{handleChange(e)}} ></textarea>
    <div style={{display: 'flex', justifyContent: 'space-around', flexDirection:'row', flexWrap:'wrap'}}>
      {students.map((element, index)=>{
        return(
          <div key={index} style={{margin:'5px'}}>
            <Idcard Name={element.name} Id={element.id} Address={element.address} />
          </div>
        );
      })}
    </div >
    <div style={{display: 'flex', justifyContent: 'space-around', flexDirection:'row', flexWrap:'wrap'}}>
      {vegetables.map((element, index)=>{
        return(
          <div key={index} style={{margin:'5px'}}>
            <Vegetables Name={element.name} Price={element.price} Quantity={element.quantity} Image={element.image} />

          </div>
        )

      })}
    </div>
   
    </>
  )
}
