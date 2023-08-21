const http = require('http');
const ytdl = require('ytdl-core');
const url = require('url');

const app = http.createServer((req, res) => {
    const currentURL = req.url;
    const pathname = url.parse(currentURL, true).pathname;
    const queryData = url.parse(currentURL, true).query;
    const videoUrl = queryData.videoUrl;
    
    if (pathname === '/') {
        res.writeHead(200);
        res.end("hello");
    } else if (pathname === "/download_chrome_ex") {
        if (!videoUrl.includes("www.youtube.com/watch")) {
            res.writeHead(200);
            res.end("This is not a YouTube page.");
        }
        else {
            res.writeHead(200, {'Content-Disposition': 'attachment; filename="video.mp4"'});
            ytdl(videoUrl, {
                format: 'mp4'
            }).pipe(res);
        }
    } else {
        console.log("404");
        res.writeHead(404);
        res.end('404 Not Found');
    }
}).listen(3000);