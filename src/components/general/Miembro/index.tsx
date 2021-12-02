import { List, Datagrid, TextField, Create, SimpleForm, TextInput, Edit, SelectField } from 'react-admin';



const MiembroList = (props: any) => {
  return (
    <List {...props}  sort={{ field: 'id', order: 'DESC' }}>
      <Datagrid rowClick="edit" > 
        <TextField label ="Id" source="id" />
        <TextField label ="Tipo ID" source="tipoid" />
        <TextField label ="Codigo Estudiante" source="n_codigo" />
        <TextField label ="Tipo id docente" source="tipoiddocente" />
        <TextField label ="id docente" source="iddoncente" />
        <TextField label ="Nombre" source="c_nombre" />
        <TextField label ="Apellido" source="c_apellido" />
        <TextField label ="Correo" source="c_correo" />
        <TextField label ="Telefono" source="c_telefono" />
      </Datagrid>
    </List>
  );
};


const MiembroCreate = (props: any) => {
  return(
    <Create {...props}>
      <SimpleForm>
        <TextInput label ="Documento" source="id" />
        <TextInput label ="Nombre" source="c_nombre" />
        <TextInput label ="Apellido" source="c_apellido" />
        <TextInput label ="Correo" source="c_correo" />
        <TextInput label ="Telefono" source="c_telefono" />
      </SimpleForm>
    </Create>
  );
};

const MiembroEdit = (props: any) => {
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

export {MiembroList, MiembroCreate, MiembroEdit};

