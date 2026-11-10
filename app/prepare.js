// Copies the platform (index.html + videos) from the repo root into www/ so the app works offline.
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..'), www = path.join(__dirname, 'www');
fs.rmSync(www, { recursive: true, force: true });
fs.mkdirSync(path.join(www, 'videos'), { recursive: true });
fs.copyFileSync(path.join(root, 'index.html'), path.join(www, 'index.html'));
for (const f of fs.readdirSync(path.join(root, 'videos'))) fs.copyFileSync(path.join(root, 'videos', f), path.join(www, 'videos', f));
console.log('www ready:', fs.readdirSync(path.join(www, 'videos')).length, 'video files');
