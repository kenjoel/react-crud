import React, { PropsWithRef, SyntheticEvent, useEffect, useState } from "react";
import { Redirect } from "react-router";
import { product } from "../interfaces/product";
import Wrapper from "./Wrapper";

const ProductEdit = (props: PropsWithRef<any>) => {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')  
    const [redirect, setRedirect] = useState(false)

    useEffect( () => {
        (async () => {
            const response = await await fetch(`http://localhost:8000/api/products/${props.match.params.id}`)

            const product: product   = await response.json()
            setImage(product.image)
            setTitle(product.title)

        })()
    }, [])


    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch(`http://localhost:8000/api/products/${props.match.params.id}`, {

            method:"PUT",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                title,
                image
            })

         })
        setRedirect(true)
        console.log(title, image)
    }
    if(redirect){
        return <Redirect to={"/admin/products"}/>
    }

    return (
        <Wrapper>
            <form onSubmit={submit}>
                <div  className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" name="title"  
                    defaultValue={title} 
                    onChange ={e => setTitle(e.target.value)}/>

                </div>

                <div  className="form-group">
                    <label>Image</label>
                    <input type="text" className="form-control" name="image" 
                    defaultValue={image}
                    onChange ={e => setImage(e.target.value)} />
                    <button  className="btn btn-outline-secondary">Save</button>
                </div>
            </form>                
        </Wrapper>

    )
}

export default ProductEdit;