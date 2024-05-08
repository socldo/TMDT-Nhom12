import Header from "../HeaderComponent/Header";

function DefaultComponent ({children}) {
    return (
        <>
            <Header/>
            {children}
        </>
    );
}
export default DefaultComponent;