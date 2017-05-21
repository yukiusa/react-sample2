/**
 * Layout
 * @author yukiusa
 */
import React from "react";
import Header from "../components/Header";
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import RaisedButton from "material-ui/RaisedButton"
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme"

export default class Layout extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div>
                    <Header />
                    <RaisedButton label="Default" />
                </div>
            </MuiThemeProvider>
        )
    }
}