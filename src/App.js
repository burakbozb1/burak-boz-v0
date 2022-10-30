import React from "react";
import { Route, Routes } from 'react-router-dom';
import AdminApp from "./AdminPanel/AdminApp";
import UserApp from "./UserApp";


class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/admin/*" element={<AdminApp />} />
        <Route index path="/*" element={<UserApp />} />
      </Routes>
    );
  }
}

export default App;
