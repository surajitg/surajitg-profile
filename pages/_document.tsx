import { Html, Head, Main, NextScript } from 'next/document';
import { useEffect } from 'react';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="shortcut icon" href="img/favicon.ico" />

                <link href="css/bootstrap/bootstrap.min.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet" />
                <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" />
                <link href="css/devicons/css/devicons.min.css" rel="stylesheet" />
                <link href="css/simple-line-icons/css/simple-line-icons.css" rel="stylesheet" />
                <link href="css/style.css" rel="stylesheet" />
            </Head>
            <body id="page-top">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">
                        <span className="d-block d-lg-none  mx-0 px-0"><img src="img/logo-white.png" alt="" className="img-fluid" /></span>
                        <span className="d-none d-lg-block">
                            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/blue-profile.jpg" alt="" />
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="https://1drv.ms/w/s!AkW7cgk_mMWaiblWbhIKH6DbL_e3Fw?e=pBqTgZ">Download</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Main />
                <script src="js/jquery/jquery.min.js" defer></script>
                <script src="js/bootstrap/bootstrap.bundle.min.js" defer></script>
                <script src="js/jquery-easing/jquery.easing.min.js" defer></script>
                <script src="js/counter/jquery.waypoints.min.js" defer></script>
                <script src="js/counter/jquery.counterup.min.js" defer></script>
                <script src="js/custom.js" defer></script>
                <script src="js/startup.js" defer></script>
                <NextScript />
            </body>
        </Html>
    )
}