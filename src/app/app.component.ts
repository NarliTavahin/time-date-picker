import { Component, OnInit } from '@angular/core';
import moment from 'jalali-moment';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [MatCardModule,
            MatInputModule, 
            MatFormFieldModule, 
            FormsModule,
            MatDatepickerModule
          ]
})
export class AppComponent implements OnInit {
  currentTime: string = '';
  currentSystemDate: string = '';
  Jdate: string = ''; 

  ngOnInit() {
    this.updateDateTime();
    setInterval(() => this.updateDateTime(), 1000); 
  }

  updateDateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString(); 
    this.currentSystemDate = moment(now).format('YYYY/MM/DD'); 

    
    this.Jdate = moment(now).locale('fa').format('YYYY/MM/DD');
  }
}
