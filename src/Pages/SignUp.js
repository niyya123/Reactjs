    import React, {useState} from 'react'
    import { Button, Container } from 'react-bootstrap'

    import '../Styles/SignUp.css'
    import {createUserWithEmailAndPassword} from 'firebase/auth'
    import {auth, colRef, useAuth, db} from '../fire'
    import {addDoc} from 'firebase/firestore' 
    
    
    function SignUp() {

      const [loading, setLoading] = useState(false);

      const [registerEmail, setRegisterEmail] = useState()
      const [registerPassword, setRegisterPassword] = useState()
      const [registerName, setRegisterName] = useState()

      const currentUser = useAuth()

      const register = async ()=>{
        var email = document.getElementById('em').value
        var password = document.getElementById('pw').value
        var username = document.getElementById('usName').value
        setLoading(true)
        try{
          const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword)
          addDoc(colRef,{
            username: username,
            email : email,
            password: password
          })
          alert("Đăng ký thành công")
        } catch(err){
          console.log(err.message)
          alert("Có lỗi xảy ra với việc đăng ký")
        }
        setLoading(false);
      }

      return (
        <div>
          <Container className='mt-2 mb-2 pb-3 dk'>
            <p>Đăng ký</p>
            <p>Nhanh chóng và dễ dàng</p>
            <hr/>
            <div className="text-center mt-3">
              <input type="text" className='email' id="usName" placeholder='Tên hiển thị' /> <br></br>
            </div>
            <div className="text-center mt-3">
              <input id='em' type="email" className='email' placeholder="Email đăng ký" onChange={(e)=>{
                setRegisterEmail(e.target.value)
                }}>
              </input> <br></br>
            </div>
            <div className="text-center mt-3">
              <input id='pw' type="password" className='matkhau' placeholder="Mật khẩu" onChange={(e)=>{
                setRegisterPassword(e.target.value)
                }}>
              </input> <br></br>
            </div>
            <div className="text-center mt-3">
              <Button className="btn" onClick={register} disabled={loading || currentUser}>Đăng ký</Button>
            </div>
            <p className='p1'>Khi bạn nhấn đăng ký, bạn đã đồng ý với các <a href="">Chính sách quy định</a> của chúng tôi</p>
            <p className='p2'>Chúc bạn có thời gian tận hưởng tốt đẹp trên website của chúng tôi</p>
          </Container>
        </div>
      )
    }
    
    export default SignUp