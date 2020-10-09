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
    localPDF: any;
    pdfFile;
    pdfSrc;
    pdfBufferRender;
    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        // console.log(this.route.snapshot.routeConfig.path)
        if(this.route.snapshot.routeConfig.path.includes('img')){
        this.activateState = 'img'
        }else{
        this.activateState = 'pdf'
        }
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

    pdfOnload(event) {
        const pdfTatget: any = event.target;
        console.log( event.target.files[0].size)
        if (typeof FileReader !== 'undefined' && event.target.files[0].size < 500000 ) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
                this.pdfSrc = e.target.result;
                this.localPDF = this.pdfSrc;
            };
        this.pdfBufferRender = pdfTatget.files[0];
        reader.readAsArrayBuffer(pdfTatget.files[0]);
        }else{
            alert('Max sixe 5 MB')
        }
    }
}
