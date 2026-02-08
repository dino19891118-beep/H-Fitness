customElements.define('nav-bar', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="nav-zone">
                <div class="top-color">
                </div>
                <div class="nav-container">
                    <div class="logo img-container">
                        <a href="#home" target="_self" class="link-to-home">
                            <img src="./asset/img/Logo.svg" alt="cooseii-logo" class="logo-img">
                        </a>
                    </div>
                    <ul class="menu-zone">
                        <li class="pointer menu-container">
                            <div class="contact-us menu-box">
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdZvNxOLrwkJHW-TL10Jy8OgJmbUMLSzs3js0GMeY5PPpjsEg/viewform" target="_blank" class="menu-title-link contact">
                                        <div class="ani"></div>
                                        <i class="fa-solid fa-comment-dots"></i>
                                        <span class="menu-title-text">聯絡我們</span>
                                    </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        `;
    }
});
//<i class="fa-solid fa-xmark"></i>
//(function(){})();


