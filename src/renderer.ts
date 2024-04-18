import './index.css';
import fs from 'fs';

console.log('👋 This message is being logged by "renderer.ts", included via Vite');

const ytdlpurl = document.getElementById('ytdlp') as HTMLInputElement;
const downloadurl = document.getElementById('downloadurl') as HTMLInputElement;
const location = document.getElementById('location') as HTMLInputElement;

const mp3btn = document.getElementById('mp3') as HTMLButtonElement;
const mp4btn = document.getElementById('mp4') as HTMLButtonElement;

function getYTDLP() {
  if (process.platform === 'win32') {
    return `C:\\Windows\\System32\\ytdlp.exe`;
  } 
}

function getDownloadDir() {
  if (process.platform === 'win32') {
    return `C:\\Users\\${process.env.USERNAME}\\Downloads`;
  }
}

ytdlpurl.value = getYTDLP();
location.value = getDownloadDir();