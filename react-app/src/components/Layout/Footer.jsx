const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-200 mt-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-600">
                        © 2025 User Manager. Todos los derechos reservados.
                    </p>
                    <div className="flex items-center gap-6">
                        <a
                            href="#"
                            className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                        >
                            Privacidad
                        </a>
                        <a
                            href="#"
                            className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                        >
                            Términos
                        </a>
                        <a
                            href="#"
                            className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                        >
                            Contacto
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;