import AppHeader from "./AppHeader"
import AppFooter from "./AppFooter"

const AppLayout = (props) => {

    return (
        <>
            <AppHeader />
            {props.children}
            <AppFooter />
        </>
    )
}

export default AppLayout