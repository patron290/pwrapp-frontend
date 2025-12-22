import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButton } from '@angular/material/button';

export interface Competitor {
  name: string;
  bodyWeight: number;
  gender: 'male' | 'female';
  age: number;
}

const competitors: Competitor[] = [
  { name: 'Alice', bodyWeight: 65, gender: 'female', age: 28 },
  { name: 'Bob', bodyWeight: 85, gender: 'male', age: 32 },
  { name: 'Charlie', bodyWeight: 75, gender: 'male', age: 24 },
];

@Component({
  selector: 'app-competitor-list',
  imports: [MatTableModule, MatButton],
  templateUrl: './competitor-list.html',
  styleUrl: './competitor-list.css',
})
export class CompetitorList {
  displayedColumns: string[] = ['name', 'gender', 'age'];
  dataSource = competitors;

  addData() {}

  removeData() {}
}
