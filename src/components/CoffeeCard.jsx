import Link from "daisyui/components/link";
import Swal from "sweetalert2";


const CoffeeCard = (coffee, coffees, setCoffees) => {
    const {_id, name, quantity, supplier, taste, category,details, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id);
        
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
  

    fetch(`http://localhost:5000/coffee/${_id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.deletedCount > 0) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });

              const remaining = coffees.filter(coffee = cof._id !== _id);
              setCoffees(remaining);
        }
      
    })
  }
});
        
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={photo}/></figure>
  <div className="flex justify-between border border-4 w-full pr-4">
   <div>
   <h2 className="card-title">Name: {name}</h2>
    <p>{quantity}</p>
    <p>{supplier}</p>
    <p>{taste}</p>
   </div>
    <div className="card-actions justify-end">
        <div className="btn-group btn-group-vertical space">
    <button className="btn">View</button>
    <Link to= {`updateCoffee/${_id}`}></Link>
    <button className="btn">Edit</button>
    <button 
    onClick={() => handleDelete(_id)}
    className="btn bg-red-500">X</button>
        </div>
    </div>
    
  </div>
</div>
    );
};

export default CoffeeCard;