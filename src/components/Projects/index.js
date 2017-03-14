import React from 'react';

import {
  BooleanField,
  BooleanInput,
  Create,
  Datagrid,
  Delete,
  DisabledInput,
  Edit,
  EditButton,
  List,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
} from 'admin-on-rest/lib/mui';

export const list = ({ ...props }) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <EditButton basePath="/projects" />
    </Datagrid>
  </List>
);

export const edit = (props) => (
  <Edit title={props.name} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

export const create = (props) => (
  <Create title="Create Project" {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

export const remove = Delete;
