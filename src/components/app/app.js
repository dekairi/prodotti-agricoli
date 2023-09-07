import products from "/src/mocks/products";
import featureList from "/src/mocks/featureList";
import { GlobalStyle } from "./styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollTop from "/src/components/ui/scroll-top/scroll-top";
import { AppRoute } from "/src/const";
import Order from "/src/components/pages/order/order";
import MainPage from "/src/components/pages/main-page/main-page";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage features={featureList} />} />
            <Route
              path={AppRoute.ORDER.replace(AppRoute.MAIN, "")}
              element={<Order products={products} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
