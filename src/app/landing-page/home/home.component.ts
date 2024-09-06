import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  cards = [
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/mobi-pms.appspot.com/o/motors%2Fquality_restoration_20240906114116571.png?alt=media&token=9f1c497c-c378-4af2-a890-f2b05a1b2225',
      title: 'Click v3 Honda',
      price: 'P500/Day'
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/mobi-pms.appspot.com/o/motors%2Fquality_restoration_20240906112331779.png?alt=media&token=1c8ef676-3b6b-4f71-8d64-ded6374ada17',
      title: 'NMAX yamaha',
      price: 'P530/Day'
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/mobi-pms.appspot.com/o/motors%2Fquality_restoration_20240906114014868.png?alt=media&token=a8fd2920-0984-4bad-8d29-3431e1c3f826',
      title: 'Honda PCX 160cc',
      price: 'P750/Day'
    }
  ];

  images: string[] = [
    'https://firebasestorage.googleapis.com/v0/b/mobi-pms.appspot.com/o/motors%2Fquality_restoration_20240906112331779.png?alt=media&token=1c8ef676-3b6b-4f71-8d64-ded6374ada17',
    'https://firebasestorage.googleapis.com/v0/b/mobi-pms.appspot.com/o/motors%2Fquality_restoration_20240906113858866.png?alt=media&token=836d3780-e84f-457c-ab7b-54d0130cc9e1',
    'https://firebasestorage.googleapis.com/v0/b/mobi-pms.appspot.com/o/motor%2FMotorcycle-Transparent-File.png?alt=media&token=00c3c69a-47c5-42be-9b02-02729b832f10',
    'https://firebasestorage.googleapis.com/v0/b/mobi-pms.appspot.com/o/motors%2Fquality_restoration_20240906113928372.png?alt=media&token=21acdb59-b757-4cdd-82a1-177759d212a8',
    'https://firebasestorage.googleapis.com/v0/b/mobi-pms.appspot.com/o/motors%2Fquality_restoration_20240906113951653.png?alt=media&token=ff89f994-8beb-4f07-ae12-4e0c51f5db1d',
    'https://firebasestorage.googleapis.com/v0/b/mobi-pms.appspot.com/o/motors%2Fquality_restoration_20240906114014868.png?alt=media&token=a8fd2920-0984-4bad-8d29-3431e1c3f826',
    'https://firebasestorage.googleapis.com/v0/b/mobi-pms.appspot.com/o/motors%2Fquality_restoration_20240906114116571.png?alt=media&token=9f1c497c-c378-4af2-a890-f2b05a1b2225',
    'https://firebasestorage.googleapis.com/v0/b/mobi-pms.appspot.com/o/motors%2Fquality_restoration_20240906114206938.png?alt=media&token=c14a7d2e-45e9-4b83-87c4-7792b42507b8',

  ];

  currentSlide = 0;

  ngOnInit(): void {
   
    setInterval(() => {
      this.nextSlide();
    }, 5000); 
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
    this.updateSlidePosition();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
    this.updateSlidePosition();
  }

  updateSlidePosition() {
    const slider = document.querySelector('.slides') as HTMLElement;
    slider.style.transform = `translateX(-${this.currentSlide * 100}%)`;
  }

}
