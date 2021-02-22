import Header from './../components/Header';

export default function Now() {
    return (
        <body class="now-body">
            <Header
                link="./../"
                text="Now"
            />
            <div class="description">
                <p>Grateful to have found another internship amidst chaos. Moved across the country during a pandemic. AFK during winter break.</p>
                <p>Recently quit TFT</p>
                <p>
                    <u><a href="https://lolchess.gg/profile/na/d3mon/s3">Main Account</a></u>
                    <u><a href="https://lolchess.gg/profile/na/froshbite/s3">Smurf Account</a></u>
                </p>
                <div class="images">
                    <img src="https://cdn.discordapp.com/attachments/176036957804167169/705807544123392090/unknown.png">
                    </img>
                </div>
            </div>
        </body>
    )
}