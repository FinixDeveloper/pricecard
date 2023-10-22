import React from 'react';
import './App.css';
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {
 
  render() {
   
    return (
     
      <div className="maincontainer">
       <section>
          <div className='container'>

            
            <header className="mb-5">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h1>React Price Card Guvi Task</h1>
                </div>
              </div>
            </header>
                      
            <div className="row">
             
             <div className="col-lg-4 mb-5 mb-lg-0">
               <div className="p-5">
                 <h1 className="mb-4 h6">Free</h1>
                 <h2 className="h1">$0/month</h2>
                 <hr className="solid"></hr>
                 <ul className="list-unstyled my-4">
                 <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> Single User</li>
                   <li className="mb-3">
                     <i className="fa fa-check mr-2 text-primary"></i> 50GB Storage</li>
                     <li className="mb-3">
                     <i className="fa fa-check mr-2 text-primary"></i> Unlimited Public Projects</li>
                     <li className="mb-3">
                     <i className="fa fa-check mr-2 text-primary"></i> Community Access</li>
                   <li className="mb-3 text-muted">
                     <i className="fa fa-times mr-2"></i><del>Unlimited Private Projects</del></li>
                   <li className="mb-3 text-muted">
                     <i className="fa fa-times mr-2"></i><del>Dedicated Phone Support</del></li>
                   <li className="mb-3 text-muted">
                     <i className="fa fa-times mr-2"></i><del>Free Subdomain</del></li>
                   <li className="mb-3 text-muted">
                     <i className="fa fa-times mr-2"></i><del>Monthly Status Reports</del></li>
                  </ul>
                   <a href="#" className="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a>
               </div>
             </div>
                
             <div className="col-lg-4 mb-5 mb-lg-0">
               <div className="p-5">
                 <h1 className="mb-4 h6">Plus</h1>
                 <h2 className="h1">$9/month</h2>
                 <hr className="solid"></hr>
                 <ul className="list-unstyled my-4">
                 <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary"></i> Single User</li>
                   <li className="mb-3">
                     <i className="fa fa-check mr-2 text-primary"></i> 50GB Storage</li>
                     <li className="mb-3">
                     <i className="fa fa-check mr-2 text-primary"></i> Unlimited Public Projects</li>
                     <li className="mb-3">
                     <i className="fa fa-check mr-2 text-primary"></i> Community Access</li>
                   <li className="mb-3">
                     <i className="fa fa-check mr-2 text-primary"></i>Unlimited Private Projects</li>
                   <li className="mb-3">
                     <i className="fa fa-check mr-2 text-primary"></i>Dedicated Phone Support</li>
                   <li className="mb-3">
                     <i className="fa fa-check mr-2 text-primary"></i>Free Subdomain</li>
                   <li className="mb-3 text-muted">
                     <i className="fa fa-times mr-2"></i><del>Monthly Status Reports</del></li>
                  </ul>
                   <a href="#" className="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a>
               </div>
             </div>
            
             <div className="col-lg-4 mb-5 mb-lg-0">
               <div className="p-5">
                 <h1 className="mb-4 h6">PRO</h1>
                 <h2 className="h1">$49/month</h2>
                 <hr className="solid"></hr>
                 <ul className="list-unstyled my-4">
                 <li className="mb-3">
                 <i className="fa fa-check mr-2 text-primary"></i> Single User</li>
                   <li className="mb-3">
                     <i className="fa fa-check mr-2 text-primary"></i> 50GB Storage</li>
                     <li className="mb-3">
                     <i className="fa fa-check mr-2 text-primary"></i> Unlimited Public Projects</li>
                     <li className="mb-3">
                     <i className="fa fa-check mr-2 text-primary"></i> Community Access</li>
                   <li className="mb-3">
                     <i className="fa fa-check mr-2 text-primary"></i>Unlimited Private Projects</li>
                   <li className="mb-3">
                     <i className="fa fa-check mr-2 text-primary"></i>Dedicated Phone Support</li>
                   <li className="mb-3">
                     <i className="fa fa-check mr-2 text-primary"></i>Free Subdomain</li>
                   <li className="mb-3">
                     <i className="fa fa-check mr-2 text-primary"></i>Monthly Status Reports</li>
                  </ul>
                   <a href="#" className="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a>
               </div>
               </div>

         </div>
         </div>
      </section>
      </div>
     
    
     
)
}
}
export default Home;