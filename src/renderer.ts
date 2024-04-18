import './index.css';
import fs from 'fs';

const clipboard = require('electron').clipboard;

const ytdlpurl = document.getElementById('ytdlp') as HTMLInputElement;
const downloadurl = document.getElementById('downloadurl') as HTMLInputElement;
const location = document.getElementById('location') as HTMLInputElement;

const mp3btn = document.getElementById('mp3') as HTMLButtonElement;
const mp4btn = document.getElementById('mp4') as HTMLButtonElement;

function getYTDLP() : string {
   // get ytdlp path - windows system32, apple inside of app, linux /usr/bin
   return "";
}

function getDownloadUrl() : string {
    if (clipboard.readText().includes('https://')) {    
        return clipboard.readText();
    } else {
        return ""; // at to neni undefined
    }
}

function getDownloadDir() : string  {
    // get users path and add downloads
    return "";
}

ytdlpurl.value = getYTDLP();
location.value = getDownloadDir();
downloadurl.value = getDownloadUrl();

mp3btn.addEventListener('click', () => {
  const ytdlp = ytdlpurl.value;
  const url = downloadurl.value;
  const dir = location.value;
  const command = `${ytdlp} -x --audio-format mp3 --audio-quality 0 --output "${dir}/%(title)s.%(ext)s" ${url}`;
  fs.writeFileSync('command.bat', command);
    require('child_process').exec('command.bat');

});