import React, { useState } from "react";
import { AppContextType, Expense, IAppContext } from "../utils/types";

const AppContext = React.createContext<AppContextType>({} as IAppContext);

export default function DataProvider(props: any) {
    const [expensesData, setExpensesData] = useState<Array<Expense>>([]);

    return (
        <AppContext.Provider value={{ expensesData, updateData: setExpensesData }}>
            {props.children}
        </AppContext.Provider>
    )
}

export function useAppContext(): AppContextType {
    return React.useContext(AppContext);
}