import React from 'react'
import Person from './Person'

function NameList() {
    const persons =[
        {
            id:1,
            name:'Luka',
            age:23,
            skill:'.NET'
        },
        {
            id:2,
            name:'Pera',
            age:25,
            skill:'React'
        },
        {
            id:3,
            name:'DJoka',
            age:21,
            skill:'PHP'
        }
    ]


    const names = ['Bruce','Clarck','Diana']
const personList = persons.map(person => <Person key={person.id} person={person} />)
const nameList = names.map((name,index) => <h2 key={index}>{index}.{name}</h2>)
    return (
        <div>
                {nameList}
        </div>
    )
}

export default NameList
