import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo y título */}
                    <div className="flex items-center gap-4">
                        <Link to="/" className="flex items-center gap-2 text-blue-600">
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                viewBox="0 0 48 48"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <h1 className="text-xl font-bold text-slate-800">User Manager</h1>
                        </Link>
                    </div>

                    {/* Navegación */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link
                            to="/add-user"
                            className={`text-sm font-medium transition-colors ${isActive('/add-user')
                                    ? 'text-blue-600'
                                    : 'text-slate-600 hover:text-blue-600'
                                }`}
                        >
                            Adicionar Usuario
                        </Link>
                        <Link
                            to="/users"
                            className={`text-sm font-medium transition-colors ${isActive('/users')
                                    ? 'text-blue-600'
                                    : 'text-slate-600 hover:text-blue-600'
                                }`}
                        >
                            Listar Usuarios
                        </Link>
                    </nav>

                    {/* Botones de acción */}
                    <div className="flex items-center gap-4">
                        <Link
                            to="/login"
                            className="flex items-center justify-center gap-2 min-w-[120px] h-10 px-4 bg-blue-600 text-white text-sm font-bold rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
                        >
                            <span>Autenticar</span>
                            <span className="material-symbols-outlined text-xl">login</span>
                        </Link>
                        <button className="md:hidden flex items-center justify-center size-10 rounded-lg text-slate-600 hover:bg-blue-50">
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;