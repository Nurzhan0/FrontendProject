import {
    List,
    Datagrid,
    TextField,
    EmailField,
    UrlField,
    Edit,
    SimpleForm,
    TextInput,
    Create,
  } from 'react-admin';

  export const WordList = props => (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <EmailField source="email" />
        <TextField source="address.street" label="Address" />
        <TextField source="phone" />
        <UrlField source="website" />
        <TextField source="company.name" label="Company" />
      </Datagrid>
    </List>
  );

  export const WordEdit = props => (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" />
        <TextInput source="username" />
        <TextInput source="email" />
        <TextInput source="address.street" label="Address" />
        <TextInput source="phone" />
        <TextInput source="website" />
        <TextInput source="company.name" label="Company" />
      </SimpleForm>
    </Edit>
  );

  export const WordCreate = props => (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="username" />
        <TextInput source="email" />
        <TextInput source="address.street" label="Address" />
        <TextInput source="phone" />
        <TextInput source="website" />
        <TextInput source="company.name" label="Company" />
      </SimpleForm>
    </Create>
  );