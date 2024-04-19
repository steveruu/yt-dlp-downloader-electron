# yt-dlp-downloader-electron
A simple, lightweight, **multiplatform** GUI for the YT-DLP CLI application made in Electron  
Made as a sequel to [**my project**](https://github.com/steveruu/yt-dlp-downloader-winforms)
## PREREQUISITES:
- [**yt-dlp**](https://github.com/yt-dlp/yt-dlp/releases/)
  - Windows - **C:\Windows\System32\ytdlp.exe**
  - MacOS - **.app/yt-dlp**
  - Linux - **/usr/bin/yt-dlp**
- [**ffmpeg, ffprobe**](https://ffmpeg.org/download.html)
  - MacOS - installation via homebrew
- some IQ   

## STATUS:
🟢 Windows - **working**, ready for usage  
🟢  MacOS - working, light tweaks (chmod a+x yt-dlp)
🔴 Linux - haven't set up yet

## INSTALLATION
### Windows
Install [ffmpeg](https://ffmpeg.org/download.html)  
Put [**yt-dlp**](https://github.com/yt-dlp/yt-dlp/releases/) in to System32 folder  
Download setup from releases here, run  
### MacOS
Install ffmpeg via homebrew  
Install dmg from releases page  
Enter `chmod a+x /Applications/ytdlp-downloader.app/yt-dlp` in Terminal  

## DOWNLOAD:
Releases will be here soon..  
In the meanwhile, try building the binaries yourself

## BUILD, CONTRIBUTING:
Clone the repo
````
cd yt-dlp-downloader-electron
npm i
npm run make
````
