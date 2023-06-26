"use strict"

const mainPage = () => {
	return `
        <div class="container">

                <h1 style="color: #008CBA; text-align: center;"> Cek Device </h1>

		<div class="tab">
			<button class="tablinks" onclick="openTab(event, 'Webcam')" id="defaultOpen">Webcam</button>
			<button class="tablinks" onclick="openTab(event, 'Microphone')">Microphone</button>
		</div>

		<div id="Webcam" class="webcam tabcontent">
			<h2> Cek Webcam </h2>

			<label> Pilih Webcam : </label>
			<select id="selectCamera">
				<!-- Opstional, jika ada opsi default -->
				<option value="None">Pilih webcam</option>
			</select>
			<br>
			<br>
			<video id="video" autoplay></video>
			<button id="btnCapture">Capture</button>
			<br>
			<br>
			<img src="">

		</div>

		<div id="Microphone" class="mic tabcontent">
			<h2> Cek Microphone </h2>

			<label> Pilih Microphone : </label>
			<select id="selectMicrophone"></select>
			<br>
			<br>
			<button id="btnSpeak"> Speak </button>
			<br>
			<br>
			<textarea class="speech" disabled></textarea>

		</div>

	</div>
	`
}

