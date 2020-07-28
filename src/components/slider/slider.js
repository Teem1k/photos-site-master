import React, {Component} from 'react'
import "./slider.sass"
import slider from "./slider.jpg";
import GalleryService from "../../servise";
import Loader from "../loader/loader";

const service = new GalleryService();

let interval;

export default class Slider extends Component {

    state = {
        photo: false
    };

    componentDidMount() {
        this.getPhoto();
        // interval = setInterval(() => this.getPhoto(), 10000);
    }

    componentWillUnmount() {
        clearInterval(interval)
    }

    getPhoto = () => {
        service.getRandomPhoto()
            .then(photo => this.setState({photo}))
    };

    render() {
        const { photo } = this.state;

        if( !photo ) return <Loader/>;

        return(
            <div className="slider" style={{"backgroundImage": `url(${photo.urls.regular})`}}></div>
        )
    }
}