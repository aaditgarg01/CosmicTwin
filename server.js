const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Initialize SQLite Database
const db = new sqlite3.Database('./cosmictwin.db', (err) => {
  if (err) {
    console.error('Error connecting to SQLite:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    
    // Create Participants table
    db.run(`CREATE TABLE IF NOT EXISTS participants (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      participant_id TEXT UNIQUE,
      original_name TEXT,
      nickname TEXT,
      answers TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Create Matches table
    db.run(`CREATE TABLE IF NOT EXISTS matches (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      personA_id TEXT,
      personB_id TEXT,
      score INTEGER,
      match_data TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
  }
});

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // When a participant submits their answers
  socket.on('submit_answers', (data, callback) => {
    const { originalName, nickname, answers, participantId } = data;
    
    const stmt = db.prepare(`INSERT INTO participants (participant_id, original_name, nickname, answers) VALUES (?, ?, ?, ?)`);
    stmt.run([participantId, originalName, nickname, JSON.stringify(answers)], function(err) {
      if (err) {
        console.error("Error inserting participant:", err);
        callback({ success: false, error: err.message });
      } else {
        console.log(`Participant ${participantId} added.`);
        // Notify admins that a new participant joined
        io.emit('participant_update');
        callback({ success: true });
      }
    });
    stmt.finalize();
  });

  // When admin requests participants list
  socket.on('get_participants', (callback) => {
    db.all(`SELECT * FROM participants ORDER BY created_at ASC`, [], (err, rows) => {
      if (err) {
        console.error("Error fetching participants:", err);
        callback({ success: false, error: err.message });
      } else {
        // Parse answers string back to JSON array
        const participants = rows.map(r => ({
          ...r,
          answers: JSON.parse(r.answers)
        }));
        callback({ success: true, participants });
      }
    });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Cosmic Twin server running on port ${PORT}`);
});
