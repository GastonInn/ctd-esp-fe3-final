import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import PageNotFound from "./Routes/PageNotFound";
import { ContextProvider } from "./Components/utils/global.context"
import { Layout } from "./LayoutNavigation";


function App() {
    return (
        <div className="App">
            <ContextProvider>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/detail/:id" element={<Detail />} />
                        <Route path="/favs" element={<Favs />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Route>
                </Routes>
            </ContextProvider>
        </div>
    );
}

export default App;
