import React from 'react'
import { Jumbotron } from 'react-bootstrap'

const jumboStyles ={ 
     backgroundColor: '#827381'
}


export default function jumbotron() {
    return (
        <Jumbotron style={{ backgroundColor:'#827381' }}>
            <h1 className={'d-flex justify-content-center'}>Employee Directory</h1>
        </Jumbotron>
    )
}
