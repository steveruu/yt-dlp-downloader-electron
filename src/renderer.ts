import "./index.css";

const clipboard = require("electron").clipboard;
const os = require("os");
const child_process = require("child_process");

const ytdlpurl = document.getElementById("ytdlp") as HTMLInputElement;
const downloadurl = document.getElementById("downloadurl") as HTMLInputElement;
const location = document.getElementById("location") as HTMLInputElement;

const mp3btn = document.getElementById("mp3") as HTMLButtonElement;
const mp4btn = document.getElementById("mp4") as HTMLButtonElement;

function getYTDLP(): string {
  // get ytdlp path - windows system32, apple inside of app, linux /usr/bin
  if (process.platform === "win32") {
    return "C:\\Windows\\System32\\yt-dlp.exe";
  } else if (process.platform === "darwin") {
    return "/Applications/ytdlp-downloader/yt-dlp";
  } else {
    return "/usr/bin/yt-dlp";
  }

  return "";
}

function getDownloadUrl(): string {
  if (clipboard.readText().includes("https://")) {
    return clipboard.readText();
  } else {
    return ""; // at to neni undefined
  }
}

function getDownloadDir(): string {
  // get users path and add downloads

  if (process.platform === "win32") {
    return `${os.homedir()}\\Downloads`;
  } else {
    return `${os.homedir()}/Downloads`;
  }
}

ytdlpurl.value = getYTDLP();
location.value = getDownloadDir();
downloadurl.value = getDownloadUrl();

mp3btn.addEventListener("click", () => {
  const ytdlp = ytdlpurl.value;
  const url = downloadurl.value;
  const dir = location.value;
  
  document.getElementById("status").innerText = "Downloading...";
  child_process.exec(`${ytdlp} -x --audio-format mp3 -P home:${dir} ${url}`, (error: any, stdout: any, stderr: any) => {
    document.getElementById("status").innerText = "Downloaded!";
  });

});
