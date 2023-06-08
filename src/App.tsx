import { NavigationContainer } from "@react-navigation/native";
import Routes from "./pages/routes";
import DataProvider from "./context/appContext";

export default function App() {
    return (
        <DataProvider>
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        </DataProvider>
    );
};