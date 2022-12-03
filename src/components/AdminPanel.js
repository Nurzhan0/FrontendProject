import React, { useContext } from "react";
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource } from "react-admin";
import { WordList, WordEdit, WordCreate } from './Word';

  const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

  function AdminPanel() {
    return (
      <Admin dataProvider={dataProvider}>
        <Resource
          name="users"
          list={WordList}
          edit={WordEdit}
          create={WordCreate}
        />
      </Admin>
    );
  }

  export default AdminPanel;