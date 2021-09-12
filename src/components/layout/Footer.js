import styling from '../../styles/layout/Footer.module.css';
import {Icon} from '@iconify/react';

function Footer(){
    return (
        <footer className={styling.footer}>
            <div className={styling.container}>

                <section className={styling.rightContainer}>
                    <h3>ON THE MOVE (LTD)</h3>
                    <h4><Icon/>Visit Help Center</h4>
                    <h4><Icon/>Follow Us on Twitter</h4>
                    <h4><Icon/>Like Our Page on Facebook</h4>
                    <h4><Icon/>Follow Us on Instagram</h4>
                    <h4><Icon/>Connect With Us on LinkedIn</h4>
                </section>

                <section className={styling.leftContainer}>
                    <h3>ON THE MOVE (LTD)</h3>
                    <h4><Icon/>Visit Help Center</h4>
                    <h4><Icon/>Follow Us on Twitter</h4>
                    <h4><Icon/>Like Our Page on Facebook</h4>
                    <h4><Icon/>Follow Us on Instagram</h4>
                    <h4><Icon/>Connect With Us on LinkedIn</h4>
                </section>
            </div>
        </footer>
    );
}

export default Footer;