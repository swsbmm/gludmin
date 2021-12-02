import { List, Datagrid, TextField, Create, SimpleForm, TextInput, Edit } from 'react-admin';



const AnioGludList = (props: any) => {
  return (
    <List {...props}  sort={{ field: 'id', order: 'DESC' }}>
      <Datagrid rowClick="edit" > 
        <TextField label="ID" source="id"/ >
      </Datagrid>
    </List>
  );
};


const AnioGludCreate = (props: any) => {
  return(
    <Create {...props}>
      <SimpleForm>
        <TextInput label ="ID" source="id" />
      </SimpleForm>
    </Create>
  );
};

const AnioGludEdit = (props: any) => {
  return(
    <Edit {...props}>
      <SimpleForm>
        <TextInput label ="ID" source="id" />
      </SimpleForm>
    </Edit>
  );
};

export {AnioGludList, AnioGludCreate, AnioGludEdit};

