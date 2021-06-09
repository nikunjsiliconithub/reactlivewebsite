import web from "./images/PWA-1024x512.jpg"
import Card from "./Card"
import Sdata from "./Sdata"
function Service() {
    return (
        <>
      <div className="my-5">
        <h1 className="text-center">Our Service</h1>
      </div>
      <div className="container-fluid">
         <div className="row">
          <div className="col-lg-10 col-12 mx-auto">
                <div className="row gy-4">
                    
                    {
                        Sdata.map((val, ind) =>{
                            return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />
                        })
                    }
                </div>
          </div>
      </div>
    </div>
    </>
    );
  }
  
  export default Service;