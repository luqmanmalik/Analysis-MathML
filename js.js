function iframe(){
	editor.document.designMode = 'on';
}

function bold(){
	editor.document.execCommand('bold', false, null);
}

function italic(){
	editor.document.execCommand('italic', false, null);
}

function underline(){
	editor.document.execCommand('underline', false, null);
}

function fontsize(){
	var size = prompt("Enter a size (1-7)", "");
	editor.document.execCommand('fontsize', false, size);
}

function fontcolor(){
	var color = prompt("Enter a hexadecimal code or name of color", "");
	editor.document.execCommand('forecolor', false, color);
}

function highlight(){
	editor.document.execCommand('backcolor', false, "yellow");
}

function link(){
	var link = prompt("Enter a link", "http://");
	editor.document.execCommand('createlink', false, link);
}

function unlink(){
	editor.document.execCommand('unlink', false, null);
}

function formsubmit(){
	document.getElementById("textarea").value = window.frames['editor'].document.body.innerHTML;
	document.getElementById("rtf").submit();
}