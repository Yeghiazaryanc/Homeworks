
function downloadFile(){
    return new Promise((resolve)=>setTimeout(()=>resolve("file download:done"),1000));
}
function resizeImage(){
    return new Promise(resolve=>setTimeout(()=>resolve("resize image: done"),2000));
}
function uploadFile(){
    return new Promise(resolve=>setTimeout(()=>resolve("uploadFile: done"),3000));
}
downloadFile()
.then(file=>resizeImage(file))
.then(image=>uploadFile(image))
.then(()=>console.log("All done!"));