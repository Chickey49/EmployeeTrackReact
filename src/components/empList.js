import { useState, useEffect } from 'react'
import API from './API';
import { Col, Row, Button, Table} from 'react-bootstrap'
import Search from './search';
import './empList.css'

export default function BuildEmpList() {
    const [rawEmployees, setRawEmployees] = useState([]);
    const [filteredEmployees, setFilteredEmployees] = useState([]);
    useEffect(() => {
        API.GetEmp()
            .then(response => {
                setFilteredEmployees(response.data.results);
                setRawEmployees(response.data.results);
            })

    }, [])

    function handleSearch(e) {
        function checkEmp(item) {
            return (item.name.first.toLowerCase() + item.name.last.toLowerCase()).includes(e.target.value.toLowerCase());
        }
        const arr = rawEmployees.filter(checkEmp);
        setFilteredEmployees(arr);
    }

    function handleSort() {
        const arr = [...filteredEmployees];
        arr.sort((a, b) => a.name.last.localeCompare(b.name.last, { ignorePunctuation: true }));
        setFilteredEmployees(arr);
    }

    return (
        <div className="container">
            <Search handleSearch={handleSearch} />
            <Button onClick={handleSort} variant="success">Sort Alphabetically</Button>{' '}
            <Row>
                <Col>
                    <Table style = {{width: '100%', backgroundColor: 'lightgray'}} >
                        <thead>
                            <tr>
                                <th>Picture</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredEmployees.map(item =>
                                <tr key={item.login.username}>
                                    <img src={item.picture.thumbnail}></img>
                                    <td>{item.name.first}</td>
                                    <td>{item.name.last}</td>
                                    <td>{item.login.username}</td>
                                </tr>)}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
}