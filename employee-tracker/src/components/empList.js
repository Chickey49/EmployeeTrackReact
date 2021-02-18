import {React, useState,} from 'react'
import API from './API';

export default async function BuildEmpList() {
    var list = await API.GetEmp();
    const employee = Object.values(list);
    console.log(employee.data.results)
    console.log(employee.data.results[0].name.first)
    return (
        <div>
            <row>
                <col>
                {employee.data.results[0].name.first}
                </col>
                <col>
                {employee.data.results[0].name.last}
                </col>
            </row>
        </div>
    )
}

// hooks usestate useeffect




