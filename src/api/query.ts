import {gql} from 'graphql-tag';
const configQuery = gql`
  query getConfig {
    getConfig {
      version
      common
    }
  }
`;

export {configQuery};
