gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 3,            // Smoothness (higher is slower)
  effects: true,          // Enable data-speed & data-lag
});


let isShortHeight = window.screen.height < 1050;  // this is only tp make animation acccording to screen height but not requrired.. 
// you can remove or change this value according to your requrement
// console.log(window.screen.height);

ScrollTrigger.matchMedia({
  "(min-width: 991px)": function () {

    gsap.to('#headphone', {
      scrollTrigger: {
        trigger: '#section2',
        start: 'top bottom',
        end: 'center center',
        scrub: true,
      },
      y: '100vh',
      x: '10vw',
      width: '30vw',
      rotate: 0,
      ease: 'power1.inOut',
      immediateRender: false
    });

    gsap.to('#headphone', {
      scrollTrigger: {
        trigger: '#section3',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
      },
      y: '250vh',
      x: '6vw',
      width: '30vw',
      rotate: 0,
      ease: 'power1.inOut',
      immediateRender: false
    });

    gsap.to('#headphone', {
      scrollTrigger: {
        trigger: '#section4',
        start: 'top bottom',
        end: 'center center',
        scrub: true,
      },
      y: '350vh',
      x: '-20vw',
      width: '42vw',
      rotate: 0,
      ease: 'power1.inOut',
      immediateRender: false
    });

    //  gsap.to('#headphone', {
    //   scrollTrigger: {
    //     trigger: '#section5',
    //     start: 'top bottom',
    //     end: 'center bottom',
    //     scrub: true,
    //   },
    //   y: isShortHeight ? '360vh' : '344vh',
    //   width: '28vw',
    //   ease: 'power1.inOut',
    //   immediateRender: false
    // });

    // gsap.to('#headphone', {
    //   scrollTrigger: {
    //     trigger: '#section5',
    //     start: 'center bottom',
    //     end: 'bottom bottom',
    //     scrub: true,
    //   },
    //   y: isShortHeight ? '432vh' : '419vh',
    //   width: '300px',
    //   ease: 'power1.inOut',
    //   immediateRender: false
    // });

    gsap.to('#headphone', {
      scrollTrigger: {
        trigger: '#section5',
        start: 'center bottom',
        end: 'bottom bottom',
        scrub: true,
      },
      y: isShortHeight ? '432vh' : '425vh',
      x: '-10vw',
      width: '300px',
      opacity: 0,   // 👈 fades out with scroll
      ease: 'power1.inOut',
      immediateRender: false
    });


    // content animation

    gsap.from('#section2 .content-wrapper', {
      scrollTrigger: {
        trigger: '#section2',
        start: '-50% bottom',
        end: 'center center',
        scrub: true,
      },
      y: '140%',
      ease: 'power1.inOut',
    });

    gsap.from('#section3 .heading', {
      scrollTrigger: {
        trigger: '#section3',
        start: 'top bottom',
        end: 'center bottom',
        scrub: true,
      },
      y: '140%',
      ease: 'power1.inOut',
    });

    gsap.from('#section4 img', {
      scrollTrigger: {
        trigger: '#section4',
        start: 'top bottom',
        end: 'center center',
        scrub: true,
      },
      width: 0,
      opacity: 0,
      ease: 'power1.inOut',
    });

    gsap.from('#section6 .content-wrapper', {
      scrollTrigger: {
        trigger: '#section6',
        start: 'top bottom',
        end: 'center center',
        scrub: true,
      },
      y: '40%',
      duration: 2,
      ease: 'power1.inOut',
    });

    // hero section text animation
    let split = SplitText.create('#section1 .heading', {
      type: 'chars, words, lines',
      mask: 'lines'
    });

    gsap.from(split.chars, {
      yPercent: () => gsap.utils.random(-100, 100),
      rotation: () => gsap.utils.random(-30, 30),
      autoAlpha: 0,
      ease: 'back.out(1.5)',
      stagger: {
        amount: 0.5,
        from: 'random'
      },
      duration: 1.5
    });

    gsap.from('#headphone', {
      opacity: 0,
      scale: 0,
      duration: 1,
      delay: 1,
      ease: 'power1.inOut'
    })

  }
})

// login page animation
// snap values
const valueX = 50;
const valueY = 50;

// make all h4 draggable
Draggable.create("h4", {
  type: "x,y",
  bounds: "#container",
  inertia: true,
  snap: {
    x: value => Math.round(value / valueX) * valueX,
    y: value => Math.round(value / valueY) * valueY
  }
});

// floating effect
gsap.utils.toArray("h4").forEach(h => {
  // animate with xPercent/yPercent instead of x/y
  gsap.to(h, {
    xPercent: "+=" + gsap.utils.random(-10, 10), // smaller % so it drifts around its spot
    yPercent: "+=" + gsap.utils.random(-20, 20),
    duration: gsap.utils.random(3, 7),
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut"
  });
});

// login page functionality
let signin = document.querySelector('.signinbtn');
let signup = document.querySelector('.signupbtn');
let title = document.querySelector('.title');
let namefield = document.querySelector('.namefield');
let underline = document.querySelector('.underline');
let pass = document.querySelector('.password');
let link = document.getElementById('suggestion-link');

// flag to track current mode
let isSignUp = true;

signin.addEventListener('click', () => {
  namefield.style.maxHeight = '0';
  title.innerText = 'Sign In';
  signup.classList.add('disable');
  signin.classList.remove('disable');
  underline.style.transform = 'translateX(100%)';
  
  pass.innerHTML = 'Forgot Password? ';
  link.textContent = "Click Here!";
  isSignUp = false;
});

signup.addEventListener('click', () => {
  namefield.style.maxHeight = '60px';
  title.innerText = 'Sign Up';
  signup.classList.remove('disable');
  signin.classList.add('disable');
  underline.style.transform = 'translateX(0%)';
  
  pass.innerHTML = 'Password Suggestions ';
  link.textContent = "Click Here!";
  isSignUp = true;
});

// password generator
function generatePassword(length = 12) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

// link click handler changes depending on mode
link.addEventListener("click", function (e) {
  e.preventDefault();

  if (isSignUp) {
    // Sign Up: suggest password
    const newPassword = generatePassword(12);
    const passwordField = document.querySelector('input[type="password"]');
    passwordField.value = newPassword;
    alert("Suggested Password: " + newPassword);
  } else {
    // Sign In: forgot password flow
    // Example: redirect to forgot password page
    alert("Redirecting to Forgot Password page...");
    window.location.href = "forgot-password.html"; 
  }
});
