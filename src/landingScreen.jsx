import { useState } from "react";
import "./index.css";
import CreateAcc from "./CreateAcc.jsx";
import Signin from "./Signin.jsx";

export default function Landing() {
    const [Create, setCreate] = useState(false);
    const [Login, setLogin] = useState(false);

    const handleCreateAccountClick = (e) => {
        e.preventDefault();
        setCreate(true);
    };
    if (Create) {
        return <CreateAcc />;
    }

    const handleLoginClick = (e) => {
        e.preventDefault();
        setLogin(true);
    };
    if (Login) {
        return <Signin />;
    }

    return (
        <div className="flex justify-center items-start bg-white min-h-screen pt-10">
            <div className="bg-[#cdcdcd] w-[360px] h-screen p-6 shadow-md rounded pt-100">
                <h1 className="text-xl font-semibold mb-1 text-left">Welcome to PopX</h1>
                <hr className="border-gray-300 mb-3" />
                <p className="text-gray-600 text-sm mb-6 text-left">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="space-y-3">
                    <button
                        className="w-full h-10 bg-[#6C25FF] text-white rounded text-sm"
                        onClick={handleCreateAccountClick}
                    >
                        Create Account
                    </button>
                    <button
                        className="w-full h-10 text-black rounded bg-[#CEBAFB] text-sm"
                        onClick={handleLoginClick}
                    >
                        Already Registered? Login
                    </button>
                </div>
            </div>
        </div>
    );
}
