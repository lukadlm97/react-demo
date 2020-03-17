import React, { Component } from 'react'
import { UserConsumer } from './userContext'

export class ComponentE extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                    {
                        (username) => {
                        return <div>Hello {username}</div>
                        }
                    }
                </UserConsumer>
            </div>
        )
    }
}

export default ComponentE
