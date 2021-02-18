import './evidenceStyle.scss'
import photoImage from '../../img/photo.png'
import {useState} from 'react'

function Evidence({URL}){
    const [evidence, setEvidence] = useState(false)
  return (
      <>
      <img className="evidenceImageIcon" onClick={()=>setEvidence(true)} src={photoImage} alt=""/>
      <div className={`evidenceContainer  ${evidence ? "show" : "hide"}`} onClick={()=>setEvidence(false)}>
          <div className="evidence">
              <img src={URL} alt=""/>
              <span>CLICK ANYWHERE TO CLOSE</span>
          </div>
          
      </div>
    </>
  );
}

export default Evidence;
