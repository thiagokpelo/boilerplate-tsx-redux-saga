/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-non-null-assertion */
import Reactotron from 'reactotron-react-js';
import sagaPlugin from 'reactotron-redux-saga';

Reactotron.configure({ name: 'Repositories' })
  .use(sagaPlugin({ except: [] }))
  .connect();

const sagaMonitor = Reactotron.createSagaMonitor!();

Reactotron.log!('hello rendering world');

export { sagaMonitor };
