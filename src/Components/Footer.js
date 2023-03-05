import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'

import anh1 from '../Images/Screenshot 2022-05-25 111819.png'

import {BsFacebook,BsInstagram,BsTwitter,BsMailbox2} from 'react-icons/bs'

import '../Styles/Footer.css'




function Footer() {
    async function dangky(){
        alert('Bạn đã đăng ký nhận thông tin qua email thành công')
    }
  return (
    <div>
        <div className='bg-dark text-white'>
            <div className='row'>
                <div className='col-md-3 cot1'>
                    <img src={anh1} alt="Đây có thể là ảnh logo" className='logo d-inline-block'/>
                    <h4 className='d-inline-block'>PetGal</h4>
                    <hr/>
                    <p>Nơi giúp bạn có thể chia sẻ các khoảnh khắc bên thú cưng của mình. Hình ảnh, video, bài viết,... chúng tôi đều có thể dễ dàng up lên giúp bạn !</p>
                </div>
                <div className='col-md-3 cot2'>
                    <h4>Các đường dẫn</h4>
                    <hr/>
                    <ul>
                        <li><Link to="/home" className='a'>Trang chủ</Link></li> 
                        <li><Link to="/gallery" className='a'>Thư viện</Link></li>
                        <li><Link to="/post" className='a'>Đăng bài</Link></li>
                        <li><Link to="/about" className='a'>Về chúng tôi</Link></li>
                        <li><Link to="/signup" className='a'>Đăng ký</Link></li>
                    </ul>
                </div>
                <div className='col-md-3 cot3'>
                    <h4>Kết nối với chúng tôi qua</h4>
                    <hr/>
                    <ul>
                        <li><Link to="#" className='a'><i><BsFacebook  className='fb'/></i> Facebook</Link></li>
                        <li><Link to="#" className='a'><i><BsInstagram className='is'/></i> Instagram</Link></li>
                        <li><Link to="#" className='a'><i><BsTwitter className='tw'/></i> Twitter</Link></li>
                    </ul>
                </div>
                <div className='col-md-3 cot4'>
                    <h4>Đăng ký</h4>
                    <hr/>
                    <Row>
                        <Col lg={5} xs={8}>
                        <input type="text" placeholder='Nhập emails'/>
                        </Col>
                        <Col lg={2} xs={1} className="sub-icon">
                        <i><BsMailbox2/></i>
                        </Col>
                        <Col lg={5} xs={7}>
                        <Button className='sub-btn' onClick={dangky}>Đăng ký</Button>
                        </Col>
                    </Row>       
                    <p>Đăng ký để nhận thông báo sớm nhất</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export {Footer}