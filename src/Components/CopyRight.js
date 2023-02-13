import React from 'react'
import {FaRegCopyright} from 'react-icons/fa'
import '../Styles/CopyRight.css'

function CopyRight() {
  return    <div>
                <p className='cpr'>
                    <i><FaRegCopyright/></i>{" "}
                    2021-2022. Bản quyền design thuộc về 19521911@gm.uit.edu.vn
                </p>
            </div>
}

export {CopyRight}