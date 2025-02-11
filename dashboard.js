
// JavaScript to insert the header and footer
 const header = document.getElementById('header');
 header.innerHTML = `
 <header>
      <div class="all">

              <a href="https://savings.kolomoni.ng/account"><img src="kolo-white-1.svg" class="img"></a>
              
              <div class="menu_bar">
                <i class="fa-solid fa-bars" id='show_menu'></i>
                 <p class="hide_menu" id="hide_menu">X</p>
                </div>

              <div id="nav_item"  class="nav-item">
                <a href="dashboard.html" class="nav-link">DASHBOARD</a>
                <a href="transact.html"  class="nav-link">TRANSACTIONS</a>
                <a href="fund-request.html" class='nav-link'>FUND REQUESTS</a>
                <div class="content">
                <a class='nav-link'>SERVICES <i class="fa-solid fa-chevron-down"></i></a>
                     <div class="dropdown">
                       <ul class="drop">
                        <li><a href="https://savings.kolomoni.ng/account/services/transfers">Transfer</a></li>
                        <li><a href="https://savings.kolomoni.ng/account/services/airtime">Airtime</a></li>
                        <li><a href="https://savings.kolomoni.ng/account/services/data">Data Subscription</a></li>
                        <li><a href="https://savings.kolomoni.ng/account/services/cable-tv">Cable TV</a></li>
                        <li><a href="https://savings.kolomoni.ng/account/services/utility">Utility & Bill Payments</a></li>
                       </ul>  
                      </div>    
              </div>
                <a href="loan.html" class='nav-link'>LOANS</a>
              </div>
            </div>
             

             <div class="user">
              <div class="drop-bell">
               <a class="links"><i class="fa-regular fa-bell"></i></a>
               <div class="dropdown-bell">
                <p>Notifications{0}</p>
                <div class="line-container">
                <hr class="lineone">
                <hr class="lineone">
                <a  href="https://savings.kolomoni.ng/account/notifications">See all Notifications</a>
               </div>
              </div>
             </div>
             <div class="my-profile">
              <a><img src="default-avatar.png" class="imge"></a>
              <div class="my-profile-dropdown">
              <p style="text-align: center; font-size: 15px">Hi,MUHYIDEEN<br>
                  MUHAMMAD</p>
                  <div class="profiles">
                 <li><a href="https://savings.kolomoni.ng/account/profile/index"><i class="fa-solid fa-user"></i><span>My Profile</span></a></li>
                 <li><a href="https://savings.kolomoni.ng/account/profile/security"><i class="fa-solid fa-shield-halved"></i>My Security</a></li>
                 <li><a href="https://savings.kolomoni.ng/account/profile/payment-methods"><i class="fa-solid fa-credit-card"></i>Payment Methods</a></li>
                 <li><a href="https://savings.kolomoni.ng/logout"> <i class="fa-solid fa-right-from-bracket"></i>Sign Out</a></li>
                </div>
            </div>
            </div>
              </div>
    
        </header>
`;

const currentLocation = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
      if (link.getAttribute("href") === currentLocation) {
        link.classList.add("active");
      }
    });


    const show =document.getElementById("show_menu");
    const hide = document.getElementById("hide_menu");
    const nav= document.getElementById("nav_item");

    show.addEventListener('click', function(){
    hide.style.display="block";
    show.style.display="none";
    nav.style.display="flex";
  
    })
    hide.addEventListener('click', function(){
    hide.style.display="none";
    show.style.display="block";
    nav.style.display="none";
    })








document.getElementById('footer').innerHTML = `
<footer>
      <div class="icons">
       <a href="http://www.facebook.com/kolomoni"><i class="fa-brands fa-facebook-f"></i></a> 
        <a href=" http://www.twitter.com/kolomoni"><i class="fa-brands fa-twitter"></i></a> 
          <a href="http://www.google.com/kolomoni"><i class="fa-brands fa-google"></i></a>  
            <a href="http://www.youtube.com/kolomoni"><i class="fa-brands fa-youtube"></i></a>
      </div>
      <hr class='line'>
      <div class="down">
      <p class="break">Copyright © 2024 <a href="https://savings.kolomoni.ng/account#" class="kol">KoloMoni</a> All Rights Reserved. Powered by<a href="https://capitalsage.ng/" class="kol"> CapitalSage</a></p>
      <div class="Terms">
      <a href="https://savings.kolomoni.ng/account#">Terms</a>
      <a href="https://savings.kolomoni.ng/account#">Privacy</a>
    </div>
      </div>
      </footer>
`;


