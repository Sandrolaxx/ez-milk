import React, { useState } from "react";
import { defaultExpenses } from "../utils/configs";
import { AppContextType, Expense, ExpenseInfo, IAppContext } from "../utils/types";

const AppContext = React.createContext<AppContextType>({} as IAppContext);

export default function DataProvider(props: any) {
    const [historyData, setHistoryData] = useState<Array<Expense>>([]);
    const [expensesData, setExpensesData] = useState<Array<ExpenseInfo>>([]);

    if (expensesData.length == 0) {
        setExpensesData(defaultExpenses);
    }

    return (
        <AppContext.Provider value={{
            expensesData, updateData: setExpensesData,
            historyData, updateHistoryData: setHistoryData
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export function useAppContext(): AppContextType {
    return React.useContext(AppContext);
}