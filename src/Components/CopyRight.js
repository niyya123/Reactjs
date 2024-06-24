import React from 'react'
import {FaRegCopyright} from 'react-icons/fa'
import '../Styles/CopyRight.css'

function CopyRight() {
  return    <div>
                <p className='cpr'>
                    <i><FaRegCopyright/></i>{" "}
                    2024. Bản quyền thiết kế thuộc về htnguyen.uit@gmail.com
                </p>
            </div>
}

export {CopyRight}