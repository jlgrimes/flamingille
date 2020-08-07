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
