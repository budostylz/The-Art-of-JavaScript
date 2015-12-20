<!doctype html>
<html lang='en'>
	<head>
		<meta charset='utf-8'>
		<title>A Modal Window</title>
		<!--[if It IE 9]>
			<script src="https://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
		<link rel="stylesheet" href="modal.css" id="css">
	</head>
	<body>
			<div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p></div>
						<div id='modal'>
							<div id='modalMask'></div>
							<div id="modalContent">
								<p>This is Modal Content</p>
								<input type="button" id="closeModal" value="Close">
							</div>
						</div>
						<input type="button" value="Show Window" id="openModal"> 
			<div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p></div>
	</body>
	<script src="modal.js"></script>
</html>
