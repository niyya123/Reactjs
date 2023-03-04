import React,{useState} from 'react'
import {Navbar,Container,Nav,Dropdown} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'

import anh1 from '../Images/Screenshot 2022-05-25 111819.png'

import '../Styles/Header.css'
import { SignIn } from './SignIn'
import {auth, useAuth} from '../fire'
import { signOut } from 'firebase/auth'




function Header() {
  const [loading, setLoading] = useState(true);
  const currentUser = useAuth()
  const navigate = useNavigate();

  const logout = async () => {
    if (!currentUser) alert("Bạn chưa đăng nhập, không thể đăng xuất được")
    else{
      navigate('/home')
      await signOut(auth)
    } 
  }
  const handleTest = async () => {
    console.log(currentUser.uid);
  }
  const handleBio = async () => {
    if (!currentUser) alert("Bạn chưa đăng nhập, không thể xem thông tin được")
    else navigate('/detail')
  }

  return (
    <div>
        <Navbar sticky="top" bg="dark" expand="lg" className='nav'>
          <Container fluid>
            <img src={anh1} className="logo" alt="có thể là ảnh logo"/>
            <Navbar.Brand as="div" className='text-info brand'>
              <Link to="/home" className='brand-name'>PetGal</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='custom_navbar_toggle'/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navigation">
                <Link to="/home" className='navBtn'>Trang chủ</Link>
                <Link to="/gallery" className='navBtn'>Thư viện</Link>
                <Link to="/post" className='navBtn'>Đăng bài</Link>
                <Link to="/about" className='navBtn'>Về chúng tôi</Link>
                <Link to="/signup" className='navBtn'>Đăng ký</Link>
              </Nav>
            </Navbar.Collapse>
            <SignIn className="signin"/>
            <Dropdown className='menuDropdown'>
              <Dropdown.Toggle variant="success" id="dropdown-basic" className="menuBtn">
                <span>{currentUser?.email}</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={handleBio}>Thông tin tài khoản</Dropdown.Item>
                <Dropdown.Item onClick={logout}>Đăng xuất</Dropdown.Item>
                {/* <Dropdown.Item onClick={handleTest}>Test</Dropdown.Item> */}
              </Dropdown.Menu>
            </Dropdown>
          </Container>
      </Navbar>
    </div>
  )
}

export {Header}