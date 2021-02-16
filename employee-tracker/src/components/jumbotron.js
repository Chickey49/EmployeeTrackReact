import React from 'react'
import { Jumbotron } from 'react-bootstrap'

const jumboStyles ={ 
     backgroundColor: '#407FBB'
}


export default function jumbotron() {
    return (
        <Jumbotron style={{ jumboStyles }}>
            <h1>Employee Directory</h1>
        </Jumbotron>


    )
}
