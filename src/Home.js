import NavbarComponent from "./NavbarComp";
import { Button, Container } from 'react-bootstrap'
import './Home.css'
import React, { useState, useEffect } from "react";
import axios from "axios";


function Home() {

    const [longurl, setLongUrl] = useState('');
    const [result, setResult] = useState('');
    const [loader, setLoader] = useState('false');
    const [histories, setHistories] = useState([]);
    const [expiryDate, setExpiryDate] = useState('none');

    useEffect(() => {
        const localHistories = localStorage.getItem('histories')
        if (localHistories) {
            setHistories(JSON.parse(localHistories));
        }

    }, [setHistories])

    const fetchData = async () => {
        try {

            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${longurl}`)
            setLoader('false')
            console.log(res.data)
            if (expiryDate === null) {
                console.log("enter")
            }
            else {
                setResult(res.data.result.full_short_link)
                const historiesLog = [...histories, res.data.result, res.data.result.link_date = expiryDate];
                setHistories(historiesLog);
                localStorage.setItem('histories', JSON.stringify(historiesLog));

            }

        } catch (err) {
            alert(err);
        }

    }

    const handleClick = () => {
        fetchData();
        setLongUrl('');

    }

    const DateEvent = (e) => {
        setExpiryDate(e.target.value)

    }

    return (
        <>

            <NavbarComponent />
            <Container id="main-home">
                <input id="original-urlbox" type="text" placeholder="Enter URL" className="form-control search-input " size="lg" value={longurl} onChange={(e) => setLongUrl(e.target.value)} required />
                <Button variant="dark" size="lg" onClick={handleClick}>Click</Button>
                {
                    loader === "true" ? <p>Loading...</p> : <p>{result}</p>
                }
            </Container>

            {/* <input type="date" selected={startDate} onChange={(date) => setStartDate(date)} /> */}

            <input type="date" onChange={DateEvent} value={expiryDate} />

        </>
        
    );
}

export default Home;