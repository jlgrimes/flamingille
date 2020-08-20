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
export const onCreateConversationUsers = /* GraphQL */ `
  subscription OnCreateConversationUsers(
    $conversationID: ID
    $senderUserID: ID
    $targetUserID: ID
  ) {
    onCreateConversationUsers(
      conversationID: $conversationID
      senderUserID: $senderUserID
      targetUserID: $targetUserID
    ) {
      conversationID
      senderUserID
      targetUserID
    }
  }
`;
export const onUpdateConversationUsers = /* GraphQL */ `
  subscription OnUpdateConversationUsers(
    $conversationID: ID
    $senderUserID: ID
    $targetUserID: ID
  ) {
    onUpdateConversationUsers(
      conversationID: $conversationID
      senderUserID: $senderUserID
      targetUserID: $targetUserID
    ) {
      conversationID
      senderUserID
      targetUserID
    }
  }
`;
export const onDeleteConversationUsers = /* GraphQL */ `
  subscription OnDeleteConversationUsers(
    $conversationID: ID
    $senderUserID: ID
    $targetUserID: ID
  ) {
    onDeleteConversationUsers(
      conversationID: $conversationID
      senderUserID: $senderUserID
      targetUserID: $targetUserID
    ) {
      conversationID
      senderUserID
      targetUserID
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage(
    $id: ID
    $senderUser: ID
    $content: String
    $timestamp: AWSDateTime
  ) {
    onCreateMessage(
      id: $id
      senderUser: $senderUser
      content: $content
      timestamp: $timestamp
    ) {
      id
      senderUser
      content
      timestamp
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage(
    $id: ID
    $senderUser: ID
    $content: String
    $timestamp: AWSDateTime
  ) {
    onUpdateMessage(
      id: $id
      senderUser: $senderUser
      content: $content
      timestamp: $timestamp
    ) {
      id
      senderUser
      content
      timestamp
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage(
    $id: ID
    $senderUser: ID
    $content: String
    $timestamp: AWSDateTime
  ) {
    onDeleteMessage(
      id: $id
      senderUser: $senderUser
      content: $content
      timestamp: $timestamp
    ) {
      id
      senderUser
      content
      timestamp
    }
  }
`;
