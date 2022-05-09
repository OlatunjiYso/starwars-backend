import axios from "axios";
import {
  Person,
  PersonQueryResponse,
  PeopleQueryResponse,
} from "./graphql-types";

interface RawPerson {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export const fetchPeople = async (pageNo: number) => {
  try {
    const url = `https://swapi.dev/api/people?${pageNo}`;
    const response = await axios.get(url);
    const { data } = response;
    const persons = serializePersons(data.results as RawPerson[]);
    return {
      success: true,
      errorMsg: null,
      count: data.count as number,
      page: pageNo,
      people: persons,
    } as PeopleQueryResponse;
  } catch (error) {
    return {
      success: false,
      errorMsg: (error as Error).message,
      count: null,
      page: null,
      people: null,
    } as PeopleQueryResponse;
  }
};

export const fetchPerson = async (name: string) => {
  try {
    const url = `https://swapi.dev/api/people?search=${name}`;
    const response = await axios.get(url);
    if(response.data.results.length === 0) {
      return {
        success: true,
        errorMsg: 'No such person found',
        person: null
      } as PersonQueryResponse;
    }
    const rawPerson = response.data.results[0] as RawPerson;
    const person = serializePerson(rawPerson);
    return {
      success: true,
      errorMsg: null,
      person
    } as PersonQueryResponse;
  } catch (error) {
    return {
      success: false,
      errorMsg: (error as Error).message,
      people: null,
    } as PersonQueryResponse;
  }
};

const serializePersons = (persons: RawPerson[]) =>
  persons.map((p) => serializePerson(p));
  
const serializePerson = (rawPerson: RawPerson): Person => {
  const rawPersonStringified = JSON.stringify(rawPerson);
  const serialized: Person = JSON.parse(rawPersonStringified);
  return serialized;
};
