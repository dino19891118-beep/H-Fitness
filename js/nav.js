customElements.define('nav-bar', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="nav-zone">
                <div class="logo img-container">
                    <a href="#home" target="_self" class="link-to-home">
                    <img src="../wwwroot/img/logo/cooseii-logo.svg" alt="cooseii-logo" class="logo-img">
                    </a>
                </div>
                <ul class="menu-zone">
                    <li class="pointer menu-container">
                        <div class="about-us">
                            <div class="title-box">
                                <a href="#">
                                    <span class="title-3xs w4">關於我們</span>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li class="pointer menu-container">
                        <div class="creation">
                            <div class="title-box">
                                <a href="#">
                                    <span class="title-3xs w4">創作</span>
                                </a>
                                <i class="fa-solid fa-angle-down icon-control"></i>
                            </div>
                            
                            <div class="list">
                                <ul class="options-container">
                                    <li class="option">
                                        <a href="#">
                                            <span class="title-3xs w4 text">手稿</span>
                                        </a>
                                    </li>
                                    <li class="option">
                                        <a href="#">
                                            <span class="title-3xs w4 text">共創</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="pointer menu-container">
                        <div class="inf">
                            <div class="title-box">
                                <a href="#">
                                    <span class="title-3xs w4">社會影響力</span>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li class="pointer menu-container">
                        <div class="partner">
                            <div class="title-box">
                                <a href="#">
                                    <span class="title-3xs w4">成為合作夥伴</span>
                                </a>
                                <i class="fa-solid fa-angle-down icon-control"></i>
                            </div>
                            <div class="list">
                                <ul class="options-container">
                                    <li class="option">
                                        <a href="#">
                                            <span class="title-3xs w4 text">NGO共創計畫</span>
                                        </a>
                                    </li>
                                    <li class="option">
                                        <a href="#">
                                            <span class="title-3xs w4 text">成為駐站設計師</span>
                                        </a>
                                    </li>
                                    <li class="option">
                                        <a href="#">
                                            <span class="title-3xs w4 text">企業客製方案</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="pointer menu-container event">
                        <div class="event">
                            <div class="title-box">
                                <a href="#">
                                    <span class="title-3xs w4">活動</span>
                                </a>
                                <i class="fa-solid fa-angle-down icon-control"></i>
                            </div>
                            <div class="list">
                                <ul class="options-container">
                                    <li class="option">
                                        <a href="#">
                                            <span class="title-3xs w4 text">票選活動</span>
                                        </a>
                                    </li>
                                    <li class="option">
                                        <a href="#">
                                            <span class="title-3xs w4 text">設計師共創</span>
                                        </a>
                                    </li>
                                    <li class="option">
                                        <a href="#">
                                            <span class="title-3xs w4 text">SROI研習營</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>                        
                    </li> 
                    <li class="pointer menu-container">
                        <div class="blog">
                            <div class="title-box">
                                <a href="#">
                                    <span class="title-3xs w4">BLOG</span>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="icons-container">
                    <div class="member-btn pointer">
                        <i class="fa-solid fa-user-large icon-control"></i>
                    </div>
                    <div class="cart-btn pointer">
                        <i class="fa-solid fa-cart-shopping icon-control"></i>
                    </div>
                    
                    <div class="menu-btn pointer">
                        <div class="close svg-container">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.573303 0.499704C1.02073 0.054511 1.74435 0.0563246 2.18954 0.503755L8.16797 6.51222L14.1464 0.503755C14.5916 0.0563246 15.3152 0.054511 15.7626 0.499704C16.2101 0.944898 16.2119 1.66851 15.7667 2.11594L9.78018 8.13253L15.8353 14.218C16.2804 14.6655 16.2786 15.3891 15.8312 15.8343C15.3838 16.2795 14.6602 16.2777 14.215 15.8302L8.16797 9.75284L2.12097 15.8302C1.67578 16.2777 0.952162 16.2795 0.504732 15.8343C0.0573011 15.3891 0.0554876 14.6655 0.500681 14.218L6.55576 8.13253L0.569252 2.11594C0.124059 1.66851 0.125872 0.944898 0.573303 0.499704Z" fill="w"/>
                            </svg>
                        </div>
                        <i class="fa-solid fa-bars icon-control"></i>
                    </div>
                </div>
                    
            </nav>
        `;
    }
});
//<i class="fa-solid fa-xmark"></i>
//(function(){})();


