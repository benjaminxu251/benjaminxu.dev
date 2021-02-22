import Header from './../components/Header';

import waldo from './../images/contact images/waldo.jpg';

export default function Contact() {
    return (
        <body class="contact-body">
            <Header 
                link="./../"
                text="Contact"
            />
                <img class="contact-images" src={waldo} />
                <div class="description">
                    1-339-206-1527
                    <br/>benjaminxu251@gmail.com
                </div>
        </body>
    )
}