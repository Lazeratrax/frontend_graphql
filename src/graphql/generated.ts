/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AuthQ
// ====================================================

export interface AuthQ_me {
  __typename: "User";
  id: string;
  name: string | null;
  email: string;
}

export interface AuthQ {
  me: AuthQ_me;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LogInM
// ====================================================

export interface LogInM_logIn {
  __typename: "AccessToken";
  access_token: string;
}

export interface LogInM {
  logIn: LogInM_logIn;
}

export interface LogInMVariables {
  input: LogInInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegistrationM
// ====================================================

export interface RegistrationM_signUp {
  __typename: "AccessToken";
  access_token: string;
}

export interface RegistrationM {
  signUp: RegistrationM_signUp;
}

export interface RegistrationMVariables {
  input: SignUpInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostQ
// ====================================================

export interface PostQ_post {
  __typename: "Post";
  id: string;
  title: string;
  description: string;
}

export interface PostQ {
  post: PostQ_post;
}

export interface PostQVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddPostM
// ====================================================

export interface AddPostM_addPost {
  __typename: "Post";
  id: string;
}

export interface AddPostM {
  addPost: AddPostM_addPost;
}

export interface AddPostMVariables {
  input: AddPostInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeletePostM
// ====================================================

export interface DeletePostM {
  deletePost: boolean;
}

export interface DeletePostMVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditPostM
// ====================================================

export interface EditPostM_editPost {
  __typename: "Post";
  id: string;
}

export interface EditPostM {
  editPost: EditPostM_editPost;
}

export interface EditPostMVariables {
  input: EditPostInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostsQ
// ====================================================

export interface PostsQ_posts_data {
  __typename: "Post";
  id: string;
  title: string;
  description: string;
}

export interface PostsQ_posts {
  __typename: "Posts";
  data: PostsQ_posts_data[];
  page: number;
  perPage: number;
  total: number;
}

export interface PostsQ {
  posts: PostsQ_posts;
}

export interface PostsQVariables {
  input: PostsInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProfileQ
// ====================================================

export interface ProfileQ_me {
  __typename: "User";
  id: string;
  name: string | null;
  email: string;
}

export interface ProfileQ {
  me: ProfileQ_me;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface AddPostInput {
  title: string;
  description: string;
  authorId: string;
}

export interface EditPostInput {
  id: string;
  title: string;
  description: string;
}

export interface LogInInput {
  email: string;
  password: string;
}

export interface PostsInput {
  query: string;
  page: number;
}

export interface SignUpInput {
  email: string;
  password: string;
  name?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
