import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
import { Link, useNavigate } from "react-router-dom";

export const View = ({users,deleteUser}) => {
    
    return users.map(user=>(
        
        <tr key={user.id}>
          <td>{user.id}</td>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.address}</td>
            <td>{user.email}</td>
            <td>{user.mobileno}</td>

<td>
          
                
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
        }

            /* <td className='delete-btn' onClick={()=>deleteBook(user.isbn)}>
                <Icon icon={trash}/>
            </td>            */
                  
    
