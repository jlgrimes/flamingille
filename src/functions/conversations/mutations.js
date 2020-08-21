// when two users match, they will both be added in the conversationUsers table
const addConversationUsersEntries = async (userID1, userID2) => {
  [userID1, userID2].forEach((user) => {
    console.log(user);
  });
};

export { addConversationUsersEntries };
