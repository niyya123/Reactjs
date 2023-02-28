import React from 'react'
import {Accordion, Container} from 'react-bootstrap'
import bg from '../Images/petgalbg.jpg'
import user from '../Images/user.png'
import '../Styles/About.css'
import {motion} from 'framer-motion'

function About() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <div className="container mt-2">
        <div className='row'>
          <div className='banner'>
            <img src={bg} alt="Có thể là một chú chó" className='banner_img text-center'/>
            <p className='banner_text'>PetGal : Nơi chia sẻ mọi thứ về thú cưng</p>
          </div>
        </div>
        <div className='row mt-2 mb-2'>
          <Accordion defaultActiveKey="0" className='accordion'>
            <Accordion.Item eventKey="0" className='text-white bg-primary'>
              <Accordion.Header>Về chúng tôi</Accordion.Header>
              <Accordion.Body>
                Là một người yêu thích nội dung liên quan đến thú cưng. Vì thế nên bản thân quyết định lựa chọn thú cưng để làm một trang web riêng cho mọi người chia sẻ khoảnh khắc bên thú cưng của mình với nhiều người khác.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className='text-info bg-dark'> 
              <Accordion.Header>Các thành viên</Accordion.Header>
              <Accordion.Body>
                <Container>
                  <div className="text-center">Dự án này do 1 người đảm nhận</div>
                  <div className="row text-center mt-2">
                    <div className="col">
                      <div className="row">
                        <img src={user} className="user mx-auto"/>
                      </div>
                      <div className="row">
                        <p>Huỳnh Trung Nguyên</p>
                      </div>
                    </div>
                  </div>
                </Container>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className='text-white bg-success bg-'>
              <Accordion.Header>Lời cảm ơn</Accordion.Header>
              <Accordion.Body>
                Cảm ơn người dùng đã quan tâm, sử dụng trang web chúng tôi để thõa mãn nhu cầu của mọi người! Kính chúc mọi người có 1 khoảng thời gian sử dụng website này thật bổ ích và hạnh phúc !
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </motion.div>
  )
}

export default About