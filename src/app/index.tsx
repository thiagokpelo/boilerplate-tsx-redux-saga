import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import RepositoryList from 'components/RepositoryList';
import { Header, Logo, Wrapper } from './styles';
import logo from './logo.svg';

const App: React.FC = () => (
  <Provider store={store}>
    <Wrapper>
      <Header>
        <Logo src={logo} className="App-logo" alt="logo" />
        <RepositoryList />
      </Header>
    </Wrapper>
  </Provider>
);

export default App;
