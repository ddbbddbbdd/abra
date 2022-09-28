// 3D Scroll

let zSpacing = -2000,
		lastPos = zSpacing / 6,
		delta1 = Math.abs(zSpacing)/3,
		delta2 = Math.abs(zSpacing)/5,
		delta3 = Math.abs(zSpacing)/25,
		$frames = document.getElementsByClassName('frame'),
		frames = Array.from($frames),
		zVals = [-1540, -4500, -7540, -10040, -11540, -14040, -15540, -18040, -19540, -22040, -25000]
		darks = [100, -2000, -2500, -5000, -2500, -5000, -2500, -5000, -2500, -5000, -2200]

window.onscroll = function() {

	let top = document.documentElement.scrollTop,
			delta = lastPos - top

	lastPos = top

	frames.forEach(function(n, i) {
		zVals[i] += delta * -2.5
		let frame = frames[i],
				transform = `translateZ(${zVals[i]}px)`
				if (i == 0) {
					opacity = zVals[i] < darks[i] ? 0 : zVals[i] < delta1 ? 1 : 0
				}
				else if (i%2 == 0 || i == 1){
					opacity = zVals[i] < darks[i] ? 0 : zVals[i] < delta2 ? 1 : 0
				}
				else {
					opacity = zVals[i] < darks[i] ? 0 : zVals[i] < delta3 ? 1 : 0
				}
		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
	})

}



// Audio and preload



let soundButton = document.querySelector('.soundbutton'),
		audio = document.querySelector('.audio'),
		body = document.querySelector('body'),
		header = document.querySelector('header'),
		load = document.querySelector('.load'),
		preloader = document.querySelector('.preloader'),
		preloadButton = document.querySelector('.btn')
		


audioControl = function() {
	soundButton.classList.toggle('paused')
	audio.paused ? audio.play() : audio.pause()
}


preloadButton.addEventListener('click', e => {
	
	preloader.classList.add('is-none')
	header.classList.remove('is-none')
	
	setTimeout(function() {body.removeChild(preloader)}, 2000)
	
	setTimeout(function() {
		window.scrollTo(0, 1)
		frames.forEach(function(n, i) {
			zVals[i] += 1300})
	}, 0)
	
	setTimeout(audioControl, 300)
})


soundButton.addEventListener('click', e => {
	soundButton.classList.toggle('paused')
	audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
	soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
	audio.pause()
}




window.onload = function() {
	setTimeout(function() {
		load.setAttribute('style', `opacity: 0`)
	}, 2500)
	setTimeout(function() {
		preloadButton.classList.add('end')
	}, 3000)
	setTimeout(function() {
		preloadButton.classList.add('vibration')
	}, 4500)		
}

