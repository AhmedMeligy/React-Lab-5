import React, { useCallback, useState } from 'react';
import axios from 'axios'
const AddPrd = () => {
    let [Prd,setPrd] = useState({
        title:'',
        price:0,
        stock:0,
        thumbnail:'https://source.unsplash.com/random'
    });
    let HandleChange =useCallback((e)=>{
        console.log(e)
        const {name,value} = e.target;

        setPrd((old)=>({
            ...old,
            [name] : value
        }))
    })
    let AddPrd = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:2000/products",Prd)
        .then(res=>{
            console.log(res.data)
            setPrd(res.data)
        })
        .catch(err=>console.log(err))
    }
    return (
        <div>
            <h1>Add New Product</h1>
            <form action="" onSubmit={AddPrd}>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="title" name="title" value={Prd.title} onChange={HandleChange}/>
                    <label for="floatingInput">Product Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="thumbnail" name="thumbnail" value={Prd.thumbnail} onChange={HandleChange}/>
                    <label for="floatingInput">Product Image</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="floatingInput" placeholder="Price" name="price" value={Prd.price} onChange={HandleChange}/>
                    <label for="floatingInput">Product Price</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="floatingInput" placeholder="stock" name="stock" value={Prd.stock} onChange={HandleChange}/>
                    <label for="floatingInput">Product Quantity</label>
                </div>
                <button className="btn btn-dark">Submit</button>
            </form>

        </div>
    );
};

export default AddPrd;