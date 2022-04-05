import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Context from './store';
import { UpdateUserReducer, updateUser, initialState, User } from './store/reducers';

import MainPage from './components/mainPage/mainPage';

const Root: React.FC = () => {
  const [contextState, setContextState] = React.useReducer(UpdateUserReducer, initialState)

  const updateUserSate = (data: User) => {
    setContextState(updateUser(data))
  }

  return (
    <Context.Provider value={{
      state: contextState,
      updateUsers: (data: any) => updateUserSate(data)
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default Root;
