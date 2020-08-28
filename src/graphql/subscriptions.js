/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $id: ID
    $username: String
    $name: String
    $description: String
    $createdAt: AWSDateTime
  ) {
    onCreateUser(
      id: $id
      username: $username
      name: $name
      description: $description
      createdAt: $createdAt
    ) {
      id
      username
      name
      description
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $id: ID
    $username: String
    $name: String
    $description: String
    $createdAt: AWSDateTime
  ) {
    onUpdateUser(
      id: $id
      username: $username
      name: $name
      description: $description
      createdAt: $createdAt
    ) {
      id
      username
      name
      description
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $id: ID
    $username: String
    $name: String
    $description: String
    $createdAt: AWSDateTime
  ) {
    onDeleteUser(
      id: $id
      username: $username
      name: $name
      description: $description
      createdAt: $createdAt
    ) {
      id
      username
      name
      description
    }
  }
`;
export const onCreateMatch = /* GraphQL */ `
  subscription OnCreateMatch(
    $id: ID
    $sender: ID
    $target: ID
    $status: Boolean
  ) {
    onCreateMatch(id: $id, sender: $sender, target: $target, status: $status) {
      id
      sender
      target
      status
    }
  }
`;
export const onUpdateMatch = /* GraphQL */ `
  subscription OnUpdateMatch(
    $id: ID
    $sender: ID
    $target: ID
    $status: Boolean
  ) {
    onUpdateMatch(id: $id, sender: $sender, target: $target, status: $status) {
      id
      sender
      target
      status
    }
  }
`;
export const onDeleteMatch = /* GraphQL */ `
  subscription OnDeleteMatch(
    $id: ID
    $sender: ID
    $target: ID
    $status: Boolean
  ) {
    onDeleteMatch(id: $id, sender: $sender, target: $target, status: $status) {
      id
      sender
      target
      status
    }
  }
`;
export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation($id: ID, $messages: [ID]) {
    onCreateConversation(id: $id, messages: $messages) {
      id
      messages
    }
  }
`;
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation($id: ID, $messages: [ID]) {
    onUpdateConversation(id: $id, messages: $messages) {
      id
      messages
    }
  }
`;
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation($id: ID, $messages: [ID]) {
    onDeleteConversation(id: $id, messages: $messages) {
      id
      messages
    }
  }
`;
export const onCreateConversationUsers = /* GraphQL */ `
  subscription OnCreateConversationUsers($userID: ID, $conversationID: ID) {
    onCreateConversationUsers(
      userID: $userID
      conversationID: $conversationID
    ) {
      userID
      conversationID
    }
  }
`;
export const onUpdateConversationUsers = /* GraphQL */ `
  subscription OnUpdateConversationUsers($userID: ID, $conversationID: ID) {
    onUpdateConversationUsers(
      userID: $userID
      conversationID: $conversationID
    ) {
      userID
      conversationID
    }
  }
`;
export const onDeleteConversationUsers = /* GraphQL */ `
  subscription OnDeleteConversationUsers($userID: ID, $conversationID: ID) {
    onDeleteConversationUsers(
      userID: $userID
      conversationID: $conversationID
    ) {
      userID
      conversationID
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage(
    $id: ID
    $createdAt: AWSDateTime
    $text: String
    $userID: ID
  ) {
    onCreateMessage(
      id: $id
      createdAt: $createdAt
      text: $text
      userID: $userID
    ) {
      id
      createdAt
      text
      userID
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage(
    $id: ID
    $createdAt: AWSDateTime
    $text: String
    $userID: ID
  ) {
    onUpdateMessage(
      id: $id
      createdAt: $createdAt
      text: $text
      userID: $userID
    ) {
      id
      createdAt
      text
      userID
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage(
    $id: ID
    $createdAt: AWSDateTime
    $text: String
    $userID: ID
  ) {
    onDeleteMessage(
      id: $id
      createdAt: $createdAt
      text: $text
      userID: $userID
    ) {
      id
      createdAt
      text
      userID
    }
  }
`;
