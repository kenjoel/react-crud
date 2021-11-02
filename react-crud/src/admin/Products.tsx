import React, { useEffect, useState } from 'react';
import { product } from '../interfaces/product';
import Wrapper from './Wrapper';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect( () => {
        (async () =>{
            const response = await fetch("http://localhost:8000/api/products")
            const data = await response.json()

            console.log(data)

        })();

    }, [])

    const deleteProduct = async (id: number) => {
        if (window.confirm("You Sure you wanna Delete?")) {
            
        await fetch(`http://localhost:8000/api/products/${id}`, {
            method: 'DELETE'
        })

        setProducts(products.filter(
            (p: product) => p.id !== id
        ))

        }
    }
    return(
        <Wrapper>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Title</th>
                  <th scope="col">Likes</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p: product) => {
                    return(
                        <tr key={p.id}>
                        <td>{p.id}</td>
                        <td><img src={p.image} height="180"/></td>
                        <td>{p.title}</td>
                        <td>{p.likes }</td>
                        <td>
                            <div className="btn-group mr-2">
                                <a href="#" className="btn btn-sm btn-outline-secondary" onClick={() => {deleteProduct(p.id)}}>Delete</a>
                            </div>
                        </td>
                        </tr>
                    )
                })}
              </tbody>
            </table>
          </div>
         </Wrapper>
    )
}

export default Products