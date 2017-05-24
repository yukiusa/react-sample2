/**
 * MyNavi
 * @author yukiusa
 */
import React from "react";
import Navigation from "react-toolbox/lib/navigation";
import {Button, IconButton} from 'react-toolbox/lib/button';
import {Link} from "react-router-dom";

export default class MyNavi extends React.Component {
    render() {
        return (
            <div>
               <Navigation type='horizontal'>
                   <Link to="/" ><Button icon={<i class="material-icons md-48">home</i>} accent /></Link>
                   <Link to="/about/フリーランスのシステム屋"><Button icon={<i class="material-icons md-48">face</i>} accent /></Link>
                   <Link to="/about/※食用ではございません"><Button icon={<i class="material-icons md-48">error</i>} accent /></Link>
                   <Link to="/feature"><Button icon={<i class="material-icons md-48">input</i>} accent /></Link>
               </Navigation>
               <hr/>
            </div>
        );
    }
}
