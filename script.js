let isSpinning = true;

let illo = new Zdog.Illustration({
	element: '.zdog-canvas',
	dragRotate: true,
	onDragStart: function() {
		isSpinning = false;
	},
});

let box = new Zdog.Box({
	addTo: illo,
	width: 100,
	height: 100,
	depth: 100,
	stroke: false,
	color: '#00FFFF', // default face color
	leftFace: '#00CED1',
	rightFace: '#40E0D0',
	topFace: '#48D1CC',
	bottomFace: '#20B2AA',
	frontFace: '#008B8B',
	rearFace: '#008080',
});

illo.updateRenderGraph();

function animate() {
	illo.rotate.x += isSpinning ? 0.03 : 0;
	illo.rotate.y += isSpinning ? 0.03 : 0;
	illo.rotate.z += isSpinning ? 0.03 : 0;
	illo.updateRenderGraph();
	requestAnimationFrame( animate );
}

animate();