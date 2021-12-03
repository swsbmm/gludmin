import { useState, useEffect } from 'react';
import { Admin, Resource } from 'react-admin';
import { buildDataProvider } from './components/Provider/hasuraProvider';
import authProvider from './components/Provider/authProvider';
import inMemoryJWT from './components/Provider/inMemoryJwt';
import { AnioGludList, AnioGludCreate } from './components/general/AnioGlud/index';
import { CargoList, CargoCreate, CargoEdit } from './components/general/Cargo/index';

function App() {
  //const [dataProvider, setDataProvider] = useState<any>(null);

  // useEffect(() => {
  //   const dataProvider = async () => {
  //     //const isAuthenticated = inMemoryJWT.isAuthenticated();

  //     const hasuraProvider = await buildDataProvider();
  //     setDataProvider(() => hasuraProvider);
  //   };
  //   dataProvider();
  // }, []);

  //if (!dataProvider) return <p>Loading...</p>;
  return (
    <Admin title="Gludim" authProvider={authProvider} dataProvider={buildDataProvider}>
      <Resource name="generalschema_anioglud" list={AnioGludList} create={AnioGludCreate} />
      <Resource name="generalschema_cargo" list={CargoList} create={CargoCreate} edit={CargoEdit} />
    </Admin>
  );
}

export default App;
