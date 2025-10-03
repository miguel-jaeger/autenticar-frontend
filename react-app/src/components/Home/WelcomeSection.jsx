import { Link } from 'react-router-dom';

const WelcomeSection = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
                    Bienvenido a la Aplicación de Gestión de Usuarios
                </h1>

                <p className="mt-6 text-lg text-slate-600">
                    Esta aplicación le permite gestionar fácilmente las cuentas de usuario.
                    Puede agregar nuevos usuarios, ver una lista de usuarios existentes y
                    autenticarse o cerrar sesión en su cuenta. Utilice el menú de navegación
                    de arriba para comenzar.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/add-user"
                        className="flex items-center justify-center gap-2 w-full sm:w-auto h-12 px-6 bg-blue-600 text-white text-base font-bold rounded-lg shadow-md hover:bg-blue-700 transition-all transform hover:scale-105"
                    >
                        <span className="material-symbols-outlined">person_add</span>
                        <span>Adicionar Usuario</span>
                    </Link>

                    <Link
                        to="/users"
                        className="flex items-center justify-center gap-2 w-full sm:w-auto h-12 px-6 bg-blue-50 text-blue-600 font-bold rounded-lg hover:bg-blue-100 transition-colors"
                    >
                        <span className="material-symbols-outlined">list_alt</span>
                        <span>Listar Usuarios</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WelcomeSection;