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
};

/** columns and relationships of "choreo" */
export type Choreo = {
  __typename?: 'choreo',
  id: Scalars['Int'],
  name?: Maybe<Scalars['String']>,
  public_id_prefix: Scalars['String'],
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
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "choreo" */
export type Choreo_Avg_Order_By = {
  id?: Maybe<Order_By>,
};

/** Boolean expression to filter rows from the table "choreo". All fields are combined with a logical 'AND'. */
export type Choreo_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Choreo_Bool_Exp>>>,
  _not?: Maybe<Choreo_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Choreo_Bool_Exp>>>,
  id?: Maybe<Integer_Comparison_Exp>,
  name?: Maybe<Text_Comparison_Exp>,
  public_id_prefix?: Maybe<Text_Comparison_Exp>,
};

/** unique or primary key constraints on table "choreo" */
export enum Choreo_Constraint {
  /** unique or primary key constraint */
  ChoreoPkey = 'choreo_pkey'
}

/** input type for incrementing integer columne in table "choreo" */
export type Choreo_Inc_Input = {
  id?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "choreo" */
export type Choreo_Insert_Input = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  public_id_prefix?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type Choreo_Max_Fields = {
  __typename?: 'choreo_max_fields',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  public_id_prefix?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "choreo" */
export type Choreo_Max_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  public_id_prefix?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Choreo_Min_Fields = {
  __typename?: 'choreo_min_fields',
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  public_id_prefix?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "choreo" */
export type Choreo_Min_Order_By = {
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
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  public_id_prefix?: Maybe<Order_By>,
};

/** select columns of table "choreo" */
export enum Choreo_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PublicIdPrefix = 'public_id_prefix'
}

/** input type for updating data in table "choreo" */
export type Choreo_Set_Input = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  public_id_prefix?: Maybe<Scalars['String']>,
};

/** aggregate stddev on columns */
export type Choreo_Stddev_Fields = {
  __typename?: 'choreo_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "choreo" */
export type Choreo_Stddev_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate stddev_pop on columns */
export type Choreo_Stddev_Pop_Fields = {
  __typename?: 'choreo_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "choreo" */
export type Choreo_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate stddev_samp on columns */
export type Choreo_Stddev_Samp_Fields = {
  __typename?: 'choreo_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "choreo" */
export type Choreo_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate sum on columns */
export type Choreo_Sum_Fields = {
  __typename?: 'choreo_sum_fields',
  id?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "choreo" */
export type Choreo_Sum_Order_By = {
  id?: Maybe<Order_By>,
};

/** update columns of table "choreo" */
export enum Choreo_Update_Column {
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
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "choreo" */
export type Choreo_Var_Pop_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate var_samp on columns */
export type Choreo_Var_Samp_Fields = {
  __typename?: 'choreo_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "choreo" */
export type Choreo_Var_Samp_Order_By = {
  id?: Maybe<Order_By>,
};

/** aggregate variance on columns */
export type Choreo_Variance_Fields = {
  __typename?: 'choreo_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "choreo" */
export type Choreo_Variance_Order_By = {
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
  /** insert data into the table: "choreo" */
  insert_choreo?: Maybe<Choreo_Mutation_Response>,
  /** insert data into the table: "step" */
  insert_step?: Maybe<Step_Mutation_Response>,
  /** update data of the table: "choreo" */
  update_choreo?: Maybe<Choreo_Mutation_Response>,
  /** update data of the table: "step" */
  update_step?: Maybe<Step_Mutation_Response>,
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

/** columns and relationships of "step" */
export type Step = {
  __typename?: 'step',
  choreo_id: Scalars['Int'],
  comment?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
  timing: Scalars['Int'],
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
  timing?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "step" */
export type Step_Avg_Order_By = {
  choreo_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  timing?: Maybe<Order_By>,
};

/** Boolean expression to filter rows from the table "step". All fields are combined with a logical 'AND'. */
export type Step_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Step_Bool_Exp>>>,
  _not?: Maybe<Step_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Step_Bool_Exp>>>,
  choreo_id?: Maybe<Integer_Comparison_Exp>,
  comment?: Maybe<Text_Comparison_Exp>,
  id?: Maybe<Integer_Comparison_Exp>,
  timing?: Maybe<Integer_Comparison_Exp>,
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
  timing?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "step" */
export type Step_Insert_Input = {
  choreo_id?: Maybe<Scalars['Int']>,
  comment?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  timing?: Maybe<Scalars['Int']>,
};

/** aggregate max on columns */
export type Step_Max_Fields = {
  __typename?: 'step_max_fields',
  choreo_id?: Maybe<Scalars['Int']>,
  comment?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  timing?: Maybe<Scalars['Int']>,
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
  timing?: Maybe<Scalars['Int']>,
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
  choreo_id?: Maybe<Order_By>,
  comment?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
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
  timing?: Maybe<Scalars['Int']>,
};

/** aggregate stddev on columns */
export type Step_Stddev_Fields = {
  __typename?: 'step_stddev_fields',
  choreo_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  timing?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "step" */
export type Step_Stddev_Order_By = {
  choreo_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  timing?: Maybe<Order_By>,
};

/** aggregate stddev_pop on columns */
export type Step_Stddev_Pop_Fields = {
  __typename?: 'step_stddev_pop_fields',
  choreo_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  timing?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "step" */
export type Step_Stddev_Pop_Order_By = {
  choreo_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  timing?: Maybe<Order_By>,
};

/** aggregate stddev_samp on columns */
export type Step_Stddev_Samp_Fields = {
  __typename?: 'step_stddev_samp_fields',
  choreo_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  timing?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "step" */
export type Step_Stddev_Samp_Order_By = {
  choreo_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  timing?: Maybe<Order_By>,
};

/** aggregate sum on columns */
export type Step_Sum_Fields = {
  __typename?: 'step_sum_fields',
  choreo_id?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  timing?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "step" */
export type Step_Sum_Order_By = {
  choreo_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  timing?: Maybe<Order_By>,
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
  timing?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "step" */
export type Step_Var_Pop_Order_By = {
  choreo_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  timing?: Maybe<Order_By>,
};

/** aggregate var_samp on columns */
export type Step_Var_Samp_Fields = {
  __typename?: 'step_var_samp_fields',
  choreo_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  timing?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "step" */
export type Step_Var_Samp_Order_By = {
  choreo_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  timing?: Maybe<Order_By>,
};

/** aggregate variance on columns */
export type Step_Variance_Fields = {
  __typename?: 'step_variance_fields',
  choreo_id?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  timing?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "step" */
export type Step_Variance_Order_By = {
  choreo_id?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  timing?: Maybe<Order_By>,
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

export const CreateChoreoDocument = gql`
    mutation CreateChoreo($publicId: String!) {
  insert_choreo(objects: {public_id_prefix: $publicId}) {
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
    