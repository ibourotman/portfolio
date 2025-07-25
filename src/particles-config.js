const particlesConfig = {
  fpsLimit: 60,
  fullScreen: { enable: false },
  particles: {
    number: {
      value: 200,
      density: { enable: true, area: 800 }
    },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 100, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 5,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    links: {                    
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      random: false,
      straight: false,
      outMode: "out",           // <— out_mode → outMode
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detectsOn: "canvas",       // <— detect_on → detectsOn
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, links: { opacity: 1 } },  // line_linked → links
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200 },
      push: { quantity: 4 },         // particles_nb → quantity
      remove: { quantity: 2 }
    }
  },
  retinaDetect: true,   // <— retina_detect → retinaDetect
};

export default particlesConfig;
