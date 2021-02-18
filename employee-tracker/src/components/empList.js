import {React, useState,} from 'react'
import GetEmpList from './API';

export default async function EmpList() {
    var { list, setListState } = useState(await GetEmpList());
    ({ list }) => {
        setListState(list.map(item => (
            <li key={item.id}>
                <div>{item.id}</div>
                <div>{item.firstname}</div>
                <div>{item.lastname}</div>
                <div>{item.year}</div>
            </li>
        )))
    }
    console.log(list)
    return (
        <div>
            <EmpList/>
        </div>
    )
}

// hooks usestate useeffect




