import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("../pages/Home"));
const Tickets = lazy(() => import("../pages/Tickets"));

const PublicRoutes = () => {
  return (
    <>
      <Suspense fallback={<h3 className="text-center my-3">Cargando...</h3>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default PublicRoutes;
