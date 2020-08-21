import { createMatch } from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';

const addMatch = async (sender, target) => {
  const match = {
    sender: sender.id,
    target: target.id,
    status: true,
  };

  const res = await API.graphql(
    graphqlOperation(createMatch, { input: match }),
  );

  return res;
};

export { addMatch };