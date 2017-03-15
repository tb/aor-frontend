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
      <ReferenceField label="Project" source="project" reference="projects">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="text" />
      <EditButton basePath="/tasks" />
    </Datagrid>
  </List>
);

export const edit = (props) => (
  <Edit title={props.name} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="text" />
      <ReferenceInput label="Project" source="project" reference="projects">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const create = (props) => (
  <Create title="Create Task" {...props}>
    <SimpleForm>
      <TextInput source="text" />
      <ReferenceInput label="Project" source="project" reference="projects" allowEmpty>
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export const remove = Delete;
