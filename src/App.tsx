import AppRouter from "./router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {ProductListState} from "./context/ProductListContext";
import {AuthState} from "./context/AuthContext";

function App() {
    return (
        <ProductListState>
            <AuthState>
                <AppRouter/>
            </AuthState>
        </ProductListState>
    )
}

export default App;
