import { List, Datagrid, TextField, Create, SimpleForm, TextInput, Edit } from 'react-admin';



const ProyectoCurricularList = (props: any) => {
  return (
    <List {...props}  sort={{ field: 'id', order: 'DESC' }}>
      <Datagrid rowClick="edit" > 
        <TextField label="ID" source="id"/ >
        <TextField label="PROYECTO CURRICULAR" source="c_nombre"/ >
      </Datagrid>
    </List>
  );
};


const ProyectoCurricularCreate = (props: any) => {
  return(
    <Create {...props}>
      <SimpleForm>
        <TextInput label ="ID" source="id" />
        <TextInput label ="PROYECTO CURRICULAR" source="c_nombre" />
      </SimpleForm>
    </Create>
  );
};

const ProyectoCurricularEdit = (props: any) => {
  return(
    <Edit {...props}>
      <SimpleForm>
          <TextInput label= "ID" source="id"/>
        <TextInput label ="PROYECTO CURRICULAR" source="c_nombre" />
      </SimpleForm>
    </Edit>
  );
};

export {ProyectoCurricularList, ProyectoCurricularCreate, ProyectoCurricularEdit};

