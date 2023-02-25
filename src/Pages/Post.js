import React,{useEffect, useState} from 'react'
import {collection, getDocs,addDoc, deleteDoc, doc} from 'firebase/firestore'
import {db,auth,useAuth} from '../fire'
import '../Styles/Post.css'
import anh2 from '../Images/profile.png'
import {Form, Button} from 'react-bootstrap'
import { BsNewspaper } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
import PaginationAdmin from '../Components/PaginationAdmin/Pagination'


function Post() {

  const currentUser = useAuth()
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const [postList, setPostList] = useState([])

  const postsCollectionRef = collection(db,"posts")

  useEffect(()=>{
    const getPosts = async() => {
      const data = await getDocs(postsCollectionRef)
      setPostList(data.docs.map((doc) => ({...doc.data(),id:doc.id})))
    }

    getPosts()
  })

  const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);
    const firstPageIndex = (currentPage - 1) * postsPerPage;
    const lastPageIndex = firstPageIndex + postsPerPage;
    const dataEachPage = postList.slice(firstPageIndex, lastPageIndex);

    if (postList.length > 0){
      let a = document.getElementsByClassName('noti')[0];
      a.style.display="none";
    }
  
    const createPost = async () =>{
      await addDoc(postsCollectionRef,{
        title,
        content, 
        author:{name:auth.currentUser.email , id:auth.currentUser.uid},
      })
      alert("Bài đăng đã được thêm thành công")
    }

    const deletePost = async (id) => {
      const postDoc = doc(db,"posts",id)
      await deleteDoc(postDoc)
    }

  return (
    <div className='PostPage'>
      <div className='TopPostPage'>
        <div className='div'>
          <h4 className='h'>Tạo bài viết</h4>
          <hr className='hr1'></hr>
          <div className='div1'>
            <div className='div2'>
              <img src={anh2} className="profileImg" alt="có thể là ảnh profile"/>
            </div>
            <div className='div3'>
              <span className='name'>{currentUser?.email}</span>
              <Form.Select aria-label="Default select example">
                <option>Công khai</option>
                <option>Bạn bè</option>
                <option>Chỉ mình tôi</option>
                <option>Tùy chỉnh</option>
              </Form.Select>
            </div>
          </div>
          <div className='div4'>
            <p></p>
            <Form className='form'>
              <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Tiêu đề</Form.Label>
                <Form.Control type="text" 
                placeholder="Enter title" 
                onChange={(e)=>{
                  setTitle(e.target.value)
                }}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicContent">
                <Form.Label>Content</Form.Label>
                <Form.Control as="textarea" rows={5} 
                placeholder="Enter Content"
                onChange={(e)=>{
                  setContent(e.target.value)
                }} />
              </Form.Group>
              
              <Button variant="primary" onClick={createPost} disabled={loading || !currentUser}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <h4 className='text-success'>Bài viết mới nhất <BsNewspaper/></h4>
      <div className='text-center noti' >Không có bài đăng nào</div>
      <div className='post_content'>
        {dataEachPage.map((post)=>(
        <div key={post.author.id} className='post'>
          <h5 className='tieude text-white text-center border-bottom pb-2'>{post.title} <span className='float-end bg-dark'><button onClick={()=> {deletePost(post.id)}}>&#128465;</button></span></h5>
          <h6 className='text-white text-center'>Tác giả : {post.author.name}</h6>
          <p className='content'>{post.content}</p>
        </div>
        ))}
      </div>
      <div className='dock'>
      <PaginationAdmin
            className="pagination"
            currentPage={currentPage}
            totalCount={postList.length}
            itemsPerPage={postsPerPage}
            onPageChange={(page) => setCurrentPage(page)}/>
            </div>
    </div>
  )
}

export default Post