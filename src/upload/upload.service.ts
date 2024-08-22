import { Injectable, NotFoundException } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FileUploadService {
    private uploadPath = join(__dirname, '..', '..', 'uploads');
    private serverUrl = 'http://149.200.251.14:3000'; // Replace with your server's address


    constructor() {
        if (!existsSync(this.uploadPath)) {
            console.log('Upload directory does not exist. Creating directory:', this.uploadPath); // Log directory creation
            mkdirSync(this.uploadPath);
        } else {
            console.log('Upload directory exists:', this.uploadPath); // Log if directory already exists

        }
    }

    getStorageOptions() {
        console.log('Getting storage options');
        return diskStorage({
            destination: (req, file, cb) => {
                console.log('Saving file to destination:', this.uploadPath); // Log the destination path
                cb(null, this.uploadPath);
            },
            filename: (req, file, cb) => {
                const fileExt = file.mimetype.split('/')[1];
                const filename = `${uuidv4()}.${fileExt}`;
                console.log('Generated filename:', filename); // Log the generated filename
                cb(null, `${uuidv4()}.${fileExt}`);
            },
        });
    }
    getUploadedFileUrl(filename: string) {
        const url = `${this.serverUrl}/uploads/${filename}`;
        console.log('Generated file URL:', url); // Log the generated file URL
        return url;
    }

}
