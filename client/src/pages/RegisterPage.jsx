import React from 'react';
import { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';

const RegisterPage = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: '',
    });
    // defining handleChange function to handle form input changes
    const handlechange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    // defining handleSubmit function to submit the form 
    const handleSubmit = async(e) => {
      try {
        e.preventDefault(); // Prevent form from submitting normally
        //  const response= await axios.post('http://localhost:8000/api/v1/users/register', formData)
         const response= await axios.post('/api/v1/users/register', formData)
        
         // console.log('User registered successfully', response.data);
         console.log('User registered successfully', response);
         // using toast 
         toast.success(response.data.message)
        
        setFormData({ name: '', email: '', password: '' });
      } catch (error) {
        console.log('Error during registration:', error);
        toast.error(error.response.data.message)
      }
    };
   
    return (
        <Container className="flex flex-col items-center justify-center min-h-screen bg-red-500">
            <Typography variant="h4" className="mb-8 text-center">
                Register
            </Typography>
            <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    variant="outlined"
                    placeholder='Enter your name'
                    name='name'
                    value={formData.name}
                    onChange={handlechange}
                    fullWidth
                    className="mb-4" // Margin bottom for spacing
                    required
                    sx={{ marginBottom: '16px' }} // Additional margin using MUI sx prop
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    placeholder='Enter your email'
                    name='email'
                    value={formData.email}
                    onChange={handlechange}

                    fullWidth
                    className="mb-4" // Margin bottom for spacing
                    required
                    type="email"
                    sx={{ marginBottom: '16px' }} // Additional margin using MUI sx prop
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    placeholder='Enter your password'
                    name='password'
                    value={formData.password}
                    onChange={handlechange}
                    fullWidth
                    className="mb-4" // Margin bottom for spacing
                    required
                    type="password"
                    sx={{ marginBottom: '16px' }} // Additional margin using MUI sx prop
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="w-full mb-4 bg-black" // Margin bottom for spacing
                    sx={{ marginBottom: '16px' }} // Additional margin using MUI sx prop
                >
                    Create an account
                </Button>
            </form>
        </Container>
    );
};

export default RegisterPage;