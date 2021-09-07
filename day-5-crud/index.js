const fs = require('fs');

const [cmd, data] = process.argv.slice(2);

const createFile = note => {
	fs.writeFileSync('./notes.txt', note);
};

const appendData = note => {
	fs.appendFileSync('./notes.txt', note);
};

const getNotes = () => {
	const data = fs.readFileSync('./notes.txt', {
		encoding: 'utf-8',
	});

	console.log(data);
};

const addNote = note => {
	if (fs.existsSync('./notes.txt')) {
		appendData(note);
	} else {
		createFile(note);
	}
};

const clearNotes = () => {
	fs.unlinkSync('./notes.txt');
};

const notesApp = () => {
	if (cmd === 'add') {
		addNote(data);
		return;
	}

	if (cmd === 'get') {
		getNotes();
		return;
	}

	if (cmd === 'clear') {
		clearNotes();
		return;
	}
};

notesApp();
