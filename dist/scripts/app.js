
(() => {
 
  

})()






initAnimation(false)


function initAnimation(state) {
  let animation = bodymovin.loadAnimation({

    container: document.getElementById('weather-state'),
    
    path: '../../assets/animation/cloud.json',
    
    renderer: 'svg',
    
    loop: true,
    
    autoplay: true,
    
    name: "Demo Animation",
    
  }); 
  let search = bodymovin.loadAnimation({

    container: document.getElementById('location-content'),
    
    path: '../../assets/animation/search.json',
    
    renderer: 'svg',
    
    loop: true,
    
    autoplay: state,
    
    name: "Demo Animation",
    
    }); 
}

