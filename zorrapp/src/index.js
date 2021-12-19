import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';




function App() {
  return (
        <section className="h-100 gradient-form" style={{backgroundColor: '#eee'}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3" id="mainCard">
                          {Login()}
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
