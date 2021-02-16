import React from 'react'
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import empList from './empList'

export default function GetEmpByLastName() {
    return (
        <div>
            <Get url="https://randomuser.me/api" params={{ name.last: req.params }}>
                {(error, response, isLoading, makeRequest, axios) => {
                    if (error) {
                        return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
                    }
                    else if (isLoading) {
                        return (<div>Loading...</div>)
                    }
                    else if (response !== null) {
                        return (<div>{response.data.message} <button onClick={() => makeRequest({ params: { refresh: true } })}>Refresh</button></div>)
                    }
                    return (<div>Default message before request is made.</div>)
                }}
            </Get>
        </div>
    )
}

export default function GetEmpList() {
    return (
        <div>
            <Get url="https://randomuser.me/api/?results=2">
                {(error, response, isLoading, makeRequest, axios) => {
                    if (error) {
                        return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
                    }
                    else if (isLoading) {
                        return (<div>Loading...</div>)
                    }
                    else if (response !== null) {
                        return (<empList>{response.data.message}</empList>)
                    }
                    return (<div>Default message before request is made.</div>)
                }}
            </Get>
        </div>
    )
}
