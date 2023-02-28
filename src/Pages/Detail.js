import React, {useState,useEffect} from 'react'

import '../Styles/Detail.css'
import anh2 from '../Images/profile.png'
import {BsTwitter} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {TiSocialGooglePlus} from 'react-icons/ti'

import {useAuth,db } from '../fire'
import {collection,getDocs} from 'firebase/firestore'
import {motion} from 'framer-motion'

function Detail() {

  const currentUser = useAuth()
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")

  const [userList, setUserList] = useState([])
  const [loginUser, setLoginUserData] = useState([])

  const usersCollectionRef = collection(db,"users")

  useEffect(()=>{
    const getUsers = async() => {
      const data = await getDocs(usersCollectionRef)
      setUserList(data.docs.map((doc) => ({...doc.data(),id:doc.id})))
    }
    console.log()
    getUsers()
  })

  const handleTest = () =>{
    console.log(loginUser.username);
  }
  const handleShowInfo = () =>{
    const uniqueData = userList.find((u)=> u.email == currentUser.email);
    setLoginUserData(uniqueData);
  }

  return ( 
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className='DetailPage'>   
      <div className='TopDP'>
        <aside className="profile-card">

          <header>

          <a>
          <img src={anh2} className="profileImg2" alt="có thể là ảnh profile" onMouseEnter={handleShowInfo}/>
          </a>
          <h2>{currentUser?.email}</h2>

          </header>

          <div className="profile-bio">

          <p>Xin chào mọi người</p>
          <p className='text-center'>Tên người dùng : {loginUser.username} </p>
          </div>

          <ul className="profile-social-links">

          <li>
          <a>
          <i><BsTwitter  className='twitter'/></i>
          </a>
          </li>

          <li>
          <a>
          <i><BsFacebook  className='facebook'/></i>
          </a>
          </li>

          <li>
          <a>
          <i><TiSocialGooglePlus  className='google'/></i>
          </a>
          </li>

          </ul>

        </aside>
      </div>
      {/* <button onClick={handleTest}>test</button> */}
    </motion.div>
  )
}

export default Detail