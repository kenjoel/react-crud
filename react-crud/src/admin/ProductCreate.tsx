import React from "react";
import Wrapper from "./Wrapper";

const ProductCreate = () => {
    return (
        <Wrapper>
            <form>
                <div  className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" name="title"/>
                </div>

                <div  className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" name="title"/>
                    <button className="btn btn-outline-secondary">Save</button>
                </div>
            </form>                
        </Wrapper>

    )
}

export default ProductCreate;