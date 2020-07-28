import React, {Component} from 'react';
import "./app.sass"
import GalleryList from "../gallery-list/gallery-list";
import Header from "../header/header";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import HomePage from "../pages/home-page/home-page";
import PhotoCard from "../photo-card/photo-card";
import UserPage from "../pages/user-page/user-page";

class App extends Component {

    state = {
        error: false,
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    }

    render(){
        const { error } = this.state;

        if(error) return <div className={"error"}>Something went wrong.... :(</div>;

        return (
            <div className="app">
                <Router>
                    <Header/>
                    <Switch>
                        <Route
                            path={"/"}
                            render={ () => {
                                return <HomePage/>
                            }}
                            exact
                        />
                        <Route
                            path={"/all/"}
                            render={ () => {
                                return <HomePage/>
                            }}
                            exact
                        />
                        <Route
                            path={"/animal/:id"}
                            render={ ({match}) => {
                                return <GalleryList typeRes={"collections"} id={match.params.id} />
                            }}
                            exact
                        />
                        <Route
                            path={"/photo/:id"}
                            render={ ({ match, location, history }) => {
                                return <PhotoCard id = {match.params.id} history={history}/>
                            }}
                            exact
                        />
                        <Route
                            path={"/films/:id"}
                            render={ ({match}) => {
                                return <GalleryList typeRes={"collections"} id={match.params.id} />
                            }}
                            exact
                        />
                        <Route
                            path={'/user/:userName'}
                            render={ ({match}) => {
                                return <UserPage typeRes={"users"} userName={match.params.userName}/>
                            } }
                            exact
                        />
                        <Route
                            path={"/food&drink/:id"}
                            render={ ({match}) => {
                                return <GalleryList typeRes={"collections"} id={match.params.id} />
                            }}
                            exact
                        />
                        <Route
                            path={"/nature/:id"}
                            render={ ({match}) => {
                                return <GalleryList typeRes={"collections"} id={match.params.id} />
                            }}
                            exact
                        />
                        <Route
                            path={"/login/"}
                            render={ () => {
                                const login = false;
                                if(!login) return <Redirect to={"/all/"} />;
                                return <div>Some important content</div>
                            }}
                            exact
                        />
                        <Route
                            render={ () => {
                                return <h2>Page Not Found</h2>
                            }}
                            exact
                        />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
