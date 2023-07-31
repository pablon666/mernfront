import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'


const Productos = () =>{

    const DATOS = process.env.REACT_APP_DATOS;

    console.log(DATOS);

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        axios.get(DATOS)
        .then((res) => {
            console.log(res.data);
            setApiData(res.data.personas)
        })
    
    }, [DATOS])

    const getData = () =>{
        axios.get(DATOS)
        .then((res) => {
            console.log(res.data);
            setApiData(res.data.personas)
        })
    }  



    const onDelete = (id) => {
        console.log('1. Estamos en el onDelete');

        axios.delete(`${DATOS}/${id}`)
        .then(() => {
            getData()
            console.log('2. Respondemos Promesa');
        })
        
        console.log(`La ruta es: ${DATOS}/${id}`);
        //console.log(`${id} - Eliminado`)
        console.log('3. Salimos del deletes');

    }

    console.log(apiData);

    return (
        <div className="container m-5">
            <div className="text-center m-5">
                <h1>
                    Estamos en la Página de Clientes
                </h1>
            </div>

            {/* tabla para mostrar a los clientes */}

            <Table singleLine>
                <Table.Header>
                    <Table.HeaderCell>Nombre</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell>Update</Table.HeaderCell>
                    <Table.HeaderCell>Delete</Table.HeaderCell>
                </Table.Header>
                <Table.Body>
                    {apiData.map((data)=>{
                        return (
                            <Table.Row key={data._id}>
                                <Table.Cell>{data.nombre}</Table.Cell>
                                <Table.Cell>{data.email}</Table.Cell>
                                <Link>
                                    <Table.Cell>
                                        <Button onClick={() => console.log('Dato actualizado')}>Update</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data._id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })
                    }
                </Table.Body>
            </Table>
        </div>
    )
}

export default Productos;