import React,{useEffect, useState} from 'react'
import {ref, uploadBytes,listAll,getDownloadURL} from 'firebase/storage'
import {storage} from '../fire'

function Cats() {

    const [imageList, setImageList] = useState([])

    const imageListRef = ref(storage,"Pet/Mèo/")

    useEffect(()=>{
        listAll(imageListRef).then((response)=>{
          response.items.forEach((item)=>{
            getDownloadURL(item).then((url)=>{
              setImageList((prev)=>[...prev, url])
            })
          })
        })
      },[])
  return (
    <div className='text-center'>
        {imageList.map((url)=>{
        return <img className='anhdang' src={url}/>
      })}
    </div>
  )
}

export {Cats}