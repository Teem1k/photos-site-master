import React, {Component} from 'react'
import "./home_page.sass"
import Slider from "../../slider/slider";
import GalleryList from "../../gallery-list/gallery-list";

export default class HomePage extends Component {
    render() {
        return(
            <>
                <Slider/>
                <GalleryList/>
            </>
        )
    }
}