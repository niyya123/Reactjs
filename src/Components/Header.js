import React,{useState} from 'react'
import {Navbar,Container,Nav,Dropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import anh1 from '../Images/Screenshot 2022-05-25 111819.png'

import '../Styles/Header.css'
import { SignIn } from './SignIn'
import {auth, useAuth} from '../fire'
import { signOut } from 'firebase/auth'




function Header() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth()

  const logout = async () => {
    await signOut(auth)
  }

  return (
    <div>
        <Navbar sticky="top" bg="dark" expand="lg">
        <Container fluid>
          <img src={anh1} className="logo" alt="có thể là ảnh logo"/>
          <Navbar.Brand href="#home" className='text-info brand'>
            PetGal
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/home" className='navBtn'>Trang chủ</Link>
              <Link to="/gallery" className='navBtn'>Thư viện</Link>
              <Link to="/post" className='navBtn'>Đăng bài</Link>
              <Link to="/about" className='navBtn'>Về chúng tôi</Link>
              <Link to="/signup" className='navBtn'>Đăng ký</Link>
            </Nav>
          </Navbar.Collapse>
          <SignIn/>
          <Dropdown className='menuDropdown'>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="menuBtn">
              <span>{currentUser?.email}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item disabled={loading}><Link to="/detail" className='tkBtn'>Thông tin tài khoản</Link></Dropdown.Item>
              <Dropdown.Item disabled={loading} onClick={logout}>Đăng xuất</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </div>
  )
}

export {Header}