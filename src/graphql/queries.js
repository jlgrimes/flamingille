/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      name
      description
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: TableUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        name
        description
      }
      nextToken
    }
  }
`;
export const getMatch = /* GraphQL */ `
  query GetMatch($id: ID!) {
    getMatch(id: $id) {
      id
      sender
      target
      status
    }
  }
`;
export const listMatches = /* GraphQL */ `
  query ListMatches(
    $filter: TableMatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMatches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sender
        target
        status
      }
      nextToken
    }
  }
`;
export const getConversationUsers = /* GraphQL */ `
  query GetConversationUsers($conversationID: ID!) {
    getConversationUsers(conversationID: $conversationID) {
      conversationID
      userID
    }
  }
`;
export const listConversationUsers = /* GraphQL */ `
  query ListConversationUsers(
    $filter: TableConversationUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversationUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        conversationID
        userID
      }
      nextToken
    }
  }
`;
export const getConversation = /* GraphQL */ `
  query GetConversation($id: ID!) {
    getConversation(id: $id) {
      id
      messages
    }
  }
`;
export const listConversations = /* GraphQL */ `
  query ListConversations(
    $filter: TableConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        messages
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      senderUser
      content
      timestamp
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: TableMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        senderUser
        content
        timestamp
      }
      nextToken
    }
  }
`;
