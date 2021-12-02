import { List, Datagrid, TextField, Create, SimpleForm, TextInput, Edit, SelectField } from 'react-admin';



const PersonaList = (props: any) => {
  return (
    <List {...props}  sort={{ field: 'id', order: 'DESC' }}>
      <Datagrid rowClick="edit" > 
        <TextField label ="Id" source="id" />
        <TextField label ="Tipo ID" source="tipoid" />
        <TextField label ="Nombre" source="c_nombre" />
        <TextField label ="Apellido" source="c_apellido" />
        <TextField label ="Correo" source="c_correo" />
        <TextField label ="Telefono" source="c_telefono" />
      </Datagrid>
    </List>
  );
};
const choices = [
  { _id: 123, full_name: 'Leo Tolstoi', sex: 'M' },
  { _id: 456, full_name: 'Jane Austen', sex: 'F' },
];

const PersonaCreate = (props: any) => {
  return(
    <Create {...props}>
      <SimpleForm>
      
        <SelectField source="author_id" choices={choices} optionText="full_name" optionValue="_id" />

        <SelectField source="tipo_id" choices={[
            { id: 'CC', name: 'C.C' },
            { id: 'TI', name: 'T.I' },
        ]} optionText="name" optionValue="id"/>
        {/* <TextInput label ="Tipo de documento" source="tipoid" /> */}
        <TextInput label ="Documento" source="id" />
        <TextInput label ="Nombre" source="c_nombre" />
        <TextInput label ="Apellido" source="c_apellido" />
        <TextInput label ="Correo" source="c_correo" />
        <TextInput label ="Telefono" source="c_telefono" />
      </SimpleForm>
    </Create>
  );
};

const PersonaEdit = (props: any) => {
  return(
    <Edit {...props}>
      <SimpleForm>
        <TextInput label ="Id" source="id" />
        <TextInput label ="Tipo ID" source="tipoid" />
        <TextInput label ="Nombre" source="c_nombre" />
        <TextInput label ="Apellido" source="c_apellido" />
        <TextInput label ="Correo" source="c_correo" />
        <TextInput label ="Telefono" source="c_telefono" />
      </SimpleForm>
    </Edit>
  );
};

export {PersonaList, PersonaCreate, PersonaEdit};

