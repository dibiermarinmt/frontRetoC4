import React from "react";
import ReactDOM from 'react-dom';
import {raiz} from "./global";
import Adm from "./adm";

function Profile(props) {
    return(
        <div className="card-body p-md-5 mx-md-4">
            <div className="card-header gradient-custom-2">
                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <div className="text-center">
                        <img src="img/zorrilloblanco.png" style={{width: '185px'}} alt="logo" />
                        <h4 className="mt-1 mb-5 pb-1">Zorrillo LTDA</h4>
                    </div>
                    <h4 className="mb-4">¡Somos más que una compañía!</h4>
                </div>
            </div>

            <div className="card-body text-center" id="user">
                {pintarUserBody(props.idUser)}
            </div>
        </div>
    );
}

export default Profile;

function pintarUserBody(id) {
    fetch(raiz+"/user/"+id)
        .then(res => res.json())
        .then(res => {
            if(res.type === 'ADM') {
                ReactDOM.render(
                    <React.StrictMode>
                      <Adm />
                    </React.StrictMode>,
                    document.getElementById('user')
                );
            } else if(res.type === 'ASE') {
                ReactDOM.render(
                    <React.StrictMode>
                      <h1>Hola Ase.</h1>
                    </React.StrictMode>,
                    document.getElementById('user')
                );               
            } else if(res.type === 'COORD') {
                ReactDOM.render(
                    <React.StrictMode>
                      <h1> Hola cord.</h1>
                    </React.StrictMode>,
                    document.getElementById('user')
                );
            } else {
                ReactDOM.render(
                    <React.StrictMode>
                      <h1>No tienes un rol asignado.</h1>
                    </React.StrictMode>,
                    document.getElementById('user')
                );
            }
        })
        .catch( err => console.error(err));
}

/**
 *  $.ajax({
        url: raiz + "/user/" +id,
        type:"GET",
        async: false,
        datatype:"JSON",
        success:function(user){
            let userBody = "<script>";
            if(user.type == "ADM") {
                let name = JSON.stringify(user.name);
                userBody += "pintarAdmin("+name+");";
            } else if(user.type == "COORD") {
                zoneCoord = user.zone;
                userBody += "pintarCoord();";
            } else if(user.type == "ASE") {
                idAse = id;
                userBody += "pintarAse();";
            } else {
                userBody = "No tienes un rol asignado.";
            }
            userBody += "</script>";
            $("#user").html(userBody);
        }
    });
 */