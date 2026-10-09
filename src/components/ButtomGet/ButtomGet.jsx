import React from 'react'
import Icon from './icon'
import './buttom.css'

export const ButtomGet = ({
  messageId = "btn-know-more",
  defaultMessage = "Read more",
}) => {
    return (
        <button className="cssbuttons-io-button" type="button">  
            {defaultMessage}
            <div className="icon">
                <Icon/>
            </div>
        </button>
    )
}
