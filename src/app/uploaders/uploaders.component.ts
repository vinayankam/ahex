import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { FileQueueObject, ImageUploaderOptions } from 'ngx-image-uploader';

@Component({
  selector: 'app-uploaders',
  templateUrl: './uploaders.component.html',
  styleUrls: ['./uploaders.component.css']
})
export class UploadersComponent implements OnInit {
  element:HTMLElement;
  activateState: string;
  urls = [];
  filesArray : any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.routeConfig.path)
    if(this.route.snapshot.routeConfig.path.includes('img')){
      this.activateState = 'img'
    }else{
      this.activateState = 'pdf'
    }
  }

  pdfFileInput(files: FileList) {
    if(files[0].type.includes('pdf') && files[0].size < 500000){
      //document.getElementById("pdfFile").src = "https://i.stack.imgur.com/Zpt8n.jpg";
    }else{
      alert('File is not a PDF OR it should have max sixe 5 mb')
    }	 
                
    // var image = document.getElementById('pdfFile');
    // if(files[0].type.includes('pdf') && files[0].size < 500000){
    //   document.getElementById("pdfFile").src = "https://i.stack.imgur.com/Zpt8n.jpg";
     
    // }else{
    //   alert('File is not a PDF OR it should have max sixe 5 mb')
    // }	 
  }
 
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
            if(event.target.files[i].size < 300000) {
                var reader = new FileReader();
                reader.onload = (event:any) => {
                    console.log(event.target.result);
                    this.urls.push(event.target.result); 
                }
                reader.readAsDataURL(event.target.files[i]);
            }else{
                alert('Max sixe 3 MB')

            }  
        }
    }
  }

}
