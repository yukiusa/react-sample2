/**
 * Layout
 * @author yukiusa
 */
import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import MyNavi from "../components/MyNavi";
export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <MyNavi />
                <h1>Home</h1>
                <Body />
            </div>
        )
    }
}