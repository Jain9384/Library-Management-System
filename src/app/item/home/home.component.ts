import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  items: Item[] = [];
  apiUrl: any;
  http: any;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {

    this.itemService.getAllItem().subscribe((data) => {
      this.items = data;
    })

  }
  delete(id: Number) {
    const isConfirmed=window.confirm("Are you want to delete.?")
    if(isConfirmed){
      this.itemService.delete(id).subscribe((data) => {
        this.items = this.items.filter(itm => itm.id !== id);
    })
    window.location.reload();
    }
    
    
  }
}