import React from 'react'
import { Fragment } from 'react';
import MianNavigation from './main-navigation';

function Layout(props) {
    return (
        <Fragment>
            <MianNavigation />
            <main >{props.children}</main>

        </Fragment>
    )
}

export default Layout;
