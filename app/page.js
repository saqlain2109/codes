"use client"
import axios from 'axios'
import React,{useState} from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [MainTask, setMainTask] = useState([]);
  const [images, setImages] = useState([]);
  let submitHandeler = (e) =>{
    e.preventDefault()
    console.log(title, desc);
    setMainTask([...MainTask,{title,desc}])
    settitle("");
    setdesc("");
  }

  let renderTask= <h2 className='text-black'>No task Available</h2>
 if (MainTask.length > 0) {
    renderTask = MainTask.map((t,i)=>{
    return <div className='flex justify-between mb-8'>
      <li key={i}>{t.title}</li>
      <li key={i}>{t.desc}</li>
      <button className='bg-red-400 text-white font-bold px-5 py-2 rounded' onClick={()=>{
        deleteHandler(i);
      }}>Delete</button>
    </div>
  })  
 }
 //Image API Delete Button Handaler
 const deleteHandler=(i)=>{
  let copytask =[...MainTask]
  copytask.splice(i,1)
  setMainTask(copytask);
 }
  //Image API Get Image Handaler
  const getImages = async() =>{
    try{
      const response=await axios.get('https://picsum.photos/v2/list')
      const data = response.data;
      setImages(data);
      console.log(images);
    }catch(e){
      console.error("error in fetching images")
  
  }
}
//tostify messages function
const notify=()=>{
  toast.success('Login Sucessfully✅!', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
}
  return (
    <div className=''>
      <div className='flex justify-around items-end '>
      <Link href={'/About'} className='gap-3'>About</Link>
      <Link href={'/Product'}>Product</Link>
      <Link href={'/ContactUs'}>Contact Us</Link>
      </div>
      <button onClick={getImages} className='mt-10 mb-3 px-8 py-2 bg-green-400 text-white font-bold'>Fetch</button>
      <div className='p-10'>
        {images.map((elem,i) =>{
         return <img 
         key={i}
          src={elem.download_url}
          width={300}
          height={300}
          className='m-10 rounded inline-block'
         />
        })}
      </div>
      <div>
        <form onSubmit={submitHandeler}>
        <h2 className='font-bold text-3xl'>My todo list</h2>
        <input type="text" placeholder='Enter title' className='mt-10 text-black' value={title}
         onChange={(e)=>{
           settitle(e.target.value)
         }}/>
        <input type="text" placeholder='Enter Description' className='mt-10 ml-8 text-black' value={desc}
          onChange={(e)=>{
            setdesc(e.target.value)
          }}
        />
        <button className='bg-blue-500 px-3 py-2 mx-5 rounded font-bold'>Add Task</button>
        </form>
        <hr />
        <div className='p-10 bg-slate-400 text-black font-bold mt-10'>
          <ul>
          {renderTask}
          </ul>
          
        </div>
      </div>
      <div>
      <button className='bg-green-400 px-3 py-2 mx-5 rounded font-bold' onClick={notify}>login</button>
      <ToastContainer/>
      </div>
    </div>
  )
}

export default page
