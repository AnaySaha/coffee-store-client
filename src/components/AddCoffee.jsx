import React from 'react';

const AddCoffee = () => {
    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h2 className='text-3xl font-extrabold'>Add a Coffee</h2>
           

            <form >
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                       
                        <label className="input-group">
                            
                            <input type="text" name='name' placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                       
                        <label className="input-group">
                            
                            <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div> 
                </div>



                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                       
                        <label className="input-group">
                            
                            <input type="text" name='name' placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                       
                        <label className="input-group">
                            
                            <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>


                    
                </div>
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                       
                        <label className="input-group">
                            
                            <input type="text" name='name' placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                       
                        <label className="input-group">
                            
                            <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>


                    
                </div>
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                       
                        <label className="input-group">
                            
                            <input type="text" name='name' placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                       
                        <label className="input-group">
                            
                            <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>


                    
                </div>
                
            </form>
        </div>
    );
};

export default AddCoffee;