import React from 'react'
import Icon from './icon'
import './buttom.css'

import { FormattedMessage } from 'react-intl';

export const ButtomGet = ({
  messageId = "btn-know-more",
  defaultMessage = "Read more",
}) => {
    return (
        <button className="cssbuttons-io-button" type="button">  
            <FormattedMessage
                id={messageId}
                defaultMessage={defaultMessage}
            />
            <div className="icon">
                <Icon/>
            </div>
        </button>
    )
}
