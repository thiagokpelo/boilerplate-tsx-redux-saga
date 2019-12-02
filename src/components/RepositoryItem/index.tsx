import React from 'react';
import { Repository } from 'store/ducks/repositories/types';

interface OwnProps {
  repository: Repository
}

type Props = OwnProps

const RepositoryItem: React.SFC<Props> = ({ repository }) => <li>{repository.name}</li>;

export default RepositoryItem;
