"use strict"

const allFunction = async () => {
	document.getElementById("defaultOpen").click();

	//for webcam tab
	navigator.mediaDevices.enumerateDevices().then(function (devices) {
		const arrayVirtual = ["OBS", "Virtual"]
		const regexPattern = new RegExp(arrayVirtual.join("|"), "i")

		let videoDevices = devices.filter(device => device.kind === 'videoinput' && !regexPattern.test(device.label));
		// Menambahkan kode !device.label.includes('Virtual Camera') untuk pengecekan

		if (videoDevices.length < 1) {
			console.log('No video device');
		} else if (videoDevices.length === 1) {
			console.log('One video device');
			navigator.mediaDevices.getUserMedia({ video: { deviceId: videoDevices[0].deviceId } }).then(videoStream => {
				video.srcObject = videoStream;
			});
		} else {
			console.log('Multiple video devices', videoDevices);
			let videoSelect = document.getElementById('selectCamera');

			if (videoDevices.length > 0) {
				videoDevices.forEach((videoDevice, index) => {
					let option = document.createElement('option');
					option.value = videoDevice.deviceId;
					let label = videoDevice.label || `Camera ${index + 1}`;
					let textNode = document.createTextNode(label);
					option.appendChild(textNode);
					videoSelect.appendChild(option);
				});
			} else {
				// Opsi jika tidak ada webcam fisik yang ditemukan
				let option = document.createElement('option');
				option.value = "None";
				let textNode = document.createTextNode("Webcam tidak ditemukan");
				option.appendChild(textNode);
				videoSelect.appendChild(option);
			}

			videoSelect.onchange = selectedCameraChange;
		}
	});

	const video = document.getElementById('video');
	const btnCapture = document.getElementById('btnCapture');
	const img = document.querySelector('img');

	let stream = null;
	let selectedCamera = null;
	function selectedCameraChange() {
		const videoSource = this.value;
		selectedCamera = videoSource; // ganti menjadi selectedCamera
		openCamera();
	}

	function openCamera() {
		const constraints = {
			video: { deviceId: selectedCamera ? { exact: selectedCamera } : undefined } // ganti menjadi selectedCamera
		};

		navigator.mediaDevices.getUserMedia(constraints).then(_stream => {
			stream = _stream;
			video.srcObject = stream;
		}).catch(err => console.error('openCamera: ', err));
	}

	btnCapture.addEventListener('click', () => {
		let canvas = document.createElement('canvas');
		//context dari canvas untuk mengambilgambar
		let context = canvas.getContext('2d');
		//set ukuran dari canvas
		canvas.width = video.videoWidth;
		canvas.height = video.videoHeight;
		//Ambil gambar dari video HTML5 API
		context.drawImage(video, 0, 0, canvas.width, canvas.height);

		img.src = canvas.toDataURL('image/png');
	});

	img.onclick = function () {
		window.open(this.src);
	}

	//for microphone tab
	var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
	var recognition = new SpeechRecognition();

	navigator.mediaDevices.enumerateDevices().then(function (devices) {
		let audioDevices = devices.filter(device => device.kind === 'audioinput')
		if (audioDevices.length < 1) {
			console.log('No video device')
		} else if (audioDevices.length === 1) {
			console.log('One video device')
			recognition.device = audioDevices[0].deviceId;
		} else {
			console.log('Multiple video devices', audioDevices)
			var select = document.getElementById("selectMicrophone");

			audioDevices.forEach((audioDevice, index) => {
				var option = document.createElement("option"); // Create a <button> element
				option.setAttribute("value", audioDevice.deviceId);
				var label = audioDevice.label || `Microphone ${index + 1}`;
				var textNode = document.createTextNode(label);
				option.appendChild(textNode);
				select.appendChild(option);
			})
			select.onchange = selectedAudioChange;
		}
	});

	function selectedAudioChange() {
		const audioSource = this.value;
		recognition.device = audioSource;
	}

	document.querySelector('#btnSpeak').addEventListener('click', () => {
		recognition.start();
	});

	recognition.interimResults = true;
	recognition.addEventListener('result', e => {
		let knewcommand = false;
		const last = e.results.length - 1;
		const text = Array.from(e.results[last]).map(i => i.transcript).join('');
		document.querySelector('.speech').textContent = text;
		console.log('speeches::', text)
	});

	recognition.onspeechend = () => {
		console.log('voiceend::')
		recognition.stop();
	};

	function openTab(evt, _idTab) {
		var i, tabcontent, tablinks;
		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}

		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}

		document.querySelector(`#${_idTab}`).style.display = "block";
		evt.currentTarget.className += " active";
	}
}
