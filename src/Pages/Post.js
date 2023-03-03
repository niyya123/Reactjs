import React,{useEffect, useState} from 'react'
import {collection, getDocs,addDoc, deleteDoc, doc,updateDoc, query, where, QuerySnapshot, orderBy, limit, onSnapshot} from 'firebase/firestore'
import {db,auth,useAuth} from '../fire'
import '../Styles/Post.css'
import anh2 from '../Images/profile.png'
import {Form, Button, Modal, Container,Col,Row} from 'react-bootstrap'
import { BsNewspaper } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
import PaginationAdmin from '../Components/PaginationAdmin/Pagination'
import {filterProps, motion} from 'framer-motion'

function Post() {

  const currentUser = useAuth()
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const [postList, setPostList] = useState([])
  const [testPostList, setTestPostList] = useState([])

  const postsCollectionRef = collection(db,'posts')

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async (id) => 
  {
    setPostId(id)
    setShow(true);
  }
  const [input, setInput] = useState()
  const [postId, setPostId] = useState()

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

    const updatePost = async () => {
      const confirm = window.confirm("Bạn thực sự muốn sửa bài đăng này không");
      if (confirm) {
        const postDoc = doc(db,"posts",postId)
        await updateDoc(postDoc,{
          content: input,
        });
      } 
      handleClose()
    }

    useEffect(()=>{
      const getPosts = async () => {
        try {
          const q = query(postsCollectionRef)
          onSnapshot(q,(snapshot)=>{
            const data = []
            snapshot.docs.forEach((doc)=>{
              data.push({...doc.data(),id:doc.id})
            })
            setPostList([])
            setPostList(data)
          })
        } catch (error) {
          console.log(error)
        }
      }
      getPosts()
    },[])

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);
    const firstPageIndex = (currentPage - 1) * postsPerPage;
    const lastPageIndex = firstPageIndex + postsPerPage;
    const dataEachPage = postList.slice(firstPageIndex, lastPageIndex);

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className='PostPage'>
      <Container className='TopPostPage' fluid>
        <Row className='title'>
          <h4 className='text-primary mt-1 text-center'>Tạo bài viết</h4>
        </Row>
        <Row className='mt-2'>
          <Col lg={{span:1,offset:3}} xs={{span:1}}>
            <img src={anh2} className="profileImg" alt="có thể là ảnh profile"/>
          </Col>
          <Col lg={3} xs={{span:5,offset:2}}>
            <Row className=''>
              <p className=''>{currentUser?.email}</p>
            </Row>
            <Row className=''>
              <Form.Select aria-label="Default select example">
                <option>Công khai</option>
                <option>Bạn bè</option>
                <option>Chỉ mình tôi</option>
                <option>Tùy chỉnh</option>
              </Form.Select>
            </Row>
          </Col>
        </Row>
        <Row>
          <Form className='form'>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label><h4 className='post-title'>Tiêu đề</h4></Form.Label>
              <Form.Control type="text" 
              placeholder="Enter title" 
              onChange={(e)=>{
                setTitle(e.target.value)
              }} className="input"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicContent">
              <Form.Label><h4 className='post-title'>Nội dung</h4></Form.Label>
              <Form.Control as="textarea" rows={5} 
              placeholder="Enter Content"
              onChange={(e)=>{
                setContent(e.target.value)
              }} />
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Col className='text-center mb-1'>
            <Button  variant="primary" onClick={createPost} disabled={loading || !currentUser}>
              Post bài viết
            </Button>
          </Col>
        </Row>
      </Container>
      <h4 className='text-success'>Bài viết mới nhất <BsNewspaper/></h4>
      <div className='text-center noti' >Không có bài đăng nào</div>
      <Container className='post_content'>
        {dataEachPage.map((post)=>(
        <div key={post.author.id} className='post'>
          <div className='container' fluid>
            <div className='row border-bottom pb-1'>
              <div className='col posted-title'>{post.title}</div>
              <div className='col d-flex flex-row-reverse'>
                <button className='button_delete' onClick={()=> {deletePost(post.id)}}>Xóa</button>
                <button className='button_fix' onClick={()=> {handleShow(post.id)}}>Sửa</button>
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
                  <Button variant="primary" onClick={()=> {updatePost()}}>
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
      </Container>
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