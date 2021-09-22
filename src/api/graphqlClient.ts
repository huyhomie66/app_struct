import ApolloClient from 'apollo-boost';

import {baseUrl} from 'config';
import {getItem} from 'services/AsyncStorage';

const autHandler = operation => {
  //   const token = getItem('accessToken');
  //   if (token) {
  //     operation.setContext({
  //       headers: {
  //         'x-access-token': token,
  //       },
  //     });
  //   }
};

const createClient = ({uri}) => {
  const options = {
    uri: `${baseUrl}${uri}`,
    request: operation => autHandler(operation),
  };
  const client = new ApolloClient(options);
  client.defaultOptions = {query: {fetchPolicy: 'network-only'}};
  return client;
};

export const appConfigClient = createClient({
  uri: '/app',
});
