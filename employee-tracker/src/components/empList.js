import { useState, useEffect } from 'react'
import API from './API';
import { Row, Button } from 'react-bootstrap'
import Search from './search';

export default function BuildEmpList() {
    const [rawEmployees, setRawEmployees] = useState([]);
    const [filteredEmployees, setFilteredEmployees] = useState([]);
    useEffect(() => {
        API.GetEmp()
            .then(response => {
                // console.log(response.data.results); 
                setFilteredEmployees(response.data.results);
                setRawEmployees(response.data.results);
            })

    }, [])

    // filter employees
    function handleSearch(e) {
        console.log(e.target.value)

        function checkEmp(item) {
            return (item.name.first.toLowerCase() + item.name.last.toLowerCase()).includes(e.target.value.toLowerCase());
        }
        const arr = rawEmployees.filter(checkEmp);        
        setFilteredEmployees(arr);

    }

    // sort whatever rawEmployees list contains.
    // not what filtered employees contains.
    function handleSort(e) {
        console.log("filtered count" + filteredEmployees.length);
        console.log("first item a " + filteredEmployees );
        filteredEmployees.sort(function(a, b) {
            var nameA = a.name.last.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.last.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            
            // names must be equal
            return 0;
            });
            
        console.log("first item b " + filteredEmployees );
        setFilteredEmployees(filteredEmployees);
    }

    // items.sort(function(a, b) {
    //     var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    //     var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    //     if (nameA < nameB) {
    //       return -1;
    //     }
    //     if (nameA > nameB) {
    //       return 1;
    //     }
      
    //     // names must be equal
    //     return 0;
    //   });

    return (
        <div>
            <Search handleSearch={handleSearch} />
            <Button onClick={handleSort} variant="success">Sort Alphabetically</Button>{' '}
            <Row>
                {filteredEmployees.map(item =>
                    <li key={item.login.username}>{item.name.first} {item.name.last}</li>)}
            </Row>
        </div>
    )
}