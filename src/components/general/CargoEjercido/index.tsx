import { List, Datagrid, TextField, Create, SimpleForm, TextInput, Edit } from 'react-admin';



const CargoEjercidoList = (props: any) => {
    return (
        <List {...props} sort={{ field: 'idmiembro', order: 'DESC' }}>
            <Datagrid rowClick="edit" >
                <TextField label="ID-MIEMBRO" source="tipoidmiembro" />
                <TextField label="ID-MIEMBRO" source="idmiembro" />
                <TextField label="ID-CARGO" source="idcargo" />
                <TextField label="FECHA INICIO" source="d_fechainicio" />
                <TextField label="FECHA FIN" source="d_fechafin" />
            </Datagrid>
        </List>
    );
};


const CargoEjercidoCreate = (props: any) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput label="ID-MIEMBRO" source="tipoidmiembro" />
                <TextInput label="ID-MIEMBRO" source="idmiembro" />
                <TextInput label="ID-CARGO" source="idcargo" />
                <TextInput label="FECHA INICIO" source="d_fechainicio" />
                <TextInput label="FECHA FIN" source="d_fechafin" />
            </SimpleForm>
        </Create>
    );
};

const CargoEjercidoEdit = (props: any) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput label="ID-MIEMBRO" source="tipoidmiembro" />
                <TextInput label="ID-MIEMBRO" source="idmiembro" />
                <TextInput label="ID-CARGO" source="idcargo" />
                <TextInput label="FECHA INICIO" source="d_fechainicio" />
                <TextInput label="FECHA FIN" source="d_fechafin" />
            </SimpleForm>
        </Edit>
    );
};

export { CargoEjercidoList, CargoEjercidoCreate, CargoEjercidoEdit };

