import React from 'react'

function ChildCompRef(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildCompRef

