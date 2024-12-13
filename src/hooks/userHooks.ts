import { useQuery, useMutation, QueryHookOptions, gql, useSubscription, QueryResult } from "@apollo/client";
import {
  GetUserQuery,
  GetUserQueryVariables,
  UpdateUserMutation,
  UpdateUserMutationVariables,
  UpdateUserInput,
  CreateUserInput,
  CreateUserMutation,
  CreateUserMutationVariables,
  ModelUserConditionInput,
  ListUsersQuery,
  ListUsersQueryVariables,
  ListInstallersQuery,
  ListInstallersQueryVariables,
  ListMessagesQuery,
} from "@/API";
import {
  getUser,
  listMessages,
  listUsers,
} from "@/graphql/queries";
import {
  createMessage,
  createUser as createUserMutation,
  updateUser as updateUserMutation,
} from "@/graphql/mutations";
import {
  onCreateMessage,
  onUpdateUser,
} from "@/graphql/subscriptions"
import { customListIntallers } from "./customQueries";

const GET_USER = gql`${getUser}`;
const LIST_USERS = gql`${listUsers}`;
const CREATE_USER = gql`${createUserMutation}`;
const UPDATE_USER = gql`${updateUserMutation}`;
const LIST_INSTALLERS = gql`${customListIntallers}`
const UPDATE_USER_SUB =  gql`${onUpdateUser}`
const CREATE_MESSAGE =  gql`${createMessage}`
const ON_CREATE_MESSAGE_SUB =  gql`${onCreateMessage}`
const LIST_MESSAGES =  gql`${listMessages}`


export function useGetUser(options?: QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
  return useQuery<GetUserQuery, GetUserQueryVariables>(
    GET_USER,
    options
  );
}

export function useListUsers(options?: QueryHookOptions<ListUsersQuery, ListUsersQueryVariables>) {
  return useQuery<ListUsersQuery, ListUsersQueryVariables>(
    LIST_USERS,
    options
  );
}

export function useCreateUser() {
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  return {
    createUser,
    data,
    loading,
    error,
  };
}

export function useUpdateUser() {
  const [updateUser, { data, loading, error }] = useMutation(UPDATE_USER);

  return {
    updateUser,
    data,
    loading,
    error,
  };
}

export function useListInstallers(options?: QueryHookOptions<ListInstallersQuery, ListInstallersQueryVariables>) {
  return useQuery<ListInstallersQuery, ListInstallersQueryVariables>(
    LIST_INSTALLERS,
    options
  );
}


export function useUserOperations() {
  const { createUser, loading: createLoading, error: createError } = useCreateUser();
  const { updateUser, loading: updateLoading, error: updateError } = useUpdateUser();

  const handleCreateUser = async (userData: CreateUserInput) => {
    try {
      const result = await createUser({variables: { input: userData} });
      return result.data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  };

  const handleUpdateUser = async (userData: UpdateUserInput) => {
    try {
      const result = await updateUser({ variables: { input: userData}});
      return result.data;
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  };

  return {
    handleCreateUser,
    handleUpdateUser,
    loading: createLoading || updateLoading,
    error: createError || updateError,
  };
}

export function useOnUpdateUserSubscription(userID: string) {
  const { data, loading, error } = useSubscription(UPDATE_USER_SUB, {
    variables: { filter: { id: { eq: userID } } },
  });

  return {
    data,
    loading,
    error,
  };
}

export function useCreateMessage() {
  const [createMessage, { data, loading, error }] = useMutation(CREATE_MESSAGE);

  return {
    createMessage,
    data,
    loading,
    error,
  };
}

export function useListMessages(
  options?: QueryHookOptions<ListMessagesQuery>,
): QueryResult<ListMessagesQuery> {
  return useQuery(LIST_MESSAGES, options);
}

export function useOnCreateMessageSubscription(userID: string) {
  const { data, loading, error } = useSubscription(ON_CREATE_MESSAGE_SUB, {
    variables: { filter: { userId: { eq: userID } } },
  });

  return {
    data,
    loading,
    error,
  };
}