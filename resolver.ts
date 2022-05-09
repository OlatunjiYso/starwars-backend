import {fetchPeople, fetchPerson} from './services';

import { QueryPeopleArgs, QueryPersonArgs } from './graphql-types'

export const resolvers = {
    Query: {
      async people(root, {pageNo}: QueryPeopleArgs) {
         const response = await fetchPeople(pageNo)
         if(response.success) {
           return response;
         } else {
           throw new Error(response.errorMsg)
         }
      },
      async person(root, {name}: QueryPersonArgs) {
        const response = await fetchPerson(name)
        if(response.success) {
          return response;
        } else {
          throw new Error(response.errorMsg)
        }
      }
    }
  };