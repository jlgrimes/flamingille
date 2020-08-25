const screenNames = Object.freeze({
  completeProfile: 'Complete Profile',
  conversations: 'Conversations',
  conversation: 'Conversation',
  home: 'Home',
  login: 'Login',
  profile: 'Profile',
  settings: 'Settings',
  signUpCode: 'Sign Up Code',
  signUp: 'Sign Up',
});

const screenIcons = Object.freeze({
  Conversations: {
    filled: 'chatbubble',
    outline: 'chatbubble-outline',
  },
  Home: {
    filled: 'home',
    outline: 'home-outline',
  },
  Settings: {
    filled: 'settings',
    outline: 'settings-outline',
  },
  Profile: {
    filled: 'person',
    outline: 'person-outline',
  },
});

export { screenNames, screenIcons };
