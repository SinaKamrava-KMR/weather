// initAnimation()


function initLoadinAnimation() {
  let animation = bodymovin.loadAnimation({

    container: document.getElementById('animation-wrapper'),
    
    path: '../../assets/animation/loading.json',
    
    renderer: 'svg',
    
    loop: true,
    
    autoplay: true,
    
    name: "Demo Animation",
    
    });        
}

function initAnimation() {
  let animation = bodymovin.loadAnimation({

    container: document.getElementById('weather-state'),
    
    path: '../../assets/animation/cloud.json',
    
    renderer: 'svg',
    
    loop: true,
    
    autoplay: true,
    
    name: "Demo Animation",
    
  });   
         
}

