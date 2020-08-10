import React from 'react';
import { TodoList } from './components/TodoList/TodoList';
import { TodoInfo } from './components/TodoInfo/TodoInfo';
import { UserInfo } from './components/UserInfo/UserInfo.';
import { User } from './components/User/User';

const App = () => (
  <main className="App">
    <section>
      <TodoInfo />
      <UserInfo />
    </section>
    <section>
      <TodoList />
      <User />
    </section>
  </main>
);

export default App;
