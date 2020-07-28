import React, { Component } from 'react';
import UserProfile from "../../user-profile/userProfile";
import GalleryList from "../../gallery-list/gallery-list";

export default class UserPage extends Component{
    render() {
        return(
            <>
                <UserProfile {...this.props}/>
                <GalleryList id={this.props.userName} typeRes={this.props.typeRes}/>
            </>
        )
    }
}