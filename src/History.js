import React, {useState, useEffect } from 'react';
import NavbarComponent from './NavbarComp'
import Table from 'react-bootstrap/Table';

function History() {
    
    const [histories, setHistories]=useState([]);

    useEffect (() => {
      const localHistories = localStorage.getItem('histories')
      if(localHistories){
          setHistories(JSON.parse(localHistories)); 
      }

  },[setHistories])

    return (
        <>
        <NavbarComponent />
          <Table striped bordered hover>
        <thead>
          <tr>
            
            <th>Url</th>
            <th>Short Url</th>
            <th>Date</th>
            
          </tr>
        </thead>
        <tbody>
          {
            histories.slice().reverse().map((history) => (
      
                  <tr>
                      
                      <td>{history.original_link}</td>
                      <td>{history.full_short_link}</td>
                      <td>{history.link_date}</td>

                  </tr>

            ))
            
          }
          
        </tbody>
          </Table>
        </>
        

    );
}

export default History;