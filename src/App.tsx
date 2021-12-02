import { useState, useEffect } from 'react'
import { Admin, Resource } from 'react-admin';
import buildHasuraProvider from 'ra-data-hasura';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { buildDataProvider } from './components/Provider/hasuraProvider'
import authProvider from './components/Provider/authProvider'
//browse history
import { createBrowserHistory as createHistory } from 'history';
import { AnioGludList, AnioGludCreate } from  './components/general/AnioGlud/index'
const history = createHistory();



function App() {
  const [dataProvider, setDataProvider] = useState(null);
 
  useEffect(() => {
    const buildDataProvider = async () => {
      const dataProvider:any = await buildDataProvider();
      setDataProvider(()=> dataProvider);
    };
    buildDataProvider();
  }, []);

  if (!dataProvider) return <p>Loading...</p>;
  return (
    <Admin 
      title="Gludim"
      authProvider={authProvider}
      dataProvider={dataProvider}
      
    >
      <Resource
          name="generalschema_anioglud"
          list={AnioGludList}
          create={AnioGludCreate}
      />
    </Admin>
  );
}

export default App;
