export default function Hobbies() {
    return (
        <div>
            <head>
                <title>Hobbies</title>
                <meta charset="utf-8" />
                <link href='https://fonts.googleapis.com/css?family=Lato:400,300,100,700,900' rel='stylesheet' type='text/css' />
                <link rel="stylesheet" type="text/css" href="main.css" />
            </head>

            <body>
                <header>
                    <a href="./../"><h1 class="page-title">Benjamin Xu</h1></a>
                    <p class="page-description">Hobbies</p>
                </header>

                <div class="gallery">
                    <div class="category watercolor-1">
                        <div class="category-title">Card Games (CCGs)</div>
                        <div class="category-image space-1">
                            <img src="hobbies images/dec2016.jpg" width="140" height="240" />
                            <img src="hobbies images/mar2017.jpg" width="140" height="240" />
                        </div>
                        <div class="category-description">Top ranking player and deck-innovater in Duelyst</div>
                    </div>
                    <div class="category watercolor-2">
                        <div class="category-title">Autobattlers</div>
                        <a href="https://lolchess.gg/profile/na/d3mon/s3">
                            <img src="hobbies images/tft.jpg" />
                            <u>Main Account</u>
                        </a>
                        <img src="hobbies images/hsbg.png" width="156" height="245" />
                Half-decent at Hearthstone Battlegrounds
            </div>
                </div>
                <div class="category watercolor-3">
                    <div class="category-title">Baking</div>
                    <div class="category-image space-1"><img src="hobbies images/Slutty Brownies.jpg" width="200" height="200" /></div>
                    <div class="category-description">Usually bake cookies or slutty brownies, but open to new recipes</div>
                </div>
            </body>
        </div>
    )
}