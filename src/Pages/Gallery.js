import React,{useState, useEffect} from 'react'
import { Row, Col } from "react-bootstrap"
import user from '../Images/profile.png'
import "../Styles/Gallery.css"

import {db,auth,useAuth,storage} from '../fire'
import {ref, uploadBytes,listAll,getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'

import { Tabs, Tab,Form,Button,Nav } from "react-bootstrap"

function Gallery() {

  const currentUser = useAuth()
  const [loading, setLoading] = useState(false);
  const [imageList, setImageList] = useState([])
  const [imageList2, setImageList2] = useState([])

  const [image, setImage] = useState(null)

  const imageListRef = ref(storage,"Pet/Chó/")
  const imageListRef2 = ref(storage,"Pet/Mèo/")

  const uploadImage = () =>{
    var e = document.getElementById('luachon')
    var value = e.options[e.selectedIndex].value
    if (image == null) return;
    if(value == 1){
    const imageRef = ref(storage,`Pet/Chó/${image.name + v4()}`)
    uploadBytes(imageRef, image).then(()=>{
      alert('Đăng ảnh thành công')
    })
  }
  if(value == 2){
    const imageRef = ref(storage,`Pet/Mèo/${image.name + v4()}`)
    uploadBytes(imageRef, image).then(()=>{
      alert('Đăng ảnh thành công')
    })
  }
  }

  useEffect(()=>{
    listAll(imageListRef).then((response)=>{
      response.items.forEach((item)=>{
        getDownloadURL(item).then((url)=>{
          setImageList((prev)=>[...prev, url])
        })
      })
    })
    listAll(imageListRef2).then((response2)=>{
      response2.items.forEach((item2)=>{
        getDownloadURL(item2).then((url2)=>{
          setImageList2((prev)=>[...prev, url2])
        })
      })
    })
  },[])

  return (
    <div>
    <div className='container post1'>
      <div className=''>
        <h4 className='da'>Đăng ảnh</h4>
        <hr className=''></hr>
        <div className='text-center'>
          <div className='d-inline'>
            <img src={user} className="profileImg" alt="có thể là ảnh profile"/>
          </div>
          <div className='d-inline ms-2'>
            <span className=''>{currentUser?.email}</span>
          </div>
        </div>
        <div className='text-center mt-1 mb-2'>
          <select id='luachon'>
            <option value="1">Chó</option>
            <option value="2">Mèo</option>
          </select>
        </div>
        <div className='ip'>
          <input type="file" onChange={(e)=>{setImage(e.target.files[0])}} />
        </div>
        <div className='text-center'>
            <button className="btn btn-primary" disabled={loading || !currentUser} onClick={uploadImage}>
              Đăng ảnh
            </button>
        </div>
      </div>
    </div>
    <h5 className='text-info mt-4 mx-auto text-center bg-dark w-50 p-2 rounded'>Những ảnh mà bạn đã chia sẻ</h5>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row className='ms-1'>
    <Col sm={1}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Chó</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Mèo</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={11}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <div class="text-center">
            {imageList.map((url)=>{
            return <div class='d-inline'>
              <img className='anhdang' src={url}/>
            </div>
          })}
        </div>
      </Tab.Pane>
      <Tab.Pane eventKey="second">
      <div class="text-center">
            {imageList2.map((url2)=>{
            return <div class='d-inline'>
              <img className='anhdang' src={url2}/>
            </div>
          })}
        </div>
      </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
  </div>
  )
}

export default Gallery