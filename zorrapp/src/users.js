export default function Users() {
    return(
        <div>
            <br />
            <br />
            <h4 className="mt-1 mb-5 pb-1">TABLA DE ADMINISTRACIÓN DE USUARIOS</h4>
            <p>¿Deseas crear un nuevo usuario?
                <br />
                <br />
                <button className="btn btn-primary btn-lg btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={crearUser}>Crear</button>
            </p>
            <center><div id="editarUser" style={{width: '60%'}}></div></center>
            <div id="tablaUsers"></div>
        </div>
    );
}

function crearUser() {
    
}