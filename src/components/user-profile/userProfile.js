import React, { Component } from 'react';
import GalleryService from "../../servise";
import './user-profile.sass'

const servise = new GalleryService();

export default class UserProfile extends Component{
    state = {
        userData: false
    };

    componentDidMount() {
        servise.getUserProfile(this.props.userName)
            .then((data) => {
                this.setState({
                    userData: data
                })
            })
    }

    render() {
        const{ userData } = this.state;

        if (userData === false) return <div>loading...</div>;

        return(
            <div className={"user-wrapper"}>
                <div className={"user-info"}>
                    <div className={"profile-image"} style={{"backgroundImage": `url(${userData.profile_image.large})`}}>
                    </div>
                    <div className={'user-names'}>
                        <h2>{userData.name}</h2>
                        <h4>@{userData.instagram_username}</h4>
                        <p>{userData.bio}</p>
                    </div>
                </div>
            </div>
        )
    }
}