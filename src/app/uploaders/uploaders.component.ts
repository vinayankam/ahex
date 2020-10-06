import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { FileQueueObject, ImageUploaderOptions } from 'ngx-image-uploader';

@Component({
  selector: 'app-uploaders',
  templateUrl: './uploaders.component.html',
  styleUrls: ['./uploaders.component.css']
})
export class UploadersComponent implements OnInit {
    src:any;
  activateState: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.routeConfig.path)
    if(this.route.snapshot.routeConfig.path.includes('img')){
      this.activateState = 'img'
    }else{
      this.activateState = 'pdf'
    }
  }
  handleFileInput(files: FileList) {
    console.log(files);
    var image = document.getElementById('output');
    if(files[0].size < 300000){
      image.src = URL.createObjectURL(files[0]);
    }else{
      alert('Max size 3mb')
    }	 
  }

  pdfFileInput(files: FileList) {
    console.log(files);
    var image = document.getElementById('pdfFile');
    if(files[0].type.includes('pdf') && files[0].size < 500000){
      document.getElementById("pdfFile").src = "https://i.stack.imgur.com/Zpt8n.jpg";
     
    }else{
      alert('File is not a PDF OR it should have max sixe 5 mb')
    }	 
  }

}
