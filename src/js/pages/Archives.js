/**
 * Layout
 * @author yukiusa
 */
import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
export default class Archives extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <h1>Archives</h1>
                <Body />
            </div>
        )
    }
}