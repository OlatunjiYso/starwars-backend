export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type PeopleQueryResponse = {
  __typename?: 'PeopleQueryResponse';
  count: Scalars['Int'];
  errorMsg?: Maybe<Scalars['String']>;
  page: Scalars['Int'];
  people: Array<Maybe<Person>>;
  success: Scalars['Boolean'];
};

export type Person = {
  __typename?: 'Person';
  gender: Scalars['String'];
  height: Scalars['String'];
  homeworld: Scalars['String'];
  mass: Scalars['String'];
  name: Scalars['String'];
};

export type PersonQueryResponse = {
  __typename?: 'PersonQueryResponse';
  errorMsg?: Maybe<Scalars['String']>;
  person?: Maybe<Person>;
  success: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  people?: Maybe<PeopleQueryResponse>;
  person?: Maybe<PersonQueryResponse>;
};


export type QueryPeopleArgs = {
  pageNo: Scalars['Int'];
};


export type QueryPersonArgs = {
  name: Scalars['String'];
};
