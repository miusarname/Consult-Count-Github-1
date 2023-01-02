import React from "react";

export function Navbar() {
  return (
    <>
      <nav class="navbar is-transparent">
        <div class="navbar-brand">
          <a class="navbar-item" href="">
            <img src="" alt="" width="112" height="28" />
          </a>
          <div
            class="navbar-burger"
            data-target="navbarExampleTransparentExample"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="/">
              Inicio
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link" href="/">
                Más links
              </a>
              <div class="navbar-dropdown is-boxed">
                <a class="navbar-item" href="#"></a>
                <a class="navbar-item" href="#pre">
                  ¿Como surgio?
                </a>
                <a class="navbar-item" href="#app">
                  Usar la aplicacion
                </a>

                <hr class="navbar-divider" />
                <a class="navbar-item" href="#">
                  Descargo de responsabilidad
                </a>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a
                    class="bd-tw-button button"
                    data-social-network="Twitter"
                    data-social-action="tweet"
                    data-social-target="#"
                    target="_blank"
                    href=""
                  >
                    <span class="icon">
                      <i class="fab fa-twitter"></i>
                    </span>
                    <span>Github</span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-primary" href="">
                    <span class="icon">
                      <i class="fas fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
