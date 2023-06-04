import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateRecord from "../CreateRecord";
import ExpenseManagement from "../ExpenseManagement";
import HerdChange from "../HerdChange";
import Home from "../Home";
import Login from "../Login";

export default function Routes() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="ExpenseManagement" component={ExpenseManagement} options={{ headerShown: false }} />
            <Stack.Screen name="CreateRecord" component={CreateRecord} options={{ headerShown: false }} />
            <Stack.Screen name="HerdChange" component={HerdChange} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}