import React from 'react';
import './List.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function List(props) {
    return (
        <div>
            {props.items && props.items.map(item => {
                return  <div key={item.key} className='list'>
                            <p>
                                <input 
                                    type='text'
                                    id={item.key}
                                    value={item.text}
                                    onChange={e => props.setUpdate(e.target.value, item.key)}/>
                                <span>
                                    <FontAwesomeIcon 
                                        className='delete'
                                        icon='trash'
                                        onClick={() => props.deleteItem(item.key)}/>
                                </span>
                            </p>
                        </div>
            })}
        </div>
    )
}

export default List