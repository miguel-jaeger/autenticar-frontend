const Footer = () => {
  return (
    <footer className="bg-white border-top mt-auto">
      <div className="container-fluid py-4">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0 text-muted small">
              © 2025 User Manager. Todos los derechos reservados.
            </p>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="#" className="text-muted text-decoration-none small">
                Privacidad
              </a>
              <a href="#" className="text-muted text-decoration-none small">
                Términos
              </a>
              <a href="#" className="text-muted text-decoration-none small">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;