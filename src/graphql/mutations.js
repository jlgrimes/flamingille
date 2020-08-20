/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      username
      name
      description
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      id
      username
      name
      description
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) {
      id
      username
      name
      description
    }
  }
`;
export const createMatch = /* GraphQL */ `
  mutation CreateMatch($input: CreateMatchInput!) {
    createMatch(input: $input) {
      id
      sender
      target
      status
    }
  }
`;
export const updateMatch = /* GraphQL */ `
  mutation UpdateMatch($input: UpdateMatchInput!) {
    updateMatch(input: $input) {
      id
      sender
      target
      status
    }
  }
`;
export const deleteMatch = /* GraphQL */ `
  mutation DeleteMatch($input: DeleteMatchInput!) {
    deleteMatch(input: $input) {
      id
      sender
      target
      status
    }
  }
`;
export const createConversationUsers = /* GraphQL */ `
  mutation CreateConversationUsers($input: CreateConversationUsersInput!) {
    createConversationUsers(input: $input) {
      conversationID
      senderUserID
      targetUserID
    }
  }
`;
export const updateConversationUsers = /* GraphQL */ `
  mutation UpdateConversationUsers($input: UpdateConversationUsersInput!) {
    updateConversationUsers(input: $input) {
      conversationID
      senderUserID
      targetUserID
    }
  }
`;
export const deleteConversationUsers = /* GraphQL */ `
  mutation DeleteConversationUsers($input: DeleteConversationUsersInput!) {
    deleteConversationUsers(input: $input) {
      conversationID
      senderUserID
      targetUserID
    }
  }
`;
export const createConversation = /* GraphQL */ `
  mutation CreateConversation($input: CreateConversationInput!) {
    createConversation(input: $input) {
      id
      messages
    }
  }
`;
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation($input: UpdateConversationInput!) {
    updateConversation(input: $input) {
      id
      messages
    }
  }
`;
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation($input: DeleteConversationInput!) {
    deleteConversation(input: $input) {
      id
      messages
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage($input: CreateMessageInput!) {
    createMessage(input: $input) {
      id
      senderUser
      content
      timestamp
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage($input: UpdateMessageInput!) {
    updateMessage(input: $input) {
      id
      senderUser
      content
      timestamp
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage($input: DeleteMessageInput!) {
    deleteMessage(input: $input) {
      id
      senderUser
      content
      timestamp
    }
  }
`;
