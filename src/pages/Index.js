import Icon from './../Icon';

import beacon from './../images/homepage images/beacon.jpg'
import birb from './../images/homepage images/birb.jpg';
import cavern from './../images/homepage images/cavern.jpg';
import eyos from './../images/homepage images/eyos.jpg';
import portal from './../images/homepage images/portal.jpg';
import shimzar from './../images/homepage images/shimzar.jpg';

export default function Index(){
    return(
        <div>
            <header>
                <a href="..dev/"><h1 class="page-title">Benjamin Xu</h1></a>
                <p class="page-description">Hey welcome</p>
            </header>

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

            <nav>
                <a href="https://www.artstation.com/shant"/><div class="contact-btn">Icon Art</div>
                <a href="https://github.com/benjaminxu251"/><div class="contact-btn">Github</div>
                <a href="https://www.linkedin.com/in/bxu/"/><div class="contact-btn">LinkedIn</div>
                <a href="mailto:benjaminxu251@gmail.com"/><div class="contact-btn">Email</div>
                <a href="tel:1 (339) 206-1527"/><div class="contact-btn">Phone</div>
            </nav>
        </div>
    )
}