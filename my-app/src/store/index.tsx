import React from "react";
import { User } from './reducers'

export interface Store {
    state: User,
    updateUsers: Function
}

const Context = React.createContext({} as Store)

export default Context