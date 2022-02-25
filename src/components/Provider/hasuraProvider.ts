
//Imports funcionales
import hasuraDataProvider from 'ra-data-hasura';
//Personalizando cliente:
import { ApolloClient, InMemoryCache } from '@apollo/client';
import inMemoryJWT from './inMemoryJwt';
//importando instrospection
import data from '../../xd.json';
//variables de configuracion:

const hasuraUrl = "https://graphql.glud.org/v1/graphql";


//Funcion que ensambla el dataProvider con configuracion personalizada.
const creatApolloClient = async(token: string) => {
    return new ApolloClient({
      uri: hasuraUrl,
      cache: new InMemoryCache(),
      headers: {
        'content-type': "application/json",
        //'x-hasura-admin-secret': 'gludsecretkey',
        'Authorization': `Bearer ${token}`,
        //'x-Hasura-Role': 'me'
      }
    })
  
};


const buildDataProvider =  async() => {
  const token = inMemoryJWT.getToken();
  const apolloClient =  await creatApolloClient(token);
  //const data = require('../../schema.json');
  console.log(data);
  const introspection = data.data.__schema;
  const dataProvider =  await hasuraDataProvider(
    {
      client: apolloClient,
      introspection:{ schema: introspection }
    }
  );
  return dataProvider;
};



export  { buildDataProvider };