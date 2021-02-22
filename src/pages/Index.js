import './../css/Index.css'

import Icon from './../components/Icon';
import Navbar from './../components/Navbar';
import Header from './../components/Header';

import beacon from './../images/homepage images/beacon.jpg'
import birb from './../images/homepage images/birb.jpg';
import cavern from './../images/homepage images/cavern.jpg';
import eyos from './../images/homepage images/eyos.jpg';
import portal from './../images/homepage images/portal.jpg';
import shimzar from './../images/homepage images/shimzar.jpg';

export default function Index(){
    return(
        <div class="index-body">
            <Header
                link="./"
                text="Hey welcome"
            />

            <div class="gallery">
                <Icon
                    link="./about/"
                    image={eyos}
                    text="About"
                />
                <Icon
                    link="./work/"
                    image={shimzar}
                    text="Work"
                />
                <Icon
                    link="./projects/"
                    image={beacon}
                    text="Projects"
                />
                <Icon
                    link="./hobbies/"
                    image={birb}
                    text="Hobbies"
                />
                <Icon
                    link="./contact/"
                    image={portal}
                    text="Contact"
                />
                <Icon
                    link="./now/"
                    image={cavern}
                    text="Now"
                />
            </div>
            <Navbar/>
        </div>
    )
}