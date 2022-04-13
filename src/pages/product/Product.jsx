import React from 'react'
import "./product.css"
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleConatiner">
          <h1 className="productTitle">Product</h1>
          <Link to="/newproduct">
            <button className="productAddButton">Create</button>
          </Link>
      </div>

      <div className="productTop">

          <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance (last 3 months)" />
          </div>



        <div className="productTopRight">
        
          <div className="productTopRightInfo">
            <img src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aXBhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" 
             alt="img" classname="productTopImage" />
             <span className="productTopHead">Apple Ipad</span>
           </div>


         <div className="newTopRight">
           <div className="productTopRightLower">
          id:
            <span className="productInfoValue-1">232</span>
           </div>


           <div className="productTopRightLower">
            sales:
            <span className="productInfoValue">2321</span>
           </div>


           <div className="productTopRightLower">
           active:
           <span className="productInfoValue">yes</span>
           </div>


           <div className="productTopRightLower">
           in stock
            <span className="productInfoValue-4">no</span>
           </div>
           
           </div>


          </div>

      </div>


      <div className="productBottom">

      <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder="Apple IPad" />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>

              <div className="productFormRight">
                 <div className="productUpload">
                     <img src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aXBhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                      alt="" className="productUploadImg"  />
                        <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
                 </div>
            </form>
      </div>
    </div>
  )
}
