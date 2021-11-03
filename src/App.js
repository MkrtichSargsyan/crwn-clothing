import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header.component';
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/ShopPage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
      console.log(this.state);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route path={'/signin'} component={SignInAndSignUp}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
