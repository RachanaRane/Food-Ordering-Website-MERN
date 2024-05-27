import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import axios from 'axios';

const EditFood = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();

    const [name, setName] = useState('');
    const [priceInCents, setPriceInCents] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:3000/food/${id}`)
            .then((response) => {
                setName(response.data.name);
                setPriceInCents(response.data.priceInCents);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                console.error(error);
                alert('An error happened. Check console');
            });
    }, [id]);

    const handleEditFood = () => {
        // Validate the inputs
        /*if (name.trim() === '' || priceInCents === '' || isNaN(priceInCents)) {
            enqueueSnackbar('Name and Price In Cents cannot be empty and must be valid', { variant: 'error' });
            return;
        }*/
        //const data = { name, priceInCents: parseInt(priceInCents) };
        const data = { name, priceInCents};
        console.log('Sending data:', data); // Log the data being sent

        setLoading(true);
        axios
            .put(`http://localhost:3000/food/${id}`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Food edited successfully', { variant: 'success' });
                navigate('/admin');
            })
            .catch((error) => {
                setLoading(false);
                if (error.response) {
                   // console.error('Server responded with:', error.response.data); // Log the error response from the server
                    enqueueSnackbar('Error', { variant: 'error' });
                } 
            });
    };

    return (
        <div className='p-6 bg-gray-50 flex justify-center items-center'>
            <div className='container max-w-lg shadow-lg rounded-lg p-5 bg-white'>
                <Link to="/admin" className="flex justify-center items-center bg-gray-400 mb-4 w-12 py-2 px-4 text-sm rounded-xl">Back</Link>
                <h1>Edit Food</h1>
                <div className='my-4'>
                    <label htmlFor="name" className='block text-md text-gray-600 mb-2'>Name</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='border border-gray-300 px-4 py-2 w-full rounded-md'
                    />
                    <label htmlFor="priceInCents" className='block text-md text-gray-600 mb-2'>Price In Cents</label>
                    <input
                        id="priceInCents"
                        type="number"
                        value={priceInCents}
                        onChange={(e) => setPriceInCents(e.target.value)}
                        className='border border-gray-300 px-4 py-2 w-full rounded-md'
                    />
                </div>
                <button
                    onClick={handleEditFood}
                    className='bg-green-400 hover:bg-green-500 text-white p-3 rounded-md'
                    disabled={loading}
                >
                    {loading ? 'Saving...' : 'Save Changes'}
                </button>
            </div>
        </div>
    );
}

export default EditFood;
