import React from 'react'
import {} from "react-bootstrap"
import { } from 'react-bootstrap'
import {} from 'react-router-dom'
import husky from '../Images/husky.jpg'
import {BiBookContent,BiSupport} from 'react-icons/bi'
import {VscSymbolInterface} from 'react-icons/vsc'
import "../Styles/Home.css"
import ReactPlayer from 'react-player'


function Home() {

  return (
    <div className='Home'>
      <div className='text-center nd1 bg-dark'>
        <div className='start-50 text-white'>
          <h3>PetGal</h3>
          <h4>Chia sẻ mọi thứ về Pet của bạn</h4>
        </div>
      </div>
      <div className="row nd2">
        <div className="col 1 text-center">
          <div className='nd2_col1_content'>
          <div className="row ms-3  text-center">
            <h4 className='text-info'>Giới thiệu về trang web</h4>
          </div>
          <div className="row w-75 mx-auto text-center">
            <p>PetGal là website xây dựng trên tiêu chí là nơi để mọi người chia sẻ các bài viết, hình ảnh hằng ngày về pet của họ</p>
            <p>Tất cả thông tin chúng tôi đều được chọn lọc từ nhiều nguồn có chọn lọc, đã qua thực nghiệm để có thể mang lại thông tin chính xác nahast cho mọi người khi tìm kiếm trên trang web</p>
          </div>
          </div>
        </div>
        <div className="col">
          <img src={husky} className='anhmh'/>
        </div>
      </div>
      <div className='pr2'>
      <div className='nd3 w-75 mx-auto'>
        <h3 className='text-center text-success'>Lời cảm ơn</h3>
        <p className='text-center'>Cảm ơn các bạn đã quan tâm đến nội dung của trang web. Hy vọng mọi người sẽ có một khoảng thời gian giải trí trên website của chúng tôi</p>
        <p className='text-center'>Nội dung chúng tôi mang đến đều được thông qua kiểm duyệt nghiệm ngặt</p>
      </div>
      <div className="row nd4">
        <div className="col text-center ">
        <BiBookContent className='icon text-primary'/>
        <h5 className='text-primary'>Nội dung</h5>
        <p className='w-50 mx-auto'>Nội dung kiểm soát nghiêm ngặt, có kiểm chứng</p>
        </div>
        <div className="col text-center">
        <VscSymbolInterface className='icon gd'/>
        <h5 className='gd'>Giao diện</h5>
        <p className='w-50 mx-auto'>Giao diện trực quan, dễ sử dụng</p>
        </div>
        <div className="col text-center">
        <BiSupport className='icon ht'/>
        <h5 className='ht mb-2'>Hỗ trợ</h5>
        <p className='w-50 mx-auto'>Hỗ trợ nhanh chóng cho người dùng thông qua chatbox</p>
        </div>
      </div>
      </div>
      <div className="row nd5">
        <h2 className='text-center text-white'>Video thú vị về thú cưng</h2>
        <ReactPlayer controls width='900px' height='500px' url='https://www.youtube.com/watch?v=vlVjnoYkHvk&ab_channel=K%27eyushTheStuntDog'/>
      </div>
    </div>
  )
}

export default Home