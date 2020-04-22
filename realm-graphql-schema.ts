export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ObjectId: any;
};

export type DeleteManyPayload = {
   __typename?: 'DeleteManyPayload';
  /** @deprecated  */
  deletedCount: Scalars['Int'];
};

export type TaskQueryInput = {
  _partition_gte?: Maybe<Scalars['ObjectId']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  description_gt?: Maybe<Scalars['String']>;
  description_ne?: Maybe<Scalars['String']>;
  status_nin?: Maybe<Array<Maybe<TaskStatus>>>;
  _partition_lt?: Maybe<Scalars['ObjectId']>;
  description_lt?: Maybe<Scalars['String']>;
  _partition_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  watchers_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  status_lte?: Maybe<TaskStatus>;
  _partition_ne?: Maybe<Scalars['ObjectId']>;
  OR?: Maybe<Array<TaskQueryInput>>;
  _partition_exists?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  AND?: Maybe<Array<TaskQueryInput>>;
  _partition_lte?: Maybe<Scalars['ObjectId']>;
  status_gt?: Maybe<TaskStatus>;
  status_ne?: Maybe<TaskStatus>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  status_gte?: Maybe<TaskStatus>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  status_in?: Maybe<Array<Maybe<TaskStatus>>>;
  watchers_exists?: Maybe<Scalars['Boolean']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  status_exists?: Maybe<Scalars['Boolean']>;
  watchers_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_exists?: Maybe<Scalars['Boolean']>;
  assignee?: Maybe<UserQueryInput>;
  status_lt?: Maybe<TaskStatus>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  status?: Maybe<TaskStatus>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  watchers?: Maybe<Array<Maybe<Scalars['String']>>>;
  _partition_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _partition?: Maybe<Scalars['ObjectId']>;
  description_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_lte?: Maybe<Scalars['String']>;
  description_gte?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  _partition_gt?: Maybe<Scalars['ObjectId']>;
  description?: Maybe<Scalars['String']>;
  assignee_exists?: Maybe<Scalars['Boolean']>;
};

export type Task = {
   __typename?: 'Task';
  /** @deprecated  */
  _id: Scalars['ObjectId'];
  /** @deprecated  */
  _partition: Scalars['ObjectId'];
  /** @deprecated  */
  assignee?: Maybe<User>;
  /** @deprecated  */
  description: Scalars['String'];
  /** @deprecated  */
  status: TaskStatus;
  /** @deprecated  */
  watchers?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Mutation = {
   __typename?: 'Mutation';
  /** @deprecated  */
  deleteManyProjects?: Maybe<DeleteManyPayload>;
  /** @deprecated  */
  deleteManyTasks?: Maybe<DeleteManyPayload>;
  /** @deprecated  */
  deleteManyUsers?: Maybe<DeleteManyPayload>;
  /** @deprecated  */
  deleteOneProject?: Maybe<Project>;
  /** @deprecated  */
  deleteOneTask?: Maybe<Task>;
  /** @deprecated  */
  deleteOneUser?: Maybe<User>;
  /** @deprecated  */
  insertManyProjects?: Maybe<InsertManyPayload>;
  /** @deprecated  */
  insertManyTasks?: Maybe<InsertManyPayload>;
  /** @deprecated  */
  insertManyUsers?: Maybe<InsertManyPayload>;
  /** @deprecated  */
  insertOneProject?: Maybe<Project>;
  /** @deprecated  */
  insertOneTask?: Maybe<Task>;
  /** @deprecated  */
  insertOneUser?: Maybe<User>;
  /** @deprecated  */
  replaceOneProject?: Maybe<Project>;
  /** @deprecated  */
  replaceOneTask?: Maybe<Task>;
  /** @deprecated  */
  replaceOneUser?: Maybe<User>;
  /** @deprecated  */
  updateManyProjects?: Maybe<UpdateManyPayload>;
  /** @deprecated  */
  updateManyTasks?: Maybe<UpdateManyPayload>;
  /** @deprecated  */
  updateManyUsers?: Maybe<UpdateManyPayload>;
  /** @deprecated  */
  updateOneProject?: Maybe<Project>;
  /** @deprecated  */
  updateOneTask?: Maybe<Task>;
  /** @deprecated  */
  updateOneUser?: Maybe<User>;
  /** @deprecated  */
  upsertOneProject?: Maybe<Project>;
  /** @deprecated  */
  upsertOneTask?: Maybe<Task>;
  /** @deprecated  */
  upsertOneUser?: Maybe<User>;
};


export type MutationDeleteManyProjectsArgs = {
  query?: Maybe<ProjectQueryInput>;
};


export type MutationDeleteManyTasksArgs = {
  query?: Maybe<TaskQueryInput>;
};


export type MutationDeleteManyUsersArgs = {
  query?: Maybe<UserQueryInput>;
};


export type MutationDeleteOneProjectArgs = {
  query: ProjectQueryInput;
};


export type MutationDeleteOneTaskArgs = {
  query: TaskQueryInput;
};


export type MutationDeleteOneUserArgs = {
  query: UserQueryInput;
};


export type MutationInsertManyProjectsArgs = {
  data: Array<ProjectInsertInput>;
};


export type MutationInsertManyTasksArgs = {
  data: Array<TaskInsertInput>;
};


export type MutationInsertManyUsersArgs = {
  data: Array<UserInsertInput>;
};


export type MutationInsertOneProjectArgs = {
  data: ProjectInsertInput;
};


export type MutationInsertOneTaskArgs = {
  data: TaskInsertInput;
};


export type MutationInsertOneUserArgs = {
  data: UserInsertInput;
};


export type MutationReplaceOneProjectArgs = {
  query?: Maybe<ProjectQueryInput>;
  data: ProjectInsertInput;
};


export type MutationReplaceOneTaskArgs = {
  query?: Maybe<TaskQueryInput>;
  data: TaskInsertInput;
};


export type MutationReplaceOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  data: UserInsertInput;
};


export type MutationUpdateManyProjectsArgs = {
  query?: Maybe<ProjectQueryInput>;
  set: ProjectUpdateInput;
};


export type MutationUpdateManyTasksArgs = {
  query?: Maybe<TaskQueryInput>;
  set: TaskUpdateInput;
};


export type MutationUpdateManyUsersArgs = {
  query?: Maybe<UserQueryInput>;
  set: UserUpdateInput;
};


export type MutationUpdateOneProjectArgs = {
  query?: Maybe<ProjectQueryInput>;
  set: ProjectUpdateInput;
};


export type MutationUpdateOneTaskArgs = {
  query?: Maybe<TaskQueryInput>;
  set: TaskUpdateInput;
};


export type MutationUpdateOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  set: UserUpdateInput;
};


export type MutationUpsertOneProjectArgs = {
  query?: Maybe<ProjectQueryInput>;
  data: ProjectInsertInput;
};


export type MutationUpsertOneTaskArgs = {
  data: TaskInsertInput;
  query?: Maybe<TaskQueryInput>;
};


export type MutationUpsertOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  data: UserInsertInput;
};

export type UserProjectsRelationInput = {
  create?: Maybe<Array<Maybe<ProjectInsertInput>>>;
  link?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
};

export type TaskUpdateInput = {
  watchers?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  _partition?: Maybe<Scalars['ObjectId']>;
  status?: Maybe<TaskStatus>;
  assignee?: Maybe<TaskAssigneeRelationInput>;
  description?: Maybe<Scalars['String']>;
};

export type Query = {
   __typename?: 'Query';
  /** @deprecated  */
  project?: Maybe<Project>;
  /** @deprecated  */
  projects: Array<Maybe<Project>>;
  /** @deprecated  */
  task?: Maybe<Task>;
  /** @deprecated  */
  tasks: Array<Maybe<Task>>;
  /** @deprecated  */
  user?: Maybe<User>;
  /** @deprecated  */
  users: Array<Maybe<User>>;
};


export type QueryProjectArgs = {
  query?: Maybe<ProjectQueryInput>;
};


export type QueryProjectsArgs = {
  query?: Maybe<ProjectQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<ProjectSortByInput>;
};


export type QueryTaskArgs = {
  query?: Maybe<TaskQueryInput>;
};


export type QueryTasksArgs = {
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<TaskSortByInput>;
  query?: Maybe<TaskQueryInput>;
};


export type QueryUserArgs = {
  query?: Maybe<UserQueryInput>;
};


export type QueryUsersArgs = {
  sortBy?: Maybe<UserSortByInput>;
  query?: Maybe<UserQueryInput>;
  limit?: Maybe<Scalars['Int']>;
};

export enum UserSortByInput {
  NameDesc = 'NAME_DESC',
  ImageAsc = 'IMAGE_ASC',
  ImageDesc = 'IMAGE_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  NameAsc = 'NAME_ASC'
}

export type User = {
   __typename?: 'User';
  /** @deprecated  */
  _id: Scalars['ObjectId'];
  /** @deprecated  */
  image?: Maybe<Scalars['String']>;
  /** @deprecated  */
  name: Scalars['String'];
  /** @deprecated  */
  projects: Array<Maybe<Project>>;
};

export type UserInsertInput = {
  name: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  projects: UserProjectsRelationInput;
  _id?: Maybe<Scalars['ObjectId']>;
};

export type InsertManyPayload = {
   __typename?: 'InsertManyPayload';
  /** @deprecated  */
  insertedIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type Project = {
   __typename?: 'Project';
  /** @deprecated  */
  _id: Scalars['ObjectId'];
  /** @deprecated  */
  _partition: Scalars['ObjectId'];
  /** @deprecated  */
  name: Scalars['String'];
};

export type UserQueryInput = {
  AND?: Maybe<Array<UserQueryInput>>;
  image?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  image_gt?: Maybe<Scalars['String']>;
  projects_in?: Maybe<Array<Maybe<ProjectQueryInput>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  name_gte?: Maybe<Scalars['String']>;
  name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  projects_nin?: Maybe<Array<Maybe<ProjectQueryInput>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  name_lte?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<UserQueryInput>>;
  image_lt?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  name_exists?: Maybe<Scalars['Boolean']>;
  projects?: Maybe<Array<Maybe<ProjectQueryInput>>>;
  name_ne?: Maybe<Scalars['String']>;
  image_gte?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  image_lte?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  image_ne?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  image_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  projects_exists?: Maybe<Scalars['Boolean']>;
  image_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  image_exists?: Maybe<Scalars['Boolean']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
};

export type ProjectUpdateInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  _partition?: Maybe<Scalars['ObjectId']>;
  name?: Maybe<Scalars['String']>;
};

export type ProjectQueryInput = {
  _partition_gte?: Maybe<Scalars['ObjectId']>;
  name_gt?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  name_exists?: Maybe<Scalars['Boolean']>;
  _partition?: Maybe<Scalars['ObjectId']>;
  OR?: Maybe<Array<ProjectQueryInput>>;
  name_gte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _partition_gt?: Maybe<Scalars['ObjectId']>;
  AND?: Maybe<Array<ProjectQueryInput>>;
  _id?: Maybe<Scalars['ObjectId']>;
  _partition_exists?: Maybe<Scalars['Boolean']>;
  _partition_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  _partition_lt?: Maybe<Scalars['ObjectId']>;
  name_lte?: Maybe<Scalars['String']>;
  _partition_ne?: Maybe<Scalars['ObjectId']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _partition_lte?: Maybe<Scalars['ObjectId']>;
  name_lt?: Maybe<Scalars['String']>;
  name_ne?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  _partition_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
};

export enum ProjectSortByInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  PartitionAsc = '_PARTITION_ASC',
  PartitionDesc = '_PARTITION_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC'
}

export type TaskInsertInput = {
  watchers?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  _partition: Scalars['ObjectId'];
  status: TaskStatus;
  assignee?: Maybe<TaskAssigneeRelationInput>;
  description: Scalars['String'];
};

export type TaskAssigneeRelationInput = {
  create?: Maybe<UserInsertInput>;
  link?: Maybe<Scalars['ObjectId']>;
};

export enum TaskSortByInput {
  DescriptionAsc = 'DESCRIPTION_ASC',
  PartitionAsc = '_PARTITION_ASC',
  PartitionDesc = '_PARTITION_DESC',
  AssigneeDesc = 'ASSIGNEE_DESC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  AssigneeAsc = 'ASSIGNEE_ASC'
}

export type ProjectInsertInput = {
  _partition: Scalars['ObjectId'];
  name: Scalars['String'];
  _id?: Maybe<Scalars['ObjectId']>;
};


export enum TaskStatus {
  Closed = 'CLOSED',
  Open = 'OPEN',
  Inprogress = 'INPROGRESS'
}

export type UpdateManyPayload = {
   __typename?: 'UpdateManyPayload';
  /** @deprecated  */
  matchedCount: Scalars['Int'];
  /** @deprecated  */
  modifiedCount: Scalars['Int'];
};

export type UserUpdateInput = {
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  projects?: Maybe<UserProjectsRelationInput>;
  _id?: Maybe<Scalars['ObjectId']>;
};
