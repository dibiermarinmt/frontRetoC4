



function nuevoUsuario() {
    return (
        <section className="h-100 gradient-form" style={{backgroundColor: '#eee'}}>
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
                <div className="card text-black">
                <div className="row g-0">
                    <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">

                        <div className="text-center">
                        <img src="img/zorrillo.png" style={{width: '185px'}} alt="logo"/>
                        <h4 className="mt-1 mb-5 pb-1">Zorrillo LTDA</h4>
                        </div>

                        <form action="/action_page.php">
                        <p>Ingresa tus datos para crear el nuevo usuario:</p>

                        <div className="form-floating mb-4">
                            <input type="number" id="id" className="form-control" placeholder=" # Id"/>
                            <label for="id"># Id</label>
                        </div>

                        <div className="form-floating mb-4">
                            <input type="text" id="identification" className="form-control" placeholder="# Identificación"/>
                            <label for="identification"># Identificación</label>
                        </div>

                        <div className="form-floating mb-4">
                            <input type="text" id="name" className="form-control" placeholder="Nombre"/>
                            <label for="name">Nombre</label>
                        </div>

                        <div className="form-floating mb-4">
                            <input type="date" id="birthDay" className="form-control" placeholder="Cumpleaños"/>
                            <label for="birthDay">Cumpleaños</label>
                        </div>

                        <div className="form-floating mb-4">
                            <input type="text" id="monthBirthDay" className="form-control" placeholder="Mes de Cumpleaños"/>
                            <label for="monthBirthDay">Mes de Cumpleaños</label>
                        </div>

                        <div className="form-floating mb-4">
                            <input type="text" id="address" className="form-control" placeholder="Dirección"/>
                            <label for="address">Dirección</label>
                        </div>

                        <div className="form-floating mb-4">
                            <input type="text" id="cellPhone" className="form-control" placeholder="# Celular"/>
                            <label for="cellPhone"># Celular</label>
                        </div>

                        <div className="form-floating mb-4">
                            <input type="email" id="email" className="form-control" placeholder="Correo"/>
                            <label for="email">Correo</label>
                        </div>

                        <div className="form-floating mb-4">
                            <input type="text" id="zone" className="form-control" placeholder="# Zona"/>
                            <label for="zone"># Zona</label>
                        </div>

                        <div className="form-floating mb-4">
                            <input type="text" id="type" className="form-control" placeholder="Tipo"/>
                            <label for="zone">Tipo</label>
                        </div>

                        <div className="form-floating mb-4">
                            <input type="password" id="password" className="form-control" placeholder="Contraseña" />
                            <label for="password">Contraseña</label>
                        </div>
                        <p>Ingresa nuevamente la contraseña:</p>
                        <div className="form-floating mb-4">
                            <input type="password" id="password2" className="form-control" placeholder="Contraseña" />
                            <label for="password2">Contraseña</label>
                        </div>


                        <div className="text-center pt-1 mb-4 pb-1">
                            <button className="btn btn-primary btn-lg btn-block fa-lg gradient-custom-2 mb-3" type="button" onclick="crearUser()">Crear</button><br />
                            ¿Ya tienes una cuenta?<br/>
                            Ingresa <a className="text-muted" href="./">Aquí</a>.
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                            <p className="mb-0 me-2">¿No tienes una cuenta?</p>
                            <button type="button" className="btn btn-outline-danger">Crear nueva</button>
                        </div>
                    </form>

                    </div>
                    </div>
                    <div className="card-body rounded-3 col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                        <h4 className="mb-4">Somos más que una compañía</h4>
                        <p className="small mb-0">Zorrillo LTDA es una empresa Ibaguereña con más de 10 años de trayectoria en la venta de perfumes y colonias mediante el servicio de venta directa por catalogo, se ubica en el barrio Interlaken. Actualmente cuenta con más de 80 empleados entre directos y fuerza de ventas independiente.</p>
                        <p className="small mb-0">Contamos con una gran variedad de colonias. Estamos en constante contacto con nuestros clientes para ofrecer las fragancias que justamente ellos quieren.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
</section>
    );
}