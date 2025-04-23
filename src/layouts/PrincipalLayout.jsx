import  Footer  from "../components/Footer"
import  Header  from "../components/Header"
import PropTypes from "prop-types"

export const PrincipalLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main>
            {children}
            </main>
            <Footer/>
        </div>
    )
}
PrincipalLayout.propTypes = {
    children: PropTypes.node.isRequired
}