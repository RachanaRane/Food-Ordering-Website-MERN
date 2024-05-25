import Admin from "./pages/Admin";
import React from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import {Routes,Route,useLocation} from "react-router-dom";
import CreateFood from "./pages/CreateFood";
import DeleteFood from "./pages/DeleteFood";
import EditFood from "./pages/EditFood";

const App=()=> {
  return (
    <>
    <Routes>
      <Route path="/admin/*"
      element={
        <ProtectedRoute>
           <AdminRoutes/>
        </ProtectedRoute>
      }
      />
    </Routes>
    </>
  )
};

const AdminRoutes = () => {
  return(
   <Routes>
    <Route path="/" element={<Admin/>}/>
    <Route path="/food/create" element={<CreateFood/>}/>
    <Route path="/food/delete/:id" element={<DeleteFood/>}/>
    <Route path="/food/edit/:id" element={<EditFood/>}/>
   </Routes>
  )
}

export default App;