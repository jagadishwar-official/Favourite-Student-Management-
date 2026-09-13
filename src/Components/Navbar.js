import { Link } from "react-router-dom";
import { useContext } from "react";
import StudentContext from "../Context/StudentContext";

function Navbar() {
    const { favourites } = useContext(StudentContext);
    return (
        <nav className="bg-indigo-600 text-white shadow-lg">
            <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold tracking-wide" > Student Management </Link>
                <div className="flex items-center gap-8">
                    <Link to="/" className="font-semibold hover:text-indigo-200 transition"> Students </Link>
                    <Link to="/favourites" className="font-semibold hover:text-indigo-200 transition flex items-center gap-2">Favourites
                        <span className="bg-white text-indigo-600 text-sm font-bold px-2 py-1 rounded-full">
                            {favourites.length}
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;