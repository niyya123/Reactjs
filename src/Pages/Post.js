import React,{useEffect, useState} from 'react'
import {collection, getDocs,addDoc, deleteDoc, doc,updateDoc} from 'firebase/firestore'
import {db,auth,useAuth} from '../fire'
import '../Styles/Post.css'
import anh2 from '../Images/profile.png'
import {Form, Button, Modal} from 'react-bootstrap'
import { BsNewspaper } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
import PaginationAdmin from '../Components/PaginationAdmin/Pagination'
import {motion} from 'framer-motion'

function Post() {

  const currentUser = useAuth()
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const [postList, setPostList] = useState([])

  const postsCollectionRef = collection(db,"posts")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [input, setInput] = useState()

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
      const confirm = window.confirm("Bạn muốn xóa bài đăng này không");
      if (confirm) {
        const postDoc = doc(db,"posts",id)
        await deleteDoc(postDoc)
      } 
    }

    const updatePost = async (id) => {
      const confirm = window.confirm("Bạn thực sự muốn sửa bài đăng này không");
      if (confirm) {
        const postDoc = doc(db,"posts",id)
        await updateDoc(postDoc,{
          content: input,
        })
      } 
      handleClose()
    }

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className='PostPage'>
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
          <div className='container' fluid>
            <div className='row border-bottom pb-1'>
              <div className='col title'>{post.title}</div>
              <div className='col d-flex flex-row-reverse'>
                <button className='button_delete' onClick={()=> {deletePost(post.id)}}>Xóa</button>
                <button className='button_fix' onClick={handleShow}>Sửa</button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Sửa nội dung</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <input placeholder='Nhập nôi dung cần sửa' value={input} onChange={e => setInput(e.target.value)}></input>
                  </Modal.Body>
                  <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Hủy
                  </Button>
                  <Button variant="primary" onClick={()=> {updatePost(post.id)}}>
                    Lưu thay đổi
                  </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
          <h6 className='text-white text-center mt-1 border-bottom pb-1'>Tác giả : {post.author.name}</h6>
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
    </motion.div>
  )
}

export default Post