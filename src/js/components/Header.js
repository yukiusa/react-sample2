/**
 * Header * @author yukiusa
 */
import React from "react";
import MyAppBar from "./MyAppBar"
import { Button } from 'react-toolbox/lib/button'; // Bundled component import


export default class Header extends React.Component {
    render() {

        return (
            <div>
                <MyAppBar />
            </div>
        );
    }
}
