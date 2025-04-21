const fs = require('fs');
const path = require('path');
const https = require('https');

// Create avatars directory if it doesn't exist
const avatarsDir = path.join(__dirname, '..', 'public', 'avatars');
if (!fs.existsSync(avatarsDir)) {
  fs.mkdirSync(avatarsDir, { recursive: true });
}

// Function to download an image
const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(fs.createWriteStream(filename))
          .on('error', reject)
          .once('close', () => resolve(filename));
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    });
  });
};

// Generate random avatar URLs from DiceBear API
const generateAvatarUrls = (count) => {
  const avatars = [];
  const styles = ['adventurer', 'avataaars', 'bottts', 'fun-emoji', 'micah'];
  const seeds = ['male', 'female', 'human', 'person', 'user'];

  for (let i = 0; i < count; i++) {
    const style = styles[Math.floor(Math.random() * styles.length)];
    const seed = seeds[Math.floor(Math.random() * seeds.length)];
    const random = Math.random().toString(36).substring(7);
    avatars.push(`https://api.dicebear.com/7.x/${style}/png?seed=${seed}-${random}`);
  }

  return avatars;
};

// Download all avatars
const downloadAllAvatars = async () => {
  const avatarUrls = generateAvatarUrls(24); // Download 24 avatars
  const downloadPromises = avatarUrls.map((url, index) => {
    const filename = path.join(avatarsDir, `avatar${index + 1}.png`);
    return downloadImage(url, filename);
  });

  try {
    await Promise.all(downloadPromises);
    console.log('All avatars downloaded successfully to:', avatarsDir);
  } catch (error) {
    console.error('Error downloading avatars:', error);
  }
};

downloadAllAvatars(); 