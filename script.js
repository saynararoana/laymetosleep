			/* Tornar o menu fixo */
            var menu = document.getElementById("menu");
            var origOffsetY = menu.offsetTop;
            document.addEventListener("scroll", fixedMenu);

            function fixedMenu(e) {
				if (window.scrollY >= origOffsetY) {
        			menu.style.position = "fixed";
        			menu.style.top = "0px"
        			menu.style.left = "0px"
    			} else {
        			menu.style.position = "relative";
        			menu.style.top = "0px";
        			menu.style.left = "0px";
    			}
			}

			/* Smooth scroll para anchor point */
			document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	    		anchor.addEventListener('click', function (e) {
	        		e.preventDefault();

	        		document.querySelector(this.getAttribute('href')).scrollIntoView({
	            		behavior: 'smooth'
	        		});
	    		});
			});

			/* Modal Boxes */
			var aboutModal = document.getElementById("aboutModal");
			var showAbout = document.getElementById("aboutModal-btn");
			var contactModal = document.getElementById("contactModal");
			var showContact = document.getElementById("contactModal-btn");
			var closeAbout = document.getElementById("closeAbout");
			var closeContact = document.getElementById("closeContact");

			showAbout.onclick = function() {
			    aboutModal.style.display = "block";
			}
			showContact.onclick = function() {
			    contactModal.style.display = "block";
			}
			closeAbout.onclick = function() {
			    aboutModal.style.display = "none";
			}
			closeContact.onclick = function() {
			    contactModal.style.display = "none";
			}