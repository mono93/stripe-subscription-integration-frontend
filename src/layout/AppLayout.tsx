import { Fragment } from "react";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

const AppLayout = (props: any) => {

    return (
        <Fragment>
            <AppHeader />
            {props.children}
            <AppFooter />
        </Fragment>
    )
}

export default AppLayout