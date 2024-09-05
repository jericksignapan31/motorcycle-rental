import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  cards = [
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/mobi-pms.appspot.com/o/motor%2Fimage%202.png?alt=media&token=60740c91-57e6-472e-9a1b-e8e5e6fe9f73',
      title: 'Click v3 Honda',
      price: 'P500/Day'
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/mobi-pms.appspot.com/o/motor%2Fimage%202.png?alt=media&token=60740c91-57e6-472e-9a1b-e8e5e6fe9f73',
      title: 'NMAX yamaha',
      price: 'P530/Day'
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/mobi-pms.appspot.com/o/motor%2Fimage%202.png?alt=media&token=60740c91-57e6-472e-9a1b-e8e5e6fe9f73',
      title: 'Honda PCX 160cc',
      price: 'P750/Day'
    }
  ];

  images: string[] = [
    'https://firebasestorage.googleapis.com/v0/b/mobi-pms.appspot.com/o/motor%2F1%20(1).png?alt=media&token=b98b636b-1286-4399-a056-bbfd2604eddb',
    'https://firebasestorage.googleapis.com/v0/b/mobi-pms.appspot.com/o/motor%2Fimage%202.png?alt=media&token=60740c91-57e6-472e-9a1b-e8e5e6fe9f73',
    'https://firebasestorage.googleapis.com/v0/b/mobi-pms.appspot.com/o/motor%2Fimage%202.png?alt=media&token=60740c91-57e6-472e-9a1b-e8e5e6fe9f73',
    'https://firebasestorage.googleapis.com/v0/b/mobi-pms.appspot.com/o/motor%2FMotorcycle-Transparent-File.png?alt=media&token=00c3c69a-47c5-42be-9b02-02729b832f10',

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
