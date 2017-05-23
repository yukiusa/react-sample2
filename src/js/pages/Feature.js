/**
 * Layout
 * @author yukiusa
 */
import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
export default class Feature extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <h1>Feature</h1>
                <Body />
            </div>
        )
    }
}