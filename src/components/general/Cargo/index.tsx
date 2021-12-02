import { List, Datagrid, TextField, Create, SimpleForm, TextInput, Edit } from 'react-admin';



const CargoList = (props: any) => {
  return (
    <List {...props}  sort={{ field: 'id', order: 'DESC' }}>
      <Datagrid rowClick="edit" > 
        <TextField label="ID" source="id"/ >
        <TextField label="NOMBRE" source="c_nombre"/ >
        <TextField label="DESCRIPCION" source="c_descripcion"/ >
      </Datagrid>
    </List>
  );
};


const CargoCreate = (props: any) => {
  return(
    <Create {...props}>
      <SimpleForm>
        <TextInput label ="ID" source="id" />
        <TextInput label ="NOMBRE" source="c_nombre" />
        <TextInput label ="DESCRIPCION" source="c_descripcion" />
      </SimpleForm>
    </Create>
  );
};

const CargoEdit = (props: any) => {
  return(
    <Edit {...props}>
      <SimpleForm>
        <TextInput label ="ID" source="id" />
        <TextInput label ="NOMBRE" source="c_nombre" />
        <TextInput label ="DESCRIPCION" source="c_descripcion" />
      </SimpleForm>
    </Edit>
  );
};

export {CargoList, CargoCreate, CargoEdit};

