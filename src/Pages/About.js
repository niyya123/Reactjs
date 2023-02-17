import React from 'react'
import {Accordion, Container} from 'react-bootstrap'
import bg from '../Images/petgalbg.jpg'
import user from '../Images/user.png'
import '../Styles/About.css'

function About() {
  return (
    <div>
      <div className="banner1">
        <p className='text-center'>PetGal : Nơi chia sẻ mọi thứ về thú cưng</p>
      </div>
      <div className="nd">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0" className='text-white bg-primary'>
          <Accordion.Header>Câu chuyện về chúng tôi</Accordion.Header>
          <Accordion.Body>
            Tôi là một người yêu thích việc xem các video, hình ảnh, tranh và các phương tiện truyền thông có nội dung liên quan đến thú cưng. Vì thế nên bản thân quyết định lựa chọn thú cưng để làm một trang web riêng cho mọi người chia sẻ khoảnh khắc bên thú cưng của mình với nhiều người khác.
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
  )
}

export default About