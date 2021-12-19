function Adm() {
    return(
        <div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="usersTab" data-bs-toggle="tab" data-bs-target="#users" type="button" role="tab" aria-controls="home" aria-selected="true" onClick={pintarUsers}>Administrar Usuarios</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="fragancesTab" data-bs-toggle="tab" data-bs-target="#fragances" type="button" role="tab" aria-controls="profile" aria-selected="false" onClick={pintarFragances}>Administrar Productos</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="logoutTab" data-bs-toggle="tab" data-bs-target="#logout" type="button" role="tab" aria-controls="contact" aria-selected="false" onClick={pintarLogin}>Salir</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="users" role="tabpanel" aria-labelledby="home-tab">Hola users</div>
                <div className="tab-pane fade" id="fragances" role="tabpanel" aria-labelledby="profile-tab">hola fragance</div>
                <div className="tab-pane fade" id="logout" role="tabpanel" aria-labelledby="contact-tab"> ¿Quieres salir?</div>
            </div>
        </div>
    );
}

export default Adm;

function pintarUsers() {

}

function pintarFragances() {

}

function pintarLogin() {

}