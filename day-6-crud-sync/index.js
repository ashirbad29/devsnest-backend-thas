const fs = require('fs');

const [cmd, data] = process.argv.slice(2);

const createFile = note => {
	fs.writeFile('./notes.txt', note, () => {
		console.log('file created');
	});
};

const appendData = note => {
	fs.appendFile('./notes.txt', note, () => {
		console.log('add data to file');
	});
};

const getNotes = () => {
	const data = fs.readFile(
		'./notes.txt',
		{ encoding: 'utf-8' },
		(err, data) => {
			if (err) console.log(err);
			console.log(data);
		}
	);
};

const addNote = note => {
	fs.exists('./notes.txt', exists => {
		if (exists) {
			appendData(note);
		} else {
			createFile(note);
		}
	});
};

const clearNotes = () => {
	fs.unlink('./notes.txt', () => {
		console.log('Removed all notes');
	});
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
