import React from 'react'
import {} from "react-bootstrap"
import {Carousel } from 'react-bootstrap'
import {} from 'react-router-dom'
import husky from '../Images/husky.jpg'
import slide1 from '../Images/website.png'
import slide2 from '../Images/slide2.png'
import slide3 from '../Images/slide3.png'
import slide4 from '../Images/slide4.jpg'
import slide5 from '../Images/slide5.jpg'
import slide6 from '../Images/slide6.png'
import {BiBookContent,BiSupport} from 'react-icons/bi'
import {VscSymbolInterface} from 'react-icons/vsc'
import "../Styles/Home.css"
import ReactPlayer from 'react-player'
import {motion} from 'framer-motion'

function Home() {

  return (
    <motion.div className='Home' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <div className='text-center nd1 bg-dark'>
        <div className='start-50 text-white'>
          <h3>PetGal</h3>
          <h4>Chia sẻ mọi thứ về Pet của bạn</h4>
        </div>
      </div>
      <div className="row nd2">
        <div className="col 1 text-center">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>PetGal</h3>
                <p>Website chia sẻ về thú cưng</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide2}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Chia sẻ ảnh</h3>
                <p>Gửi hình ảnh vui nhộn về thú cưng</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide3}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Post về thú cưng</h3>
                <p>
                  Đặt câu hỏi, mẹo,... thông qua bài viết.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col">
        <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide4}
                alt="First slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide5}
                alt="Second slide"
              />

              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide6}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className='pr2'>
      <div className='nd3 w-100 mx-auto'>
        <h3 className='text-center text-success'>Lời cảm ơn</h3>
        <p className='text-center'>Cảm ơn mọi người đã truy cập website của chúng tôi</p>
        <p className='text-center'>Website chúng tôi đảm bảo các tiêu chí sau</p>
      </div>
      <div className="row nd4">
        <div className="col text-center ">
          <BiBookContent className='icon text-primary'/>
          <h5 className='text-primary'>Nội dung</h5>
          <p className='w-100 mx-auto'>Có kiểm soát, kiểm chứng</p>
        </div>
        <div className="col text-center">
          <VscSymbolInterface className='icon gd'/>
          <h5 className='gd'>Giao diện</h5>
          <p className='w-100 mx-auto'>Trực quan, dễ sử dụng</p>
        </div>
        <div className="col text-center">
          <BiSupport className='icon ht'/>
          <h5 className='ht mb-2'>Hỗ trợ</h5>
          <p className='w-100 mx-auto'>Nhanh chóng qua chatbox</p>
        </div>
      </div>
      </div>
      <div className="row nd5">
        <h2 className='text-center text-white'>Video thú vị về thú cưng</h2>
        <ReactPlayer controls width='900px' height='500px' url='https://www.youtube.com/watch?v=vlVjnoYkHvk&ab_channel=K%27eyushTheStuntDog'/>
      </div>
    </motion.div>
  )
}

export default Home