import { Controller, NotFoundException, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUploadService } from './upload.service';

// Factory function to return the interceptor with storage options
function createFileInterceptor(fileUploadService: FileUploadService) {
    return FileInterceptor('file', { storage: fileUploadService.getStorageOptions() });
}

@Controller('upload')
export class FileUploadController {
    constructor(private readonly fileUploadService: FileUploadService) { }

    @Post('image')
    @UseInterceptors(createFileInterceptor(new FileUploadService()))
    uploadImage(@UploadedFile() file: Express.Multer.File) {
        if (!file) {
            throw new NotFoundException('File not found');
        }

        const url = this.fileUploadService.getUploadedFileUrl(file.filename);
        return { url };
    }
}
