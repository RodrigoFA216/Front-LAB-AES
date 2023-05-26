import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4 sticky-sm-top">
          <div class="container-fluid">
            <Link className='navbar-brand' href="/">AES-Stega</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link className='nav-link' href="/">Home</Link>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">Encryptor</a>
                  <div class="dropdown-menu  bg-primary" data-bs-popper="static">
                    <Link className='nav-link' href="/encrypt">
                      <div className='container'>
                        Encrypt
                      </div>
                    </Link>
                    <div class="dropdown-divider"></div>
                    <Link className='nav-link' href="/decrypt">
                      <div className='container'>
                        Decrypt
                      </div>
                    </Link>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">Steganographer</a>
                  <div class="dropdown-menu  bg-primary" data-bs-popper="static">
                    <Link className='nav-link' href="/hide">
                      <div className='container'>
                        Hide Color
                      </div>
                    </Link>
                    <div class="dropdown-divider"></div>
                    <Link className='nav-link' href="/unhide">
                      <div className='container'>
                        Unhide color
                      </div>
                    </Link>
                  </div>
                </li>
                <li class="nav-item">
                  <Link className='nav-link' href="/funcionamiento">Funcionamiento</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='container mb-4'>
          <Main />
          <NextScript />
        </div>
        {/* <div className='foother text-white bg-dark'>
          Something
        </div> */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>

      </body>
    </Html>
  )
}
