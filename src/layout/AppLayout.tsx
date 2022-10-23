import AppHeader from "./AppHeader"
import AppFooter from "./AppFooter"

const AppLayout = (props: any) => {

    return (
        <>
            <AppHeader />
            {props.children}
            <AppFooter />
        </>
    )
}

export default AppLayout