const LoginPage = () => {
  return (
    <main className="flex-grow-1 d-flex align-items-center justify-content-center py-5 px-3">
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <div className="text-center">
          <h2 className="mt-4 h3 fw-bold tracking-tight">Inicie sesión en su cuenta</h2>
        </div>
        <form action="#" className="mt-4" method="POST">
          <div className="p-4 rounded-3 shadow-sm bg-body-tertiary border">
            <div className="mb-3">
              <label className="form-label" htmlFor="email-address">Correo electrónico</label>
              <input
                autoComplete="email"
                className="form-control"
                id="email-address"
                name="email"
                placeholder="usted@ejemplo.com"
                required
                type="email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="password">Contraseña</label>
              <input
                autoComplete="current-password"
                className="form-control"
                id="password"
                name="password"
                placeholder="••••••••"
                required
                type="password"
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                />
                <label className="form-check-label" htmlFor="remember-me">
                  Recuérdame
                </label>
              </div>
              <div className="text-sm">
                <a className="fw-medium" href="#">
                  ¿Olvidó su contraseña?
                </a>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button className="w-100 btn btn-primary btn-lg" type="submit">
              Iniciar sesión
            </button>
          </div>
        </form>
        <p className="mt-3 text-center text-secondary">
          ¿No tiene una cuenta?{' '}
          <a className="fw-medium" href="#">
            Registrarse
          </a>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
