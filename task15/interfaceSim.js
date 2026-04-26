class StorageProvider{
    upload(file) {
        throw new Error("upload() method must be implemented");
    }
    download(filename) {
        throw new Error("download() method must be implemented");
    }
};
class LocalStorageProvider extends StorageProvider{
    upload(file){
        console.log("file is uploading... "+file);
    }
    download(filename){
        console.log("filename is downloading... "+filename);
    }
};
class CloudStorageProvider extends StorageProvider{
    upload(file){
        console.log("file is uploading..."+file);
    }
    download(filename){
        console.log("filename is downloading..."+filename);
    }
};

function useStorage(provider){
    if(typeof provider.upload !== "function" || typeof provider.download !== "function"){
        throw new Error("Invalid storage provider");
    }
    provider.upload("document.pdf");
    provider.download("image.png");
}
useStorage(new LocalStorageProvider());
// Works

//useStorage({});
// Error: Invalid storage provider

