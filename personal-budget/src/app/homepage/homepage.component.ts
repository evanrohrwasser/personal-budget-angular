import { AfterViewInit, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {

  public dataSource = {
    datasets: [
      {
          data: [30, 350, 90, 40, 50, 45, 250],
          backgroundColor: [
              '#ffcd56',
              '#ff6384',
              '#36a2eb',
              '#fd6b19',
              '#900C3F',
              '#3341FF',
              '#FF33FB'
          ],
      }
  ],
  labels: [
      'Eat Out',
      'Rent',
      'Groceries',
      'Gas',
      'Subscriptions',
      'Phone',
      'Insurance'

  ]
};

  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {
      for(var i = 0; i < res.myBudget.length; i++){
        this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
        this.dataSource.labels[i] = res.myBudget[i].title;
        this.createChart();
    }
    });
  }

   createChart() {
    const ctx = document.getElementById('myChart');
    const myPieChart = new Chart(ctx, {
        type: 'pie',
        data: this.dataSource
    });
}
}
