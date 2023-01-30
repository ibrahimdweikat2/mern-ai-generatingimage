import React from 'react'

const FormFiled = ({labelName,type,name,value,handleChange,isSurpriseMe,handleSurpriseMe,placeholder}) => {
  return (
    <div>
      <div className='d-flex align-items-center gap-2 mb-2'>
        <label
        htmlFor={name}
        className='d-block text-gray-900'
        style={{text:'small',font:'medium'}}
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button 
          type='button'
          onClick={handleSurpriseMe}
          className='py-1 px-2 text-black'
          style={{font:'semibold',backgroundColor:'#ECECF1',borderRadius:'5px',fontSize:'12px'}}
          >Surprise Me</button>
        )}
      </div>
      <input 
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      id={name}
      name={name}
      required
      className='p-3'
      style={{border:'1.5px solid gray',borderRadius:'5px',width:'100%',outline:'none',display:'block'}}
      />
    </div>
  )
}

export default FormFiled