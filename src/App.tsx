import { useState, useEffect } from 'react';
import { Admin, Resource } from 'react-admin';
import authProvider from './components/Provider/authProvider';
import { buildDataProvider } from './components/Provider/hasuraProvider';
import { AnioGludList, AnioGludCreate } from './components/general/AnioGlud/index';
import { CargoList, CargoCreate, CargoEdit } from './components/general/Cargo/index';

function App() {

  const [dataProvider, setDataProvider] = useState<any>(null);  

  

 useEffect(() => {
  const dataProvider = async () => {
    const hasuraProvider = await buildDataProvider();
    setDataProvider(() => hasuraProvider);
  };
  dataProvider();
  }, []);

  if (!dataProvider) return <h1>No hay dataproider</h1>;

  return (
    <Admin title="Gludim" authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="generalschema_anioglud" list={AnioGludList} create={AnioGludCreate} />
      <Resource name="generalschema_cargo" list={CargoList} create={CargoCreate} edit={CargoEdit} />
    </Admin>
  );
}

export default App;
