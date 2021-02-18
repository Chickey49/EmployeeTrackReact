import React from 'react'
import empList from './empList'


export default function GetEmpList() {
    return (fetch('https://randomuser.me/api/?results=10')
    )
}

// export default function GetEmpList() {
//     return (
//         <div>
//             <Get url="https://randomuser.me/api/?results=2">
//                 {(error, response, isLoading, makeRequest, axios) => {
//                     if (error) {
//                         return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
//                     }
//                     else if (isLoading) {
//                         return (<div>Loading...</div>)
//                     }
//                     else if (response !== null) {
//                         return (<empList>{response.data.message}</empList>)
//                     }
//                     return (<div>Default message before request is made.</div>)
//                 }}
//             </Get>
//         </div>
//     )
// }
