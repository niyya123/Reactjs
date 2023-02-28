import { Button } from 'react-bootstrap'
import React,{useState, useRef} from 'react'


import '../Styles/SignIn.css'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth, useAuth} from '../fire'

function SignIn() {
    const [loginEmail, setLoginEmail] = useState()
    const [loginPassword, setLoginPassword] = useState()

    const currentUser = useAuth()
    
    const [loading, setLoading] = useState(false);

    const login = async ()=>{
        
        try{
            const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword)
            alert("Đăng nhập thành công")
            console.log(user)
          } catch(err){
            console.log(err.message)
            alert("Tài khoản sai hoặc không tồn tại")
        }
    }

  return    <div className='row'>
                <div className='col'>
                <div className='dangnhap'>
                    <input type="email" placeholder="Nhập email" className='tk' onChange={(e)=>{
                setLoginEmail(e.target.value)
                }}/>
                    <input type="password" placeholder="Nhập mật khẩu" className='mk' onChange={(e)=>{
                setLoginPassword(e.target.value)
                }}/>
                    
                </div>
                </div>
                <div className='col nut'>
                <Button type="submit" className='' disabled={loading || currentUser} onClick={login}>
                        Đăng nhập
                </Button>
                </div>
            </div>
}

export {SignIn}