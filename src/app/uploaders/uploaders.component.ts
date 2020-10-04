import { Component, OnInit } from '@angular/core';
// import { FileQueueObject, ImageUploaderOptions } from 'ngx-image-uploader';

@Component({
  selector: 'app-uploaders',
  templateUrl: './uploaders.component.html',
  styleUrls: ['./uploaders.component.css']
})
export class UploadersComponent implements OnInit {
//   options: ImageUploaderOptions = {
//     thumbnailHeight: 150,
//     thumbnailWidth: 150,
//     uploadUrl: 'http://some-server.com/upload',
//     allowedImageTypes: ['image/png', 'image/jpeg'],
//     maxImageSize: 3
// };
  constructor() { }

  ngOnInit(): void {
  }


// onUpload(file: FileQueueObject) {
//   console.log(file.response);
// }

}
