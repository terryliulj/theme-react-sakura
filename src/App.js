import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import {GlobalStyle} from "./style";
import store from "./store";
import {Provider} from 'react-redux';
import Header from "./common/header";
import Footer from "./common/footer";
import Home from './page/home';
import Article from "./page/article";
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <GlobalStyle/>
                    <Header/>
                    <Route path='/' exact component={Home}/>
                    <Route path='/article/:id' exact component={Article}/>
                    <Footer/>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;
