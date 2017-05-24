/**
 * Layout
 * @author yukiusa
 */
import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import MyNavi from "../components/MyNavi";

export default class Archives extends React.Component {
    render() {
        console.log(this.props);
        const id = this.props.match.params.id;
        return (
            <div>
                <Header />
                <MyNavi />
                <h1>About({id})</h1>
                <Body />
            </div>
        )
    }
}