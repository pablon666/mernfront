import 'semantic-ui-css/semantic.min.css'
import { Form, Button, Label } from 'semantic-ui-react'  
import { useForm } from 'react-hook-form'
import axios from 'axios';
import Swal from 'sweetalert2';




const Formulario = () =>{

    const URL = process.env.REACT_APP_URL;

    const {register, handleSubmit, reset, formState: { errors } } =  useForm({
        defaultValues: {
            nombre: '',
            apellido: '',
            email: '',
            password: ''
        }
    });

    const onSubmit = (datos, e) =>{
        e.preventDefault();
        try {
            console.log(datos);
            axios.post(URL, datos);
            e.target.reset();
            console.log(URL);
            Swal.fire({
                title: "Muy Bien!",
                text: "Tu usuario fue creado con exito!",
                icon: "success",
                confirmButtonText: 'Genial'
            })

        } catch (error) {
            console.log(error);
        }
        
    }

    /*const (nombre, setNombre) = useState('');
    const (apellido, setApellido) = useState('');
    const (email, setEmail) = useState('');
    const (password, setPassword) = useState('');
    */

    return (
        <>
        <div className='centraruno'>
            <h1>
                Formulario de Registro
            </h1>             
        </div>              
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <Label>Nombre:</Label>
                    <input placeholder='Nombre'
                    type='text'
                    name='nombre'
                    {...register('nombre',
                        {
                            required: true,
                            maxLength: 50

                        })
                    }
                    />
                </Form.Field>
                {errors.nombre && <p className='errores'>El nombre es obligatorio con un maximo de 50 caracteres</p>}

                <Form.Field>
                    <Label>Apellido</Label>
                    <input placeholder='Apellido'
                    type='text'
                    name='apellido'
                    {...register('apellido',
                        {
                            required: true,
                            maxLength: 50
                        })
                    }
                    />
                </Form.Field>
                {errors.apellido && <p className='errores'>El Apellido es obligatorio con un maximo de 50 caracteres</p>}

                <Form.Field>
                <Label>Email</Label>
                    <input placeholder='Email'
                    type='email'
                    name='email'
                    {...register('email', 
                        {
                            required: true,
                            //pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })
                    }
                    />
                </Form.Field>
                {errors.email && <p className='errores'>El Email es obligatorio</p>}

                <Form.Field>
                <Label>Password</Label>
                    <input placeholder='Password de 6 a 10 caracteres'
                    type='password'
                    name='password'
                    {...register('password', 
                    {
                        required: true,
                        //pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/
                    })
                }
                    />
                </Form.Field>
                {errors.password && <p className='errores'>El Password  debe incluir minuscula, mayuscula y entre 6 a 10 caracteres</p>}

                <div className='centrar'>
                    <Button.Group>
                        <Button type='button' onClick={() => reset()} color='orange'>Limpiar Formulario</Button>
                        <Button.Or />
                        <Button type='submit' positive>Enviar Datos</Button>
                    </Button.Group>

                    {/*
                    <Button  color='green' type='submit'>Enviar Datos</Button>
                    <Button  type='button' onClick={() => reset()}>Limpiar Formulario</Button>
                    */}
                </div>
            </Form>
        </>
    )
}

export default Formulario