import React, { useContext, useState } from 'react'
import "./Home.css";
import Aboutus from './Aboutus';
import Wordcontext from './Wordcontext';
export default function Home() {
  const ourstates= useContext(Wordcontext);
  const mytext= ourstates.word;
  const setMytext = ourstates.setWord;
  const [myMail, setMyMail]=useState([]);
  let handleChange=(e)=>{
    setMytext(e.target.value);
    setMyMail([]);
  }
  let wordCount=()=>{
    const arr=mytext.split(/\s+/).filter((word)=>{return word!==""});
    return arr.length;
  }
  let toupper=()=>{
    let t=mytext;
    setMytext(t.toUpperCase());
  }
  let tolower=()=>{
    let t=mytext;
    setMytext(t.toLowerCase());
  }
  let toclear=()=>{
    setMytext("");
  }
  let tocopy=()=>{
    navigator.clipboard.writeText(mytext);
  }
  let tocapitalized=()=>{
    const arr=mytext.split(/\s+/).filter((word)=>{return word!==""});
    arr.map((word,i)=>{
      arr[i]=word.charAt(0).toUpperCase()+word.slice(1);
      return 0;
    })
    let t=arr.join(" ");
    setMytext(t);
    
  }
  let toremove=()=>{
    const arr=mytext.split(/\s+/).filter((word)=>{return word!==""});
    let t=arr.join(" ");
    setMytext(t);
  }
  let findMail=()=>{
    const arr=mytext.split(/\s+/).filter((word)=>{return word!==""});
    const mail = [];
    arr.map((word)=>{
      if(word.includes(".com"))
      {
        mail.push(word);
      }
      return 0;
    })
    setMyMail(mail);
  }

  return (
    <>
    <div id="main">
        <p className='intro'>Try TextUtils- Word and character counter and more features.</p>
        <textarea className='area' placeholder='Enter your text here !' value={mytext} onChange={(e)=>{handleChange(e)}}></textarea>
      
        <div>
            <button className='utilb' onClick={toupper}>Convert to UpperCase</button>
            <button className='utilb' onClick={tolower}>Convert to LowerCase</button>
            <button className='utilb' onClick={findMail}>Click to Find Email Address</button>
            <button className='utilb' onClick={toclear}>Click to Clear Text</button>
            <button className='utilb' onClick={tocopy} >Click to Copy to Clipboard</button>
            <button className='utilb' onClick={toremove}>Click to Remove Extra spaces</button>
            <button className='utilb' onClick={tocapitalized}>Convert to First word Capital</button>
        </div>
        <div>
            <h3>Text Summary</h3>
            <p>{mytext.length} characters {wordCount()} words {(1/238 * wordCount()).toFixed(3)} minutes read</p>
            <h3>Preview</h3>
            <p>{mytext}</p>
            <h3>Found Mails</h3>
            <p>{myMail.length===0?"No mails found":myMail.join(" ")}</p>

        </div>

    </div>
    <Aboutus></Aboutus>
    </>
  )
}
