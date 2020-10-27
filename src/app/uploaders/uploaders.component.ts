import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uploaders',
  templateUrl: './uploaders.component.html',
  styleUrls: ['./uploaders.component.css']
})
export class UploadersComponent implements OnInit {
    element:HTMLElement;
    activateState: string;
    urls = [];
    filesArray : string;
    localPDF: string;
    pdfFile: string;
    pdfSrc: string;
    pdfBufferRender;
    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        if(this.route.snapshot.routeConfig.path.includes('img')){
        this.activateState = 'img'
        }else{
        this.activateState = 'pdf'
        }
    }

    //select multi files
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

    //select PDF
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
