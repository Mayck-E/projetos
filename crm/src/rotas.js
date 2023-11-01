import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";

function Rotas(){
    return <BrowserRouter>
    <Routes>
        <Route path="/dashboard" element={Dashboard} />
        <Route path="/" element={Dashboard} />
    </Routes>
    </BrowserRouter>
}

export default Rotas;