import React,{useEffect,useState} from 'react';
import {getRandomPrompt} from '../utils';
import {FormFiled} from '../components';
import {preview} from '../assets';
import {useNavigate} from 'react-router-dom';
import { Loader } from 'rsuite';
const CreatePost = () => {
  const navigate=useNavigate();
  const [loading,setLoading]=useState(false);
  const [generatingImg,setGeneratingImg]=useState(false);
  const [form,setForm]=useState({
    name:'',
    prompt:'',
    photo:''
  })
  const handleSubmit=async e=>{
    e.preventDefault();
    if(form?.name && form?.prompt && form?.photo){
      try {
        setLoading(true);
        await fetch('http://localhost:8080/api/v1/post',{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(form)
        });
        navigate('/');
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false);
      }
    }else{
      console.log('please fill all fields');
    }
  }
  const handelChange=e=>{
    setForm({...form, [e.target.name]:e.target.value})
  }
  const handleSurpriseMe=()=>{
    const randomPrompt=getRandomPrompt(form.prompt);
    setForm({...form, prompt:randomPrompt});
  }
  const generateImg=async ()=>{
    if(form?.prompt){
      try {
        setGeneratingImg(true);
        const res=await fetch('http://localhost:8080/api/v1/dalle',{
          method:'POST',
          headers:{'Content-type':'application/json'},
          body:JSON.stringify({prompt:form.prompt})
        });
        const data=await res.json();
        setForm({...form,photo:`data:image/jpeg;base64,${data?.photo}`});
      } catch (error) {
        console.log(error);
      }finally{
        setGeneratingImg(false);
      }
    }
  }
  return (
    <section className='mx-auto' style={{maxWidth:'80rem'}}>
      <div>
            <h1 style={{fontWeight:'bold',color:'#222328',fontSize:'32px'}}>Create</h1>
            <p style={{maxWidth:'700px',color:'#666e75',fontSize:'16px'}} className='mt-2'>Create 
            imaginative and visually stunning through DALL-E AI and share them with the community
            </p>
        </div>
        <form onSubmit={handleSubmit} style={{marginTop:'4rem',maxWidth:'35rem'}}>
          <div className='d-flex gap-3' style={{flexDirection:'column'}}>
            <FormFiled 
            labelName='Your Name'
            type='text'
            name='name'
            placeholder='jon deo'
            value={form.name}
            handleChange={handelChange}
            />
            <FormFiled 
            labelName='Prompt'
            type='text'
            name='prompt'
            placeholder='a sea otter with a pearl earring" by Johannes Vermeer'
            value={form.prompt}
            handleChange={handelChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
            />
            <div style={{position:'relative',border:'1px solid gray',borderRadius:'8px',padding:'2rem',color:'black',width:'16rem',height:'16rem'}} className='d-flex justify-content-center align-items-center'>
              {
                form?.photo ? (
                  <img src={form?.photo} alt={form?.name}  style={{width:'125%',height:'130%',objectFit:'contain'}}/>
                ):(
                  <img src={preview} alt='preview' style={{width:'20rem',height:'17rem',objectFit:'contain',opacity:'0.4'}}/>
                )
              }
            </div>
            <div className='d-flex gap-4 mt-4'>
              <button 
              type='button'
              onClick={generateImg}
              style={{width:'100%',backgroundColor:'green',borderRadius:'6px', fontWeight:'500',fontSize:'14px'}}
              className='text-white w-sm-auto px-5 py-2'
              >
                {generatingImg ? 'Generating...' : 'Generate'}
              </button>
            </div>
            <div style={{marginTop:'2.5rem'}}>
              <p style={{marginTop:'0.5rem',color:'#666e75',fontSize:'14px'}}>Once you have created the image you went,you can 
                share it with others in the community.
              </p>
              <button 
              type='submit'
              style={{width:'100%',backgroundColor:'#6469ff',borderRadius:'6px', fontWeight:'500',fontSize:'14px'}}
              className='text-white w-sm-auto px-5 py-2 text-center'
              >
                {loading ? 'Sharing...' : 'Share with the community'}
              </button>
            </div>
          </div>
        </form>
    </section>
  )
}

export default CreatePost