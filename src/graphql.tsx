import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  timestamptz: any,
};

/** columns and relationships of "choreo" */
export type Choreo = {
  __typename?: 'choreo',
  danceName?: Maybe<Scalars['String']>,
  dancePhrase?: Maybe<Scalars['Int']>,
  id: Scalars['Int'],
  name?: Maybe<Scalars['String']>,
  public_id_prefix: Scalars['String'],
  /** An array relationship */
  steps: Array<Step>,
  /** An aggregated array relationship */
  steps_aggregate: Step_Aggregate,
  /** An array relationship */
  tags: Array<Tag>,
  /** An aggregated array relationship */
  tags_aggregate: Tag_Aggregate,
};


/** columns and relationships of "choreo" */
export type ChoreoStepsArgs = {
  distinct_on?: Maybe<Array<Step_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Step_Order_By>>,
  where?: Maybe<Step_Bool_Exp>
};


/** columns and relationships of "choreo" */
export type ChoreoSteps_AggregateArgs = {
  distinct_on?: Maybe<Array<Step_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Step_Order_By>>,
  where?: Maybe<Step_Bool_Exp>
};


/** columns and relationships of "choreo" */
export type ChoreoTagsArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Tag_Order_By>>,
  where?: Maybe<Tag_Bool_Exp>
};


/** columns and relationships of "choreo" */
export type ChoreoTags_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Tag_Order_By>>,
  where?: Maybe<Tag_Bool_Exp>
};

/** aggregated selection of "choreo" */
export type Choreo_Aggregate = {
  __typename?: 'choreo_aggregate',
  aggregate?: Maybe<Choreo_Aggregate_Fields>,
  nodes: Array<Choreo>,
};

/** aggregate fields of "choreo" */
export type Choreo_Aggregate_Fields = {
  __typename?: 'choreo_aggregate_fields',
  avg?: Maybe<Choreo_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Choreo_Max_Fields>,
  min?: Maybe<Choreo_Min_Fields>,
  stddev?: Maybe<Choreo_Stddev_Fields>,
  stddev_pop?: Maybe<Choreo_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Choreo_Stddev_Samp_Fields>,
  sum?: Maybe<Choreo_Sum_Fields>,
  var_pop?: Maybe<Choreo_Var_Pop_Fields>,
  var_samp?: Maybe<Choreo_Var_Samp_Fields>,
  variance?: Maybe<Choreo_Variance_Fields>,
};


/** aggregate fields of "choreo" */
export type Choreo_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Choreo_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "choreo" */
export type Choreo_Aggregate_Order_By = {
  avg?: Maybe<Choreo_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Choreo_Max_Order_By>,
  min?: Maybe<Choreo_Min_Order_By>,
  stddev?: Maybe<Choreo_Stddev_Order_By>,
  stddev_pop?: Maybe<Choreo_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Choreo_Stddev_Samp_Order_By>,
  sum?: Maybe<Choreo_Sum_Order_By>,
  var_pop?: Maybe<Choreo_Var_Pop_Order_By>,
  var_samp?: Maybe<Choreo_Var_Samp_Order_By>,
  variance?: Maybe<Choreo_Variance_Order_By>,
};

/** input type for inserting array relation for remote table "choreo" */
export type Choreo_Arr_Rel_Insert_Input = {
  data: Array<Choreo_Insert_Input>,
  on_conflict?: Maybe<Choreo_On_Conflict>,
};

/** aggregate avg on columns */
export type Choreo_Avg_Fields = {
  __typename?: 'choreo_avg_fields',
  dancePhrase?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "choreo" */
export type Choreo_Avg_Order_By = {
  dancePhrase?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

/** Boolean expression to filter rows from the table "choreo". All fields are combined with a logical 'AND'. */
export type Choreo_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Choreo_Bool_Exp>>>,
  _not?: Maybe<Choreo_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Choreo_Bool_Exp>>>,
  danceName?: Maybe<Text_Comparison_Exp>,
  dancePhrase?: Maybe<Integer_Comparison_Exp>,
  id?: Maybe<Integer_Comparison_Exp>,
  name?: Maybe<Text_Comparison_Exp>,
  public_id_prefix?: Maybe<Text_Comparison_Exp>,
  steps?: Maybe<Step_Bool_Exp>,
  tags?: Maybe<Tag_Bool_Exp>,
};

/** unique or primary key constraints on table "choreo" */
export enum Choreo_Constraint {
  /** unique or primary key constraint */
  ChoreoPkey = 'choreo_pkey'
}

/** input type for incrementing integer columne in table "choreo" */
export type Choreo_Inc_Input = {
  dancePhrase?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "choreo" */
export type Choreo_Insert_Input = {
  danceName?: Maybe<Scalars['String']>,
  dancePhrase?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  public_id_prefix?: Maybe<Scalars['String']>,
  steps?: Maybe<Step_Arr_Rel_Insert_Input>,
  tags?: Maybe<Tag_Arr_Rel_Insert_Input>,
};

/** aggregate max on columns */
export type Choreo_Max_Fields = {
  __typename?: 'choreo_max_fields',
  danceName?: Maybe<Scalars['String']>,
  dancePhrase?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  public_id_prefix?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "choreo" */
export type Choreo_Max_Order_By = {
  danceName?: Maybe<Order_By>,
  dancePhrase?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  public_id_prefix?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Choreo_Min_Fields = {
  __typename?: 'choreo_min_fields',
  danceName?: Maybe<Scalars['String']>,
  dancePhrase?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  public_id_prefix?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "choreo" */
export type Choreo_Min_Order_By = {
  danceName?: Maybe<Order_By>,
  dancePhrase?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  public_id_prefix?: Maybe<Order_By>,
};

/** response of any mutation on the table "choreo" */
export type Choreo_Mutation_Response = {
  __typename?: 'choreo_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Choreo>,
};

/** input type for inserting object relation for remote table "choreo" */
export type Choreo_Obj_Rel_Insert_Input = {
  data: Choreo_Insert_Input,
  on_conflict?: Maybe<Choreo_On_Conflict>,
};

/** on conflict condition type for table "choreo" */
export type Choreo_On_Conflict = {
  constraint: Choreo_Constraint,
  update_columns: Array<Choreo_Update_Column>,
};

/** ordering options when selecting data from "choreo" */
export type Choreo_Order_By = {
  danceName?: Maybe<Order_By>,
  dancePhrase?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  public_id_prefix?: Maybe<Order_By>,
  steps_aggregate?: Maybe<Step_Aggregate_Order_By>,
  tags_aggregate?: Maybe<Tag_Aggregate_Order_By>,
};

/** select columns of table "choreo" */
export enum Choreo_Select_Column {
  /** column name */
  DanceName = 'danceName',
  /** column name */
  DancePhrase = 'dancePhrase',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PublicIdPrefix = 'public_id_prefix'
}

/** input type for updating data in table "choreo" */
export type Choreo_Set_Input = {
  danceName?: Maybe<Scalars['String']>,
  dancePhrase?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  public_id_prefix?: Maybe<Scalars['String']>,
};

/** aggregate stddev on columns */
export type Choreo_Stddev_Fields = {
  __typename?: 'choreo_stddev_fields',
  dancePhrase?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "choreo" */
export type Choreo_Stddev_Order_By = {
  dancePhrase?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

/** aggregate stddev_pop on columns */
export type Choreo_Stddev_Pop_Fields = {
  __typename?: 'choreo_stddev_pop_fields',
  dancePhrase?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "choreo" */
export type Choreo_Stddev_Pop_Order_By = {
  dancePhrase?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

/** aggregate stddev_samp on columns */
export type Choreo_Stddev_Samp_Fields = {
  __typename?: 'choreo_stddev_samp_fields',
  dancePhrase?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "choreo" */
export type Choreo_Stddev_Samp_Order_By = {
  dancePhrase?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

/** aggregate sum on columns */
export type Choreo_Sum_Fields = {
  __typename?: 'choreo_sum_fields',
  dancePhrase?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "choreo" */
export type Choreo_Sum_Order_By = {
  dancePhrase?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

/** update columns of table "choreo" */
export enum Choreo_Update_Column {
  /** column name */
  DanceName = 'danceName',
  /** column name */
  DancePhrase = 'dancePhrase',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PublicIdPrefix = 'public_id_prefix'
}

/** aggregate var_pop on columns */
export type Choreo_Var_Pop_Fields = {
  __typename?: 'choreo_var_pop_fields',
  dancePhrase?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "choreo" */
export type Choreo_Var_Pop_Order_By = {
  dancePhrase?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

/** aggregate var_samp on columns */
export type Choreo_Var_Samp_Fields = {
  __typename?: 'choreo_var_samp_fields',
  dancePhrase?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "choreo" */
export type Choreo_Var_Samp_Order_By = {
  dancePhrase?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

/** aggregate variance on columns */
export type Choreo_Variance_Fields = {
  __typename?: 'choreo_variance_fields',
  dancePhrase?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "choreo" */
export type Choreo_Variance_Order_By = {
  dancePhrase?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

/** conflict action */
export enum Conflict_Action {
  /** ignore the insert on this row */
  Ignore = 'ignore',
  /** update the row with the given values */
  Update = 'update'
}

/** expression to compare columns of type integer. All fields are combined with logical 'AND'. */
export type Integer_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>,
  _gt?: Maybe<Scalars['Int']>,
  _gte?: Maybe<Scalars['Int']>,
  _in?: Maybe<Array<Scalars['Int']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['Int']>,
  _lte?: Maybe<Scalars['Int']>,
  _neq?: Maybe<Scalars['Int']>,
  _nin?: Maybe<Array<Scalars['Int']>>,
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root',
  /** delete data from the table: "choreo" */
  delete_choreo?: Maybe<Choreo_Mutation_Response>,
  /** delete data from the table: "step" */
  delete_step?: Maybe<Step_Mutation_Response>,
  /** delete data from the table: "tag" */
  delete_tag?: Maybe<Tag_Mutation_Response>,
  /** insert data into the table: "choreo" */
  insert_choreo?: Maybe<Choreo_Mutation_Response>,
  /** insert data into the table: "step" */
  insert_step?: Maybe<Step_Mutation_Response>,
  /** insert data into the table: "tag" */
  insert_tag?: Maybe<Tag_Mutation_Response>,
  /** update data of the table: "choreo" */
  update_choreo?: Maybe<Choreo_Mutation_Response>,
  /** update data of the table: "step" */
  update_step?: Maybe<Step_Mutation_Response>,
  /** update data of the table: "tag" */
  update_tag?: Maybe<Tag_Mutation_Response>,
};


/** mutation root */
export type Mutation_RootDelete_ChoreoArgs = {
  where: Choreo_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_StepArgs = {
  where: Step_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_TagArgs = {
  where: Tag_Bool_Exp
};


/** mutation root */
export type Mutation_RootInsert_ChoreoArgs = {
  objects: Array<Choreo_Insert_Input>,
  on_conflict?: Maybe<Choreo_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_StepArgs = {
  objects: Array<Step_Insert_Input>,
  on_conflict?: Maybe<Step_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_TagArgs = {
  objects: Array<Tag_Insert_Input>,
  on_conflict?: Maybe<Tag_On_Conflict>
};


/** mutation root */
export type Mutation_RootUpdate_ChoreoArgs = {
  _inc?: Maybe<Choreo_Inc_Input>,
  _set?: Maybe<Choreo_Set_Input>,
  where: Choreo_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_StepArgs = {
  _inc?: Maybe<Step_Inc_Input>,
  _set?: Maybe<Step_Set_Input>,
  where: Step_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_TagArgs = {
  _inc?: Maybe<Tag_Inc_Input>,
  _set?: Maybe<Tag_Set_Input>,
  where: Tag_Bool_Exp
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root',
  /** fetch data from the table: "choreo" */
  choreo: Array<Choreo>,
  /** fetch aggregated fields from the table: "choreo" */
  choreo_aggregate: Choreo_Aggregate,
  /** fetch data from the table: "choreo" using primary key columns */
  choreo_by_pk?: Maybe<Choreo>,
  /** fetch data from the table: "step" */
  step: Array<Step>,
  /** fetch aggregated fields from the table: "step" */
  step_aggregate: Step_Aggregate,
  /** fetch data from the table: "step" using primary key columns */
  step_by_pk?: Maybe<Step>,
  /** fetch data from the table: "tag" */
  tag: Array<Tag>,
  /** fetch aggregated fields from the table: "tag" */
  tag_aggregate: Tag_Aggregate,
  /** fetch data from the table: "tag" using primary key columns */
  tag_by_pk?: Maybe<Tag>,
};


/** query root */
export type Query_RootChoreoArgs = {
  distinct_on?: Maybe<Array<Choreo_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Choreo_Order_By>>,
  where?: Maybe<Choreo_Bool_Exp>
};


/** query root */
export type Query_RootChoreo_AggregateArgs = {
  distinct_on?: Maybe<Array<Choreo_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Choreo_Order_By>>,
  where?: Maybe<Choreo_Bool_Exp>
};


/** query root */
export type Query_RootChoreo_By_PkArgs = {
  id: Scalars['Int']
};


/** query root */
export type Query_RootStepArgs = {
  distinct_on?: Maybe<Array<Step_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Step_Order_By>>,
  where?: Maybe<Step_Bool_Exp>
};


/** query root */
export type Query_RootStep_AggregateArgs = {
  distinct_on?: Maybe<Array<Step_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Step_Order_By>>,
  where?: Maybe<Step_Bool_Exp>
};


/** query root */
export type Query_RootStep_By_PkArgs = {
  id: Scalars['Int']
};


/** query root */
export type Query_RootTagArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Tag_Order_By>>,
  where?: Maybe<Tag_Bool_Exp>
};


/** query root */
export type Query_RootTag_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Tag_Order_By>>,
  where?: Maybe<Tag_Bool_Exp>
};


/** query root */
export type Query_RootTag_By_PkArgs = {
  id: Scalars['Int']
};

/** columns and relationships of "step" */
export type Step = {
  __typename?: 'step',
  /** An object relationship */
  choreo: Choreo,
  choreo_id: Scalars['Int'],
  comment?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
  /** An array relationship */
  tags: Array<Tag>,
  /** An array relationship */
  tagsByStepEnd: Array<Tag>,
  /** An aggregated array relationship */
  tagsByStepEnd_aggregate: Tag_Aggregate,
  /** An aggregated array relationship */
  tags_aggregate: Tag_Aggregate,
  timing?: Maybe<Scalars['String']>,
};


/** columns and relationships of "step" */
export type StepTagsArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Tag_Order_By>>,
  where?: Maybe<Tag_Bool_Exp>
};


/** columns and relationships of "step" */
export type StepTagsByStepEndArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Tag_Order_By>>,
  where?: Maybe<Tag_Bool_Exp>
};


/** columns and relationships of "step" */
export type StepTagsByStepEnd_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Tag_Order_By>>,
  where?: Maybe<Tag_Bool_Exp>
};


/** columns and relationships of "step" */
export type StepTags_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Tag_Order_By>>,
  where?: Maybe<Tag_Bool_Exp>
};

/** aggregated selection of "step" */
export type Step_Aggregate = {
  __typename?: 'step_aggregate',
  aggregate?: Maybe<Step_Aggregate_Fields>,
  nodes: Array<Step>,
};

/** aggregate fields of "step" */
export type Step_Aggregate_Fields = {
  __typename?: 'step_aggregate_fields',
  avg?: Maybe<Step_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Step_Max_Fields>,
  min?: Maybe<Step_Min_Fields>,
  stddev?: Maybe<Step_Stddev_Fields>,
  stddev_pop?: Maybe<Step_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Step_Stddev_Samp_Fields>,
  sum?: Maybe<Step_Sum_Fields>,
  var_pop?: Maybe<Step_Var_Pop_Fields>,
  var_samp?: Maybe<Step_Var_Samp_Fields>,
  variance?: Maybe<Step_Variance_Fields>,
};


/** aggregate fields of "step" */
export type Step_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Step_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "step" */
export type Step_Aggregate_Order_By = {
  avg?: Maybe<Step_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Step_Max_Order_By>,
  min?: Maybe<Step_Min_Order_By>,
  stddev?: Maybe<Step_Stddev_Order_By>,
  stddev_pop?: Maybe<Step_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Step_Stddev_Samp_Order_By>,
  sum?: Maybe<Step_Sum_Order_By>,
  var_pop?: Maybe<Step_Var_Pop_Order_By>,
  var_samp?: Maybe<Step_Var_Samp_Order_By>,
  variance?: Maybe<Step_Variance_Order_By>,
};

/** input type for inserting array relation for remote table "step" */
export type Step_Arr_Rel_Insert_Input = {
  data: Array<Step_Insert_Input>,
  on_conflict?: Maybe<Step_On_Conflict>,
};

/** aggregate avg on columns */
export type Step_Avg_Fields = {
  __typename?: 'step_avg_fields',
  choreo_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "step" */
export type Step_Avg_Order_By = {
  choreo_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

/** Boolean expression to filter rows from the table "step". All fields are combined with a logical 'AND'. */
export type Step_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Step_Bool_Exp>>>,
  _not?: Maybe<Step_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Step_Bool_Exp>>>,
  choreo?: Maybe<Choreo_Bool_Exp>,
  choreo_id?: Maybe<Integer_Comparison_Exp>,
  comment?: Maybe<Text_Comparison_Exp>,
  id?: Maybe<Integer_Comparison_Exp>,
  tags?: Maybe<Tag_Bool_Exp>,
  tagsByStepEnd?: Maybe<Tag_Bool_Exp>,
  timing?: Maybe<Text_Comparison_Exp>,
};

/** unique or primary key constraints on table "step" */
export enum Step_Constraint {
  /** unique or primary key constraint */
  StepPkey = 'step_pkey'
}

/** input type for incrementing integer columne in table "step" */
export type Step_Inc_Input = {
  choreo_id?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "step" */
export type Step_Insert_Input = {
  choreo?: Maybe<Choreo_Obj_Rel_Insert_Input>,
  choreo_id?: Maybe<Scalars['Int']>,
  comment?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  tags?: Maybe<Tag_Arr_Rel_Insert_Input>,
  tagsByStepEnd?: Maybe<Tag_Arr_Rel_Insert_Input>,
  timing?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type Step_Max_Fields = {
  __typename?: 'step_max_fields',
  choreo_id?: Maybe<Scalars['Int']>,
  comment?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  timing?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "step" */
export type Step_Max_Order_By = {
  choreo_id?: Maybe<Order_By>,
  comment?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  timing?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Step_Min_Fields = {
  __typename?: 'step_min_fields',
  choreo_id?: Maybe<Scalars['Int']>,
  comment?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  timing?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "step" */
export type Step_Min_Order_By = {
  choreo_id?: Maybe<Order_By>,
  comment?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  timing?: Maybe<Order_By>,
};

/** response of any mutation on the table "step" */
export type Step_Mutation_Response = {
  __typename?: 'step_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Step>,
};

/** input type for inserting object relation for remote table "step" */
export type Step_Obj_Rel_Insert_Input = {
  data: Step_Insert_Input,
  on_conflict?: Maybe<Step_On_Conflict>,
};

/** on conflict condition type for table "step" */
export type Step_On_Conflict = {
  constraint: Step_Constraint,
  update_columns: Array<Step_Update_Column>,
};

/** ordering options when selecting data from "step" */
export type Step_Order_By = {
  choreo?: Maybe<Choreo_Order_By>,
  choreo_id?: Maybe<Order_By>,
  comment?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  tagsByStepEnd_aggregate?: Maybe<Tag_Aggregate_Order_By>,
  tags_aggregate?: Maybe<Tag_Aggregate_Order_By>,
  timing?: Maybe<Order_By>,
};

/** select columns of table "step" */
export enum Step_Select_Column {
  /** column name */
  ChoreoId = 'choreo_id',
  /** column name */
  Comment = 'comment',
  /** column name */
  Id = 'id',
  /** column name */
  Timing = 'timing'
}

/** input type for updating data in table "step" */
export type Step_Set_Input = {
  choreo_id?: Maybe<Scalars['Int']>,
  comment?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  timing?: Maybe<Scalars['String']>,
};

/** aggregate stddev on columns */
export type Step_Stddev_Fields = {
  __typename?: 'step_stddev_fields',
  choreo_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "step" */
export type Step_Stddev_Order_By = {
  choreo_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

/** aggregate stddev_pop on columns */
export type Step_Stddev_Pop_Fields = {
  __typename?: 'step_stddev_pop_fields',
  choreo_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "step" */
export type Step_Stddev_Pop_Order_By = {
  choreo_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

/** aggregate stddev_samp on columns */
export type Step_Stddev_Samp_Fields = {
  __typename?: 'step_stddev_samp_fields',
  choreo_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "step" */
export type Step_Stddev_Samp_Order_By = {
  choreo_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

/** aggregate sum on columns */
export type Step_Sum_Fields = {
  __typename?: 'step_sum_fields',
  choreo_id?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "step" */
export type Step_Sum_Order_By = {
  choreo_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

/** update columns of table "step" */
export enum Step_Update_Column {
  /** column name */
  ChoreoId = 'choreo_id',
  /** column name */
  Comment = 'comment',
  /** column name */
  Id = 'id',
  /** column name */
  Timing = 'timing'
}

/** aggregate var_pop on columns */
export type Step_Var_Pop_Fields = {
  __typename?: 'step_var_pop_fields',
  choreo_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "step" */
export type Step_Var_Pop_Order_By = {
  choreo_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

/** aggregate var_samp on columns */
export type Step_Var_Samp_Fields = {
  __typename?: 'step_var_samp_fields',
  choreo_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "step" */
export type Step_Var_Samp_Order_By = {
  choreo_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

/** aggregate variance on columns */
export type Step_Variance_Fields = {
  __typename?: 'step_variance_fields',
  choreo_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "step" */
export type Step_Variance_Order_By = {
  choreo_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root',
  /** fetch data from the table: "choreo" */
  choreo: Array<Choreo>,
  /** fetch aggregated fields from the table: "choreo" */
  choreo_aggregate: Choreo_Aggregate,
  /** fetch data from the table: "choreo" using primary key columns */
  choreo_by_pk?: Maybe<Choreo>,
  /** fetch data from the table: "step" */
  step: Array<Step>,
  /** fetch aggregated fields from the table: "step" */
  step_aggregate: Step_Aggregate,
  /** fetch data from the table: "step" using primary key columns */
  step_by_pk?: Maybe<Step>,
  /** fetch data from the table: "tag" */
  tag: Array<Tag>,
  /** fetch aggregated fields from the table: "tag" */
  tag_aggregate: Tag_Aggregate,
  /** fetch data from the table: "tag" using primary key columns */
  tag_by_pk?: Maybe<Tag>,
};


/** subscription root */
export type Subscription_RootChoreoArgs = {
  distinct_on?: Maybe<Array<Choreo_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Choreo_Order_By>>,
  where?: Maybe<Choreo_Bool_Exp>
};


/** subscription root */
export type Subscription_RootChoreo_AggregateArgs = {
  distinct_on?: Maybe<Array<Choreo_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Choreo_Order_By>>,
  where?: Maybe<Choreo_Bool_Exp>
};


/** subscription root */
export type Subscription_RootChoreo_By_PkArgs = {
  id: Scalars['Int']
};


/** subscription root */
export type Subscription_RootStepArgs = {
  distinct_on?: Maybe<Array<Step_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Step_Order_By>>,
  where?: Maybe<Step_Bool_Exp>
};


/** subscription root */
export type Subscription_RootStep_AggregateArgs = {
  distinct_on?: Maybe<Array<Step_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Step_Order_By>>,
  where?: Maybe<Step_Bool_Exp>
};


/** subscription root */
export type Subscription_RootStep_By_PkArgs = {
  id: Scalars['Int']
};


/** subscription root */
export type Subscription_RootTagArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Tag_Order_By>>,
  where?: Maybe<Tag_Bool_Exp>
};


/** subscription root */
export type Subscription_RootTag_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Tag_Order_By>>,
  where?: Maybe<Tag_Bool_Exp>
};


/** subscription root */
export type Subscription_RootTag_By_PkArgs = {
  id: Scalars['Int']
};

/** columns and relationships of "tag" */
export type Tag = {
  __typename?: 'tag',
  /** An object relationship */
  choreo: Choreo,
  choreo_id: Scalars['Int'],
  color: Scalars['String'],
  content: Scalars['String'],
  created_at: Scalars['timestamptz'],
  id: Scalars['Int'],
  /** An object relationship */
  step: Step,
  /** An object relationship */
  stepByStepStart: Step,
  step_end: Scalars['Int'],
  step_start: Scalars['Int'],
  title: Scalars['String'],
  type: Scalars['String'],
};

/** aggregated selection of "tag" */
export type Tag_Aggregate = {
  __typename?: 'tag_aggregate',
  aggregate?: Maybe<Tag_Aggregate_Fields>,
  nodes: Array<Tag>,
};

/** aggregate fields of "tag" */
export type Tag_Aggregate_Fields = {
  __typename?: 'tag_aggregate_fields',
  avg?: Maybe<Tag_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Tag_Max_Fields>,
  min?: Maybe<Tag_Min_Fields>,
  stddev?: Maybe<Tag_Stddev_Fields>,
  stddev_pop?: Maybe<Tag_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Tag_Stddev_Samp_Fields>,
  sum?: Maybe<Tag_Sum_Fields>,
  var_pop?: Maybe<Tag_Var_Pop_Fields>,
  var_samp?: Maybe<Tag_Var_Samp_Fields>,
  variance?: Maybe<Tag_Variance_Fields>,
};


/** aggregate fields of "tag" */
export type Tag_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tag_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "tag" */
export type Tag_Aggregate_Order_By = {
  avg?: Maybe<Tag_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Tag_Max_Order_By>,
  min?: Maybe<Tag_Min_Order_By>,
  stddev?: Maybe<Tag_Stddev_Order_By>,
  stddev_pop?: Maybe<Tag_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Tag_Stddev_Samp_Order_By>,
  sum?: Maybe<Tag_Sum_Order_By>,
  var_pop?: Maybe<Tag_Var_Pop_Order_By>,
  var_samp?: Maybe<Tag_Var_Samp_Order_By>,
  variance?: Maybe<Tag_Variance_Order_By>,
};

/** input type for inserting array relation for remote table "tag" */
export type Tag_Arr_Rel_Insert_Input = {
  data: Array<Tag_Insert_Input>,
  on_conflict?: Maybe<Tag_On_Conflict>,
};

/** aggregate avg on columns */
export type Tag_Avg_Fields = {
  __typename?: 'tag_avg_fields',
  choreo_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  step_end?: Maybe<Scalars['Float']>,
  step_start?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "tag" */
export type Tag_Avg_Order_By = {
  choreo_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  step_end?: Maybe<Order_By>,
  step_start?: Maybe<Order_By>,
};

/** Boolean expression to filter rows from the table "tag". All fields are combined with a logical 'AND'. */
export type Tag_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tag_Bool_Exp>>>,
  _not?: Maybe<Tag_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Tag_Bool_Exp>>>,
  choreo?: Maybe<Choreo_Bool_Exp>,
  choreo_id?: Maybe<Integer_Comparison_Exp>,
  color?: Maybe<Text_Comparison_Exp>,
  content?: Maybe<Text_Comparison_Exp>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  id?: Maybe<Integer_Comparison_Exp>,
  step?: Maybe<Step_Bool_Exp>,
  stepByStepStart?: Maybe<Step_Bool_Exp>,
  step_end?: Maybe<Integer_Comparison_Exp>,
  step_start?: Maybe<Integer_Comparison_Exp>,
  title?: Maybe<Text_Comparison_Exp>,
  type?: Maybe<Text_Comparison_Exp>,
};

/** unique or primary key constraints on table "tag" */
export enum Tag_Constraint {
  /** unique or primary key constraint */
  TagPkey = 'tag_pkey'
}

/** input type for incrementing integer columne in table "tag" */
export type Tag_Inc_Input = {
  choreo_id?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  step_end?: Maybe<Scalars['Int']>,
  step_start?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "tag" */
export type Tag_Insert_Input = {
  choreo?: Maybe<Choreo_Obj_Rel_Insert_Input>,
  choreo_id?: Maybe<Scalars['Int']>,
  color?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  step?: Maybe<Step_Obj_Rel_Insert_Input>,
  stepByStepStart?: Maybe<Step_Obj_Rel_Insert_Input>,
  step_end?: Maybe<Scalars['Int']>,
  step_start?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type Tag_Max_Fields = {
  __typename?: 'tag_max_fields',
  choreo_id?: Maybe<Scalars['Int']>,
  color?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  step_end?: Maybe<Scalars['Int']>,
  step_start?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "tag" */
export type Tag_Max_Order_By = {
  choreo_id?: Maybe<Order_By>,
  color?: Maybe<Order_By>,
  content?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  step_end?: Maybe<Order_By>,
  step_start?: Maybe<Order_By>,
  title?: Maybe<Order_By>,
  type?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Tag_Min_Fields = {
  __typename?: 'tag_min_fields',
  choreo_id?: Maybe<Scalars['Int']>,
  color?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  step_end?: Maybe<Scalars['Int']>,
  step_start?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "tag" */
export type Tag_Min_Order_By = {
  choreo_id?: Maybe<Order_By>,
  color?: Maybe<Order_By>,
  content?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  step_end?: Maybe<Order_By>,
  step_start?: Maybe<Order_By>,
  title?: Maybe<Order_By>,
  type?: Maybe<Order_By>,
};

/** response of any mutation on the table "tag" */
export type Tag_Mutation_Response = {
  __typename?: 'tag_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Tag>,
};

/** input type for inserting object relation for remote table "tag" */
export type Tag_Obj_Rel_Insert_Input = {
  data: Tag_Insert_Input,
  on_conflict?: Maybe<Tag_On_Conflict>,
};

/** on conflict condition type for table "tag" */
export type Tag_On_Conflict = {
  constraint: Tag_Constraint,
  update_columns: Array<Tag_Update_Column>,
};

/** ordering options when selecting data from "tag" */
export type Tag_Order_By = {
  choreo?: Maybe<Choreo_Order_By>,
  choreo_id?: Maybe<Order_By>,
  color?: Maybe<Order_By>,
  content?: Maybe<Order_By>,
  created_at?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  step?: Maybe<Step_Order_By>,
  stepByStepStart?: Maybe<Step_Order_By>,
  step_end?: Maybe<Order_By>,
  step_start?: Maybe<Order_By>,
  title?: Maybe<Order_By>,
  type?: Maybe<Order_By>,
};

/** select columns of table "tag" */
export enum Tag_Select_Column {
  /** column name */
  ChoreoId = 'choreo_id',
  /** column name */
  Color = 'color',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  StepEnd = 'step_end',
  /** column name */
  StepStart = 'step_start',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "tag" */
export type Tag_Set_Input = {
  choreo_id?: Maybe<Scalars['Int']>,
  color?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['Int']>,
  step_end?: Maybe<Scalars['Int']>,
  step_start?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
};

/** aggregate stddev on columns */
export type Tag_Stddev_Fields = {
  __typename?: 'tag_stddev_fields',
  choreo_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  step_end?: Maybe<Scalars['Float']>,
  step_start?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "tag" */
export type Tag_Stddev_Order_By = {
  choreo_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  step_end?: Maybe<Order_By>,
  step_start?: Maybe<Order_By>,
};

/** aggregate stddev_pop on columns */
export type Tag_Stddev_Pop_Fields = {
  __typename?: 'tag_stddev_pop_fields',
  choreo_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  step_end?: Maybe<Scalars['Float']>,
  step_start?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "tag" */
export type Tag_Stddev_Pop_Order_By = {
  choreo_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  step_end?: Maybe<Order_By>,
  step_start?: Maybe<Order_By>,
};

/** aggregate stddev_samp on columns */
export type Tag_Stddev_Samp_Fields = {
  __typename?: 'tag_stddev_samp_fields',
  choreo_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  step_end?: Maybe<Scalars['Float']>,
  step_start?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "tag" */
export type Tag_Stddev_Samp_Order_By = {
  choreo_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  step_end?: Maybe<Order_By>,
  step_start?: Maybe<Order_By>,
};

/** aggregate sum on columns */
export type Tag_Sum_Fields = {
  __typename?: 'tag_sum_fields',
  choreo_id?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  step_end?: Maybe<Scalars['Int']>,
  step_start?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "tag" */
export type Tag_Sum_Order_By = {
  choreo_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  step_end?: Maybe<Order_By>,
  step_start?: Maybe<Order_By>,
};

/** update columns of table "tag" */
export enum Tag_Update_Column {
  /** column name */
  ChoreoId = 'choreo_id',
  /** column name */
  Color = 'color',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  StepEnd = 'step_end',
  /** column name */
  StepStart = 'step_start',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type'
}

/** aggregate var_pop on columns */
export type Tag_Var_Pop_Fields = {
  __typename?: 'tag_var_pop_fields',
  choreo_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  step_end?: Maybe<Scalars['Float']>,
  step_start?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "tag" */
export type Tag_Var_Pop_Order_By = {
  choreo_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  step_end?: Maybe<Order_By>,
  step_start?: Maybe<Order_By>,
};

/** aggregate var_samp on columns */
export type Tag_Var_Samp_Fields = {
  __typename?: 'tag_var_samp_fields',
  choreo_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  step_end?: Maybe<Scalars['Float']>,
  step_start?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "tag" */
export type Tag_Var_Samp_Order_By = {
  choreo_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  step_end?: Maybe<Order_By>,
  step_start?: Maybe<Order_By>,
};

/** aggregate variance on columns */
export type Tag_Variance_Fields = {
  __typename?: 'tag_variance_fields',
  choreo_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  step_end?: Maybe<Scalars['Float']>,
  step_start?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "tag" */
export type Tag_Variance_Order_By = {
  choreo_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  step_end?: Maybe<Order_By>,
  step_start?: Maybe<Order_By>,
};

/** expression to compare columns of type text. All fields are combined with logical 'AND'. */
export type Text_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>,
  _gt?: Maybe<Scalars['String']>,
  _gte?: Maybe<Scalars['String']>,
  _ilike?: Maybe<Scalars['String']>,
  _in?: Maybe<Array<Scalars['String']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _like?: Maybe<Scalars['String']>,
  _lt?: Maybe<Scalars['String']>,
  _lte?: Maybe<Scalars['String']>,
  _neq?: Maybe<Scalars['String']>,
  _nilike?: Maybe<Scalars['String']>,
  _nin?: Maybe<Array<Scalars['String']>>,
  _nlike?: Maybe<Scalars['String']>,
  _nsimilar?: Maybe<Scalars['String']>,
  _similar?: Maybe<Scalars['String']>,
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>,
  _gt?: Maybe<Scalars['timestamptz']>,
  _gte?: Maybe<Scalars['timestamptz']>,
  _in?: Maybe<Array<Scalars['timestamptz']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['timestamptz']>,
  _lte?: Maybe<Scalars['timestamptz']>,
  _neq?: Maybe<Scalars['timestamptz']>,
  _nin?: Maybe<Array<Scalars['timestamptz']>>,
};
export type UpdateChoreoNameMutationVariables = {
  choreoId: Scalars['Int'],
  name: Scalars['String']
};


export type UpdateChoreoNameMutation = (
  { __typename?: 'mutation_root' }
  & { update_choreo: Maybe<(
    { __typename?: 'choreo_mutation_response' }
    & { returning: Array<(
      { __typename?: 'choreo' }
      & Pick<Choreo, 'id'>
    )> }
  )> }
);

export type UpdateChoreoDanceMutationVariables = {
  choreoId: Scalars['Int'],
  danceName: Scalars['String'],
  dancePhrase: Scalars['Int']
};


export type UpdateChoreoDanceMutation = (
  { __typename?: 'mutation_root' }
  & { update_choreo: Maybe<(
    { __typename?: 'choreo_mutation_response' }
    & { returning: Array<(
      { __typename?: 'choreo' }
      & Pick<Choreo, 'id'>
    )> }
  )> }
);

export type StepsQueryVariables = {
  id: Scalars['Int'],
  prefix: Scalars['String']
};


export type StepsQuery = (
  { __typename?: 'query_root' }
  & { choreo: Array<(
    { __typename?: 'choreo' }
    & Pick<Choreo, 'name' | 'danceName' | 'dancePhrase'>
    & { steps: Array<(
      { __typename?: 'step' }
      & Pick<Step, 'id' | 'comment' | 'timing'>
    )>, tags: Array<(
      { __typename?: 'tag' }
      & Pick<Tag, 'color' | 'content' | 'step_end' | 'step_start' | 'title' | 'type'>
    )> }
  )> }
);

export type AddStepMutationVariables = {
  choreoId: Scalars['Int'],
  timing: Scalars['String']
};


export type AddStepMutation = (
  { __typename?: 'mutation_root' }
  & { insert_step: Maybe<(
    { __typename?: 'step_mutation_response' }
    & Pick<Step_Mutation_Response, 'affected_rows'>
  )> }
);

export type AddFigureMutationVariables = {
  choreoId: Scalars['Int'],
  step_start: Scalars['Int'],
  step_end: Scalars['Int'],
  title: Scalars['String'],
  content: Scalars['String'],
  color: Scalars['String']
};


export type AddFigureMutation = (
  { __typename?: 'mutation_root' }
  & { insert_tag: Maybe<(
    { __typename?: 'tag_mutation_response' }
    & Pick<Tag_Mutation_Response, 'affected_rows'>
  )> }
);

export type CreateChoreoMutationVariables = {
  publicId: Scalars['String']
};


export type CreateChoreoMutation = (
  { __typename?: 'mutation_root' }
  & { insert_choreo: Maybe<(
    { __typename?: 'choreo_mutation_response' }
    & { returning: Array<(
      { __typename?: 'choreo' }
      & Pick<Choreo, 'id' | 'public_id_prefix'>
    )> }
  )> }
);

export const UpdateChoreoNameDocument = gql`
    mutation updateChoreoName($choreoId: Int!, $name: String!) {
  update_choreo(where: {id: {_eq: $choreoId}}, _set: {name: $name}) {
    returning {
      id
    }
  }
}
    `;
export type UpdateChoreoNameMutationFn = ApolloReactCommon.MutationFunction<UpdateChoreoNameMutation, UpdateChoreoNameMutationVariables>;
export type UpdateChoreoNameComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateChoreoNameMutation, UpdateChoreoNameMutationVariables>, 'mutation'>;

    export const UpdateChoreoNameComponent = (props: UpdateChoreoNameComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateChoreoNameMutation, UpdateChoreoNameMutationVariables> mutation={UpdateChoreoNameDocument} {...props} />
    );
    
export type UpdateChoreoNameProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UpdateChoreoNameMutation, UpdateChoreoNameMutationVariables> & TChildProps;
export function withUpdateChoreoName<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateChoreoNameMutation,
  UpdateChoreoNameMutationVariables,
  UpdateChoreoNameProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateChoreoNameMutation, UpdateChoreoNameMutationVariables, UpdateChoreoNameProps<TChildProps>>(UpdateChoreoNameDocument, {
      alias: 'withUpdateChoreoName',
      ...operationOptions
    });
};

    export function useUpdateChoreoNameMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateChoreoNameMutation, UpdateChoreoNameMutationVariables>) {
      return ApolloReactHooks.useMutation<UpdateChoreoNameMutation, UpdateChoreoNameMutationVariables>(UpdateChoreoNameDocument, baseOptions);
    };
export type UpdateChoreoNameMutationHookResult = ReturnType<typeof useUpdateChoreoNameMutation>;
export type UpdateChoreoNameMutationResult = ApolloReactCommon.MutationResult<UpdateChoreoNameMutation>;
export type UpdateChoreoNameMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateChoreoNameMutation, UpdateChoreoNameMutationVariables>;
export const UpdateChoreoDanceDocument = gql`
    mutation updateChoreoDance($choreoId: Int!, $danceName: String!, $dancePhrase: Int!) {
  update_choreo(where: {id: {_eq: $choreoId}}, _set: {danceName: $danceName, dancePhrase: $dancePhrase}) {
    returning {
      id
    }
  }
}
    `;
export type UpdateChoreoDanceMutationFn = ApolloReactCommon.MutationFunction<UpdateChoreoDanceMutation, UpdateChoreoDanceMutationVariables>;
export type UpdateChoreoDanceComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateChoreoDanceMutation, UpdateChoreoDanceMutationVariables>, 'mutation'>;

    export const UpdateChoreoDanceComponent = (props: UpdateChoreoDanceComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateChoreoDanceMutation, UpdateChoreoDanceMutationVariables> mutation={UpdateChoreoDanceDocument} {...props} />
    );
    
export type UpdateChoreoDanceProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UpdateChoreoDanceMutation, UpdateChoreoDanceMutationVariables> & TChildProps;
export function withUpdateChoreoDance<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateChoreoDanceMutation,
  UpdateChoreoDanceMutationVariables,
  UpdateChoreoDanceProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateChoreoDanceMutation, UpdateChoreoDanceMutationVariables, UpdateChoreoDanceProps<TChildProps>>(UpdateChoreoDanceDocument, {
      alias: 'withUpdateChoreoDance',
      ...operationOptions
    });
};

    export function useUpdateChoreoDanceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateChoreoDanceMutation, UpdateChoreoDanceMutationVariables>) {
      return ApolloReactHooks.useMutation<UpdateChoreoDanceMutation, UpdateChoreoDanceMutationVariables>(UpdateChoreoDanceDocument, baseOptions);
    };
export type UpdateChoreoDanceMutationHookResult = ReturnType<typeof useUpdateChoreoDanceMutation>;
export type UpdateChoreoDanceMutationResult = ApolloReactCommon.MutationResult<UpdateChoreoDanceMutation>;
export type UpdateChoreoDanceMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateChoreoDanceMutation, UpdateChoreoDanceMutationVariables>;
export const StepsDocument = gql`
    query steps($id: Int!, $prefix: String!) {
  choreo(where: {id: {_eq: $id}, public_id_prefix: {_eq: $prefix}}, order_by: {id: asc}) {
    name
    danceName
    dancePhrase
    steps {
      id
      comment
      timing
    }
    tags {
      color
      content
      step_end
      step_start
      title
      type
    }
  }
}
    `;
export type StepsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<StepsQuery, StepsQueryVariables>, 'query'> & ({ variables: StepsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const StepsComponent = (props: StepsComponentProps) => (
      <ApolloReactComponents.Query<StepsQuery, StepsQueryVariables> query={StepsDocument} {...props} />
    );
    
export type StepsProps<TChildProps = {}> = ApolloReactHoc.DataProps<StepsQuery, StepsQueryVariables> & TChildProps;
export function withSteps<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  StepsQuery,
  StepsQueryVariables,
  StepsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, StepsQuery, StepsQueryVariables, StepsProps<TChildProps>>(StepsDocument, {
      alias: 'withSteps',
      ...operationOptions
    });
};

    export function useStepsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<StepsQuery, StepsQueryVariables>) {
      return ApolloReactHooks.useQuery<StepsQuery, StepsQueryVariables>(StepsDocument, baseOptions);
    };
      export function useStepsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<StepsQuery, StepsQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<StepsQuery, StepsQueryVariables>(StepsDocument, baseOptions);
      };
      
export type StepsQueryHookResult = ReturnType<typeof useStepsQuery>;
export type StepsQueryResult = ApolloReactCommon.QueryResult<StepsQuery, StepsQueryVariables>;
export const AddStepDocument = gql`
    mutation addStep($choreoId: Int!, $timing: String!) {
  insert_step(objects: {choreo_id: $choreoId, timing: $timing}) {
    affected_rows
  }
}
    `;
export type AddStepMutationFn = ApolloReactCommon.MutationFunction<AddStepMutation, AddStepMutationVariables>;
export type AddStepComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddStepMutation, AddStepMutationVariables>, 'mutation'>;

    export const AddStepComponent = (props: AddStepComponentProps) => (
      <ApolloReactComponents.Mutation<AddStepMutation, AddStepMutationVariables> mutation={AddStepDocument} {...props} />
    );
    
export type AddStepProps<TChildProps = {}> = ApolloReactHoc.MutateProps<AddStepMutation, AddStepMutationVariables> & TChildProps;
export function withAddStep<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddStepMutation,
  AddStepMutationVariables,
  AddStepProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, AddStepMutation, AddStepMutationVariables, AddStepProps<TChildProps>>(AddStepDocument, {
      alias: 'withAddStep',
      ...operationOptions
    });
};

    export function useAddStepMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddStepMutation, AddStepMutationVariables>) {
      return ApolloReactHooks.useMutation<AddStepMutation, AddStepMutationVariables>(AddStepDocument, baseOptions);
    };
export type AddStepMutationHookResult = ReturnType<typeof useAddStepMutation>;
export type AddStepMutationResult = ApolloReactCommon.MutationResult<AddStepMutation>;
export type AddStepMutationOptions = ApolloReactCommon.BaseMutationOptions<AddStepMutation, AddStepMutationVariables>;
export const AddFigureDocument = gql`
    mutation addFigure($choreoId: Int!, $step_start: Int!, $step_end: Int!, $title: String!, $content: String!, $color: String!) {
  insert_tag(objects: {content: $content, color: $color, choreo_id: $choreoId, title: $title, type: "Figure", step_start: $step_start, step_end: $step_end}) {
    affected_rows
  }
}
    `;
export type AddFigureMutationFn = ApolloReactCommon.MutationFunction<AddFigureMutation, AddFigureMutationVariables>;
export type AddFigureComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddFigureMutation, AddFigureMutationVariables>, 'mutation'>;

    export const AddFigureComponent = (props: AddFigureComponentProps) => (
      <ApolloReactComponents.Mutation<AddFigureMutation, AddFigureMutationVariables> mutation={AddFigureDocument} {...props} />
    );
    
export type AddFigureProps<TChildProps = {}> = ApolloReactHoc.MutateProps<AddFigureMutation, AddFigureMutationVariables> & TChildProps;
export function withAddFigure<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddFigureMutation,
  AddFigureMutationVariables,
  AddFigureProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, AddFigureMutation, AddFigureMutationVariables, AddFigureProps<TChildProps>>(AddFigureDocument, {
      alias: 'withAddFigure',
      ...operationOptions
    });
};

    export function useAddFigureMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddFigureMutation, AddFigureMutationVariables>) {
      return ApolloReactHooks.useMutation<AddFigureMutation, AddFigureMutationVariables>(AddFigureDocument, baseOptions);
    };
export type AddFigureMutationHookResult = ReturnType<typeof useAddFigureMutation>;
export type AddFigureMutationResult = ApolloReactCommon.MutationResult<AddFigureMutation>;
export type AddFigureMutationOptions = ApolloReactCommon.BaseMutationOptions<AddFigureMutation, AddFigureMutationVariables>;
export const CreateChoreoDocument = gql`
    mutation CreateChoreo($publicId: String!) {
  insert_choreo(objects: {public_id_prefix: $publicId, name: "My Choreo - Click here to edit"}) {
    returning {
      id
      public_id_prefix
    }
  }
}
    `;
export type CreateChoreoMutationFn = ApolloReactCommon.MutationFunction<CreateChoreoMutation, CreateChoreoMutationVariables>;
export type CreateChoreoComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateChoreoMutation, CreateChoreoMutationVariables>, 'mutation'>;

    export const CreateChoreoComponent = (props: CreateChoreoComponentProps) => (
      <ApolloReactComponents.Mutation<CreateChoreoMutation, CreateChoreoMutationVariables> mutation={CreateChoreoDocument} {...props} />
    );
    
export type CreateChoreoProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CreateChoreoMutation, CreateChoreoMutationVariables> & TChildProps;
export function withCreateChoreo<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateChoreoMutation,
  CreateChoreoMutationVariables,
  CreateChoreoProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CreateChoreoMutation, CreateChoreoMutationVariables, CreateChoreoProps<TChildProps>>(CreateChoreoDocument, {
      alias: 'withCreateChoreo',
      ...operationOptions
    });
};

    export function useCreateChoreoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateChoreoMutation, CreateChoreoMutationVariables>) {
      return ApolloReactHooks.useMutation<CreateChoreoMutation, CreateChoreoMutationVariables>(CreateChoreoDocument, baseOptions);
    };
export type CreateChoreoMutationHookResult = ReturnType<typeof useCreateChoreoMutation>;
export type CreateChoreoMutationResult = ApolloReactCommon.MutationResult<CreateChoreoMutation>;
export type CreateChoreoMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateChoreoMutation, CreateChoreoMutationVariables>;
      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }

      const result: IntrospectionResultData = {
  "__schema": {
    "types": []
  }
};

      export default result;
    