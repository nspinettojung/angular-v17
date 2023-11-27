import { Component, inject } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe } from '@angular/common';
import { UserComponent } from '../user/user.component';
import { ChildComponent } from '../child/child.component';
import { CommentsComponent } from '../comments/comments.component';
import { ImageComponent } from '../image/image.component';
import { FormsComponent } from '../forms/forms.component';
import { CarService } from '../../service/car.service';
import { ReversePipe } from '../../Pipes/reverse-pipe.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, UserComponent, ChildComponent, CommentsComponent, ImageComponent, FormsComponent, LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe, ReversePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  city: string = "Alta Gracia";
  isServerRunning = true;
  user = [{ id: 0, name: 'Sarah' }, { id: 1, name: 'Amy' }, { id: 2, name: 'Rachel' }, { id: 3, name: 'Jessica' }, { id: 4, name: 'Poornima' }];
  isEditable: boolean = true;
  message: string = '';
  items = new Array();
  display = '';
  carService = inject(CarService);
  username = 'NICOLAS';
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
  word = 'You are a champion';



  constructor() {
    this.display = this.carService.getCars().join(' ⭐️ ');

  }

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }

  addItem(item: string) {
    this.items.push(item);
  }

}
