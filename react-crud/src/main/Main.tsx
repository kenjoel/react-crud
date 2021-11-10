import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainNav from "../admin/components/MainNav";
import { product } from "../interfaces/product";

const Main = () => {
  const [products, setProducts] = useState([] as product[]);

  useEffect(  () => {

    (async () => {
      const response = await fetch("http://localhost:8000/api/products")

      const data = await response.json();
      console.log(data)

      setProducts(data)
    })()


  }, [])

  const like = async (id: number) => {
    await fetch(`http://localhost:8001/api/products/${id}/like`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"}
    })

    setProducts( products.map( (p: product) => {
      if(p.id == id){
        p.likes++
      }

      return p;
    }))

  }

    return( 
<main>

  <div className="album py-5 bg-light">
    <div className="container">
      <div className="row row-cols-1">
        <MainNav/>
      </div>
      <div className="row row-cols-3 row-cols-sm-2 row-cols-md-3 g-3">
        {products.map((p: product) => { return(
          <div className="col" key={p.id}>
          <div className="card shadow-sm">
            <img src={p.image} height="180"/>
            <div className="card-body">
              <p className="card-text">{p.title}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary"
                  onClick={() => like(p.id)}
                  >Like</button>
                </div>
                <small className="text-muted">{p.likes} likes</small>
              </div>
            </div>
          </div>
          </div>
        ) })}        
        </div>
      </div>
    </div>
</main>
    )
}

export default Main