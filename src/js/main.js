import Glide from '@glidejs/glide'


new Glide (".glide", {
    autoplay: 5000,
    hoverpause: true,
    perView: 4,
    keyboard: true,
    gap: 0,
    type: 'carousel',
    breakpoints: {
      768: {
        perView: 1,
      },
      1024 :{
        perView: 2
      },
      1280 :{
        perView: 3
      }

    }
  }).mount();

  new Glide (".glide_tours", {
    autoplay: 5000,
    hoverpause: true,
    perView: 4,
    keyboard: true,
    gap: 20,
    type: 'carousel',
    breakpoints: {
      768: {
        perView: 1,
      },
      1024 :{
        perView: 2
      },
      1280 :{
        perView: 3
      }

    }
  }).mount();
