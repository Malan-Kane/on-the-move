import MainNav from "./MainNav";
import Footer from "./Footer";
import styling from '../../styles/layout/Layout.module.css';

function Layout(props){
    return <div>
        <MainNav/>
        <main className={styling.main}>
            {props.children}
        </main>
        <Footer/>
    </div>;
}

export default Layout;