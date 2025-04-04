import React from 'react';
import { useLoaderData } from 'react-router-dom';
import React from 'react';
import Swal from 'sweetalert2'
const AddCoffee = () => {
    const handleAddCoffee = event => {
       event.preventDefault(); 

       const form = event.target;
       const name = form.name.value;
       const quantity = form.quantity.value;
       const supplier = form.supplier.value;
       const taste = form.taste.value;
       const category = form.category.value;
       const details = form.details.value;
       const photo = form.photo.value;

       const newCoffee = {name, quantity, supplier, taste, category,details, photo}
        console.log(newCoffee);

        //  ### send data to the server

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'constent-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

            }
           
        })
    }
}


const UpdateCoffee = () => {

    const coffe = useLoaderData();
    const {_id, name, quantity, supplier, taste, category,details, photo } = coffee;
    return (
        <div className='bg-[#F4F3F0] p-24'>
        <h2 className='text-3xl font-extrabold'>Update Coffee</h2>
       

        <form onSubmit={handleAddCoffee} >
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Coffee Name</span>
                    </label>
                   
                    <label className="input-group">
                        
                        <input type="text" name='name' defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
                    </label>
                </div>


                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                   
                    <label className="input-group">
                        
                        <input type="text" name='quantity' defaultValue={quantity} placeholder="Quantity" className="input input-bordered w-full" />
                    </label>
                </div> 
            </div>



            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Supplier</span>
                    </label>
                   
                    <label className="input-group">
                        
                        <input type="text" name='supplier' defaultValue={supplier} placeholder="Supplier" className="input input-bordered w-full" />
                    </label>
                </div>


                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                   
                    <label className="input-group">
                        
                        <input type="text" name='taste' defaultValue={taste} placeholder="Enter coffee Chef" className="input input-bordered w-full" />
                    </label>
                </div>


                
            </div>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                   
                    <label className="input-group">
                        
                        <input type="text" name='category' defaultValue={category} placeholder="Enter Coffee Category" className="input input-bordered w-full" />
                    </label>
                </div>


                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                   
                    <label className="input-group">
                        
                        <input type="text" name='details' defaultValue={details} placeholder="Enter the Details" className="input input-bordered w-full" />
                    </label>
                </div>


                
            </div>
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                   
                    <label className="input-group">
                        
                        <input type="text" name='photo' defaultValue={photo} placeholder="Enter The Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>


                {/* <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                   
                    <label className="input-group">
                        
                        <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered w-full" />
                    </label>
                </div> */}  
            </div>
            
            <input type="submit" value=" Coffee" className="btn btn-block" />
            
        </form>
    </div>
    );
};

export default UpdateCoffee;