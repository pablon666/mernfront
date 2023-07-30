import 'semantic-ui-css/semantic.min.css'
import { Form, Button, Label } from 'semantic-ui-react'  
import { useForm } from 'react-hook-form'
import axios from 'axios';
import Swal from 'sweetalert2';





const Login = () =>{

    const URL = 'https://app-mern-ed5881b777eb.herokuapp.com/login';

    const {register, handleSubmit, reset, formState: { errors } } =  useForm({
        defaultValues: {
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
                text: "!Bienvenido!",
                icon: "success",
                confirmButtonText: '¿y ahora?'
                
            })
            
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <>
        <div className='centraruno'>
            <h1>
                Logueate asi podes utilizar nuestros servicios
            </h1>             
        </div>              
            <Form onSubmit={handleSubmit(onSubmit)}>

                <Form.Field>
                <Label>Email</Label>
                    <input placeholder='Email'
                    type='email'
                    name='email'
                    {...register('email', 
                        {
                            required: true,
                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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
                        pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/
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

                </div>
            </Form>
        </>
    )
}


export default Login;