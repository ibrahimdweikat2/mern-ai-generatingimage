import React from 'react';
import {downloadImage} from '../utils';
import {download} from '../assets'
const Card = ({_id,name,prompt,photo}) => {
  return (
    <div className='relative card' style={{borderRadius:'12px'}}>
      <img  style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'12px'}} src={photo} alt={prompt}/>
      <div className='absolute details m-2 p-4' style={{maxHeight:'94.5%',flexDirection:'column',backgroundColor:'#10131f',borderRadius:'6px'}}>
        <p className='text-white prompt' style={{fontSize:'14px',overflowY:'auto'}}>{prompt}</p>
        <div className='d-flex justify-content-between align-items-center mt-3 gap-2'>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='text-uppercase text-white rounded-circle d-flex justify-content-center align-items-center' style={{fontSize:'14px',width:'28px',height:'28px',backgroundColor:'green'}}>
              {name[0]}
            </div>
            <div className='ms-2 text-white' style={{fontSize:'14px'}}>
              {name}
            </div>
          </div>
          <button type='button' onClick={()=> downloadImage(_id,photo)} style={{backgroundColor:'transparent',border:'none',outline:'none'}}>
            <img src={download} alt='download' style={{width:'24px',height:'24px',objectFit:'contain'}}/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card