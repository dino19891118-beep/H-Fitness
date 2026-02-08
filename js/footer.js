customElements.define('footer-zone', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer-zone">
                <div class="footer-container">
                    <div class="top">
                        <div class="left logo img-container">
                            <img src="./asset/img/Logo-white.svg" class="logo img-controller">
                        </div>
                        <div class="right">
                            <div class="info-zone">
                                <div class="time-zone">
                                    <p class="title">營業時間</p>
                                    <div class="container">
                                        <div class="box">
                                            <p class="date">平日&nbsp;&nbsp;Mon&nbsp;~&nbsp;Fri</p>
                                            <p class="time">09:00&nbsp;~&nbsp;20:00</p>
                                        </div>
                                        <div class="box">
                                            <p class="date">週六&nbsp;&nbsp;Sat</p>
                                            <p class="time">09:00&nbsp;~&nbsp;17:00</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="set">
                                    <div class="phone item">
                                        <p class="title">電話</p>
                                        <p class="text phone">02&nbsp;2822&nbsp;6798</p>
                                    </div>
                                    <div class="address item">
                                        <p class="title">地址</p>
                                        <p class="text">台北市石牌區石牌路一段66號</p>
                                    </div>
                                </div>
                            </div>
                            <div class="social-zone">
                                <p class="title">社群聯繫</p>
                                <div class="container">
                                    <a href="https://www.instagram.com/hplus.fitness?igsh=MXV3ZTQwYTl2eGQycw%3D%3D&utm_source=qr" class="icon-box ig" target="_blank">
                                        <i class="fa-brands fa-instagram"></i>
                                    </a>
                                    <a href="https://www.facebook.com/people/H-Fitness-%E9%81%8B%E5%8B%95%E7%A9%BA%E9%96%93/61580422821292/#" class="icon-box fb" target="_blank">
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a href="https://line.me/R/ti/p/@238lrwmm?oat_content=qr" class="icon-box line" target="_blank">
                                    <i class="fa-brands fa-line"></i>
                                    </a>
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdZvNxOLrwkJHW-TL10Jy8OgJmbUMLSzs3js0GMeY5PPpjsEg/viewform" class="icon-box google" target="_blank">
                                        <i class="fa-brands fa-google"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bottom">
                        <span class="term">
                            PRIVACY POLICY. COPYRIGHT © H+FINESS 運動空間
                        </span>
                    </div>
                </div>
            </footer>
        `;
    }
});