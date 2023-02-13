import React, {useState,useEffect} from 'react'

import '../Styles/Detail.css'
import anh2 from '../Images/profile.png'
import {BsTwitter} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {TiSocialGooglePlus} from 'react-icons/ti'

import {useAuth,db } from '../fire'
import {collection,getDocs} from 'firebase/firestore'

function Detail() {

  const currentUser = useAuth()
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")

  const [userList, setUserList] = useState([])

  const usersCollectionRef = collection(db,"users")

  useEffect(()=>{
    const getUsers = async() => {
      const data = await getDocs(usersCollectionRef)
      setUserList(data.docs.map((doc) => ({...doc.data(),id:doc.id})))
    }
    console.log()
    getUsers()
  })

  return ( 
    <div className='DetailPage'>   
      <div className='TopDP'>
        <aside className="profile-card">

          <header>

          <a>
          <img src={anh2} className="profileImg2" alt="có thể là ảnh profile"/>
          </a>
          <h2>{currentUser?.email}</h2>

          </header>

          <div className="profile-bio">

          <p>Xin chào mọi người</p>
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
    </div>
  )
}

export default Detail