import { Element } from '@angular/compiler';
import { Component,ViewChild,OnInit, Renderer2, ElementRef, ViewEncapsulation, HostListener,NgZone,AfterViewInit} from '@angular/core';
import { Location } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { ViewportScroller } from '@angular/common';
import { TitleStrategy } from '@angular/router';
import { fabric } from 'fabric';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent {
 @ViewChild('lablel1')label1=ElementRef;
 @ViewChild('lablel2')label2=ElementRef;
 @ViewChild('rdb1')rdb1=ElementRef;
 @ViewChild('rdb2')rdb2=ElementRef;
 @ViewChild('open',{static:true})open_hamburger!:ElementRef;
 @ViewChild('close',{static:true})close_ambburger!:ElementRef;
 @ViewChild('navrapper',{static:true})nav_rapper!:ElementRef;
 @ViewChild('headerrow',{static:true})head_row!:ElementRef;
 @ViewChild('canvasElement', { static: true }) canvasElement!: ElementRef;
 @ViewChild('fabCanvas', { static: true }) fabcanvasElement!: ElementRef;

 @ViewChild('canvas', { static: true }) canvasRef!: ElementRef;
 private canvas:any;
 
//  canvas!: HTMLCanvasElement;
 private fabric_canvas:any;
 context!: CanvasRenderingContext2D;
 isMinWidth576:any;
 public insured_rating:string='$5,000';
 public banner1:any='../../assets/images/banner_1.png';
 public banner2:any='../../assets/images/banner-2.png';
 public opacity_val:number=1;
 public content:boolean=true;
 public is_active:boolean=true;
 public  prevScrollPosition:any;
 scrollPosition = 0;
 public is_scroll:boolean=false;
 public window_width:boolean=false;
 public bodyElement=document.querySelector('body') as HTMLElement;
  slides = [
    {img: "../../assets/images/banner_1.png"},
    {img: "../../assets/images/banner-2.png"},
    {img: "../../assets/images/banner_1.png"},
    {img: "../../assets/images/banner-2.png"}
  ];
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};

 customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  dots: true,
  navSpeed: 700,
  center:true,
  items:2,
  autoplayTimeout:2000,
  autoplay:false,
  nav: false,
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 3
    },
    1024: {
      items: 3  
    }
  },

}

 constructor(
  private renderer: Renderer2,
  private ng_zone:NgZone,
  private viewportScroller: ViewportScroller,
  private location:Location
  ){
                 this.prevScrollPosition = window.pageYOffset;
                 this.fabric_canvas=fabric.Canvas;
                 
                       
 }
  ngOnInit(){
    this.changeImages();
    this.removePimples();
  
  }
ngAfterViewInit(){
  this.canvas = this.canvasElement.nativeElement;
  this.context = this.canvas.getContext('2d') as any;
  this.loadImage();
  // this.canvas=fabric.Canvas;

  const canvasEl: HTMLCanvasElement = this.canvasRef.nativeElement;
    this.canvas = new fabric.Canvas(canvasEl);

}
  @HostListener('window:scroll',[])
  onWindowRsize(){
    // this.parallexEffect();
    this.scrollPosition = window.pageYOffset ;
   
    if(this.scrollPosition>0){
      this.is_scroll=true
      console.log(this.is_scroll);
      
    }
    else{
      if(this.scrollPosition==0){
        this.is_scroll=false;
       console.log(this.is_scroll);
      }
      
    }
    this.checkScrollandResize();
      
  }
  @HostListener('window:resize')
  onWindowResize(){
     this.window_width=window.innerWidth>=576&&window.innerWidth<=768;
     this.checkScrollandResize();
  } 
  checkScrollandResize(){
    if(this.is_scroll && this.window_width){
      this.head_row.nativeElement.classList.add("custom-class");
    }
    else{
      this.head_row.nativeElement.classList?.remove("custom-class")
    }  
     
  }

  parallexEffect(){
    const parallaxImage = document.querySelector('.parallax-image') as any;
    const translateY = this.scrollPosition * 0.5; 
   
  }
  
  changeBorder(label:any) {
    console.log(label);
    console.log('chekc out it',event);
  }
  ShowNav(){
  this.bodyElement.style.overflow='hidden';
  console.log('check open hamburger:',this.open_hamburger);
  this.open_hamburger.nativeElement.classList.add('my-hide');
  this.close_ambburger.nativeElement.classList.toggle('my-hide');
  this.nav_rapper.nativeElement.classList.add('my-show');
  this.nav_rapper.nativeElement.class.toggle('my-hide');
  }
  hideNav(){
  const bodyElement=this.renderer.selectRootElement('body');  
  this.close_ambburger.nativeElement.classList.add('my-hide');
  this.open_hamburger.nativeElement.classList.toggle('my-hide');
  this.nav_rapper.nativeElement.classList.remove('my-show')
  this.nav_rapper.nativeElement.classList.add('my-hide')
  this.renderer.removeStyle(bodyElement,'overflow');
  window.location.reload();
  }
  changeImages(){
    let src1='../../assets/images/banner_1.png';
    let src2='../../assets/images/banner-2.png';
    let ins_rat_1='$5,000';
    let ins_rat_2='$10,000';   
     setTimeout(() => {
      setInterval(()=>{
        if(this.banner1==src1){
          this.banner1=src2;
          this.insured_rating=ins_rat_2;
        }
        else{
            if(this.banner1==src2){
              this.banner1=src1;
              this.insured_rating=ins_rat_1;
            }
        }
     
      },1600)
      
     }, 5000);
   
  

  }
 
   nestedIntervals() {
    var outerInterval = setInterval(function() {
      // console.log('Outer interval');
      var innerInterval = setInterval(function() {
        // console.log('Inner interval');
      }, 1000); // Inner interval runs every 1 second
      
      setTimeout(function() {
        clearInterval(innerInterval); // Clear the inner interval after 5 seconds
      }, 5000);
    }, 2000); // Outer interval runs every 2 seconds
    
    setTimeout(function() {
      clearInterval(outerInterval); // Clear the outer interval after 10 seconds
    }, 10000);
  }
  loadImage():void{
    let c:any=document.getElementById('my-cnavas');
    // let ctx=c.getContext('2d')
    let image= new Image();
    // let url=;
    
    image.onload=()=>{
      this.canvas.width=image.width;
      this.canvas.height=image.height;
      this.context.drawImage(image, 0, 0);
      this.ng_zone.run(()=>{
        console.log('image load:::::',this.canvas.width);
  
      })
     
      
    }
    image.src="../../assets/images/insurance/boy_pumpils.webp" ;
    

    
  }
  applyFilter(): void {
    const imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height) ;
    let data = imageData.data;
    const threshold = 30
    console.log('checkout imageData::::',imageData);
    console.log('checout data',data);
  
    // Apply filter by manipulating the image data (pixel values)
    for (let i = 0; i < data.length; i += 4) {
      // Apply your desired filter logic here
      // Modify the red, green, blue, and alpha values of each pixel
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      if (r >= 150 && r <= 255 && g >= 90 && g <= 210 && b >= 50 && b <= 170) {
        data[i + 3] = 0; // Set alpha channel to 0 (make pixel transparent)
      }
    }
  
    this.context.putImageData(imageData, 0, 0);
  }

  //start here
  uploadImage(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const imgObj = new Image();
      imgObj.src = e.target.result;

      imgObj.onload = () => {
        const fabricImg = new fabric.Image(imgObj);
        this.canvas.add(fabricImg);
        this.canvas.renderAll();
      };
    };

    reader.readAsDataURL(file);
  }
  
  removePixels(): void {
    const activeObject = this.canvas.getActiveObject();
    if (activeObject instanceof fabric.Image) {
      const pimplesColor = [255, 0, 0]; // Color of the pimples (adjust as needed)
      const tolerance =30; // Tolerance value for color matching (adjust as needed)
  
      // Ensure filters array is initialized
      if (!activeObject.filters) {
        activeObject.filters = [];
      }
  
      activeObject.filters.push(
        new fabric.Image.filters.RemoveWhite({
          threshold: tolerance,
    
        })
      );
      activeObject.applyFilters();
      this.canvas.renderAll();
    }
  }
  //end here
    // let activeObject = this.fabric_canvas.getActiveObject();
    // if (activeObject instanceof fabric.Image) {
    //   const width = activeObject.width;
    //   const height = activeObject.height;
  
    //   const clone = activeObject.clone();
    //   clone.applyFilters(); // Apply existing filters
  
    //   fabric.util.object.clone(activeObject); // Clone the original image object
  
    //   const canvas = document.createElement('canvas');
    //   const context = this.fabric_canvas.getContext('2d');
    //   this.fabric_canvas.width = width;
    //   this.fabric_canvas.height = height;
  
    //   const imageData = clone.toCanvasElement().getContext('2d').getImageData(0, 0, width, height);
    //   const data = imageData.data;
  
    //   for (let i = 0; i < data.length; i += 4) {
    //     const r = data[i];
    //     const g = data[i + 1];
    //     const b = data[i + 2];
  
    //     // Check if the pixel matches the pimple color
    //     if (r > 200 && g < 50 && b < 50) {
    //       // Set the pixel to a color of your choice (e.g., white)
    //       data[i] = 255;   // Red
    //       data[i + 1] = 255; // Green
    //       data[i + 2] = 255; // Blue
    //       data[i + 3] = 255; // Alpha
    //     }
    //   }
  
    //   context.putImageData(imageData, 0, 0);
  
    //   const pimplesRemovedImage = new fabric.Image(canvas, {
    //     left: activeObject.left,
    //     top: activeObject.top,
    //     scaleX: activeObject.scaleX,
    //     scaleY: activeObject.scaleY,
    //     angle: activeObject.angle,
    //     width: activeObject.width,
    //     height: activeObject.height,
    //     selectable: true
    //   });
  
    //   this.fabric_canvas.remove(activeObject);
    //   this.fabric_canvas.add(pimplesRemovedImage);
    //   this.fabric_canvas.renderAll();
    // }
  // }
    

  removePimples(): void {
    const canvas = new fabric.Canvas('canvas');

    // Load the image onto the canvas
    fabric.Image.fromURL("../../assets/images/insurance/boy_pumpils.webp", (image) => {
      canvas.add(image);
      image.filters = image.filters || [];
      // Apply the RemoveColor filter to remove pimples
      const filter = new fabric.Image.filters.RemoveColor({
        threshold: 30 // Adjust the threshold value as needed
      });

      image.filters.push(filter);
      image.applyFilters();
      canvas.renderAll();
    });
  }




 


}
