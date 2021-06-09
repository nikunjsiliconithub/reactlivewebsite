import { useState } from "react";

function Contact() {
    const [data, setData] = useState({
        fullname:'',
        phone:'',
        email:'',
        msg:'',
    })

    const InputEvent = (event) =>{
        const {name, value} = event.target
        setData((preVal) =>{
            return {
                ...preVal,
                [name] : value
            }
        })
    }
 const formSubmit = (e) => {
     e.preventDefault();
     alert(
         `${data.fullname}, ${data.phone}, ${data.email}, ${data.msg}`
     )
 }
    return (
        <>
      <div className="my-5">
        <h1 className="text-center">Contact Hello Word</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
            <div className="col-md-6 mx-auto text-left">
                <form onSubmit={formSubmit}>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                        <input type="text" className="form-control"  name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1"  name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Phone</label>
                        <input type="nunber" className="form-control"  name="phone" value={data.phone} onChange={InputEvent} placeholder="Phone Number" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1"  name="msg" value={data.msg} onChange={InputEvent} rows="3"></textarea>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-outline-primary rounded-3" type="submit">Submit form</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
      </>
    );
  }
  
  export default Contact;