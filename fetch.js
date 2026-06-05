const https = require('https');
const fs = require('fs');

https.get('https://pai.nomadenstudio.com/aurna/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('C:\\Users\\admin\\.gemini\\antigravity\\brain\\4e173a9e-ffa6-4089-9f98-74a4b8ceaeef\\scratch\\aurna.html', data);
    console.log('done');
  });
}).on('error', (err) => console.error(err));
