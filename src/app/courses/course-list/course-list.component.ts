import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICourse } from '../../ICourse';
import { StarComponent } from '../../star/star.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule,StarComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent{
  title = 'Course List';
  showImage:boolean = false;
  listFilter = '';

  courses: ICourse[] = [
    {
      id:101,
      courseName:'Angular',
      courseCode:'A-101',
      price: 30,
      rating: 3.5,
      availableDate: '11 June 2024',
      imageUrl:'/nosql.png'
    },
    {
      id:102,
      courseName:'MongoDB',
      courseCode:'M-102',
      price: 40,
      rating: 3.5,
      availableDate: '11 July 2024',
      imageUrl:'/nosql.png'
    },
    {
      id:103,
      courseName:'Python',
      courseCode:'P-103',
      price: 50,
      rating: 5,
      availableDate: '10 August 2024',
      imageUrl:'/python.png'
    },
    {
      id:104,
      courseName:'NodeJs',
      courseCode:'N-104',
      price: 10,
      rating: 4.5,
      availableDate: '11 June 2024',
      imageUrl:'/python.png'
    },
    {
      id:105,
      courseName:'Automation Testing',
      courseCode:'A-105',
      price: 40,
      rating: 4.5,
      availableDate: '11 June 2024',
      imageUrl:'/nosql.png'
    }
  ]

  toggleImage():void{
    this.showImage = !this.showImage;
  }

  onRatingClicked(message:string){
    this.title = 'Course List ' + message;
  }
}
