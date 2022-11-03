
import React from "react"

const Cards = ()=> {

    return(
        
        <div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card text-center h-100">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      
      <div class="card-footer bg-transparent d-grid d-md-flex justify-content-md-center ">
      <button class="btn btn-primary" type="button">Find Out More!</button>
      </div>

    </div>
  </div>

  <div className="col">
    <div className="card text-center h-100 ">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer bg-transparent d-grid d-md-flex justify-content-md-center ">
      <button type="button" className="btn btn-primary">Find Out More!</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-center h-100">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer bg-transparent d-grid d-md-flex justify-content-md-center ">
      <button type="button" className="btn btn-primary">Find Out More!</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card text-center h-100">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer bg-transparent d-grid d-md-flex justify-content-md-center ">
      <button type="button" className="btn btn-primary">Find Out More!</button>
      </div>
    </div>
  </div>
</div>

)
 }

export default Cards ;