/**
 * Header * @author yukiusa
 */
import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {AppBar,Tabs, Tab,ToolbarGroup} from 'material-ui';

export default class Header extends React.Component {
    render() {
        return (
                <AppBar title="ゆきうさラボ"
                        iconElementRight={<ToolbarGroup ></ToolbarGroup>}>
                </AppBar>
        );
    }
}
