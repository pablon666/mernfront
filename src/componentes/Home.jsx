
import React from 'react'
import { useState,useEffect } from 'react'
import Tarjeta from './Tarjeta';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
const URL ='https://rickandmortyapi.com/api/character';
const Home =()=>{
    const [personaje,setPersonaje]=useState([]);
    useEffect(()=>{

        fetch(URL)
        .then((res)=>res.json())
        .then((res)=>setPersonaje(res.results))
    },[])
    const imprimirPersonajes=()=>{
        console.log(personaje);
    }
    return(
        <div className='m-5'>
            <hr />
            <h1 className='m-5 text-bg-danger text-center'>  Productos ilegales </h1>
            <hr />
            <hr></hr>
            <div className='text-center'>
                <button className='btn btn-danger' onClick={imprimirPersonajes}>
                    imprimir personaje en consola
                </button>
            </div>
            <hr />
            <div className='m-5 text-center'>
                <h2>personajes de la base de datos externa</h2>
            </div>
            <div className='m-3'>
                <Row>
                    { personaje.map((personaje)=>(
                        <Col key={personaje.id}>
                            <Tarjeta personaje={personaje} />
                        </Col>
                    ))}

                </Row>


            </div>
            
        </div>
    )
}














export default Home;