import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../Services/statistics.service';
import { ProjectStatisticsDTO } from '../models/ProjectStatisticsDTO';
import Chart from 'chart.js';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  totalProjects: number = 0;
  totalTasks: number = 0;
  totalFeedbacks: number = 0;
  projectStatistics: ProjectStatisticsDTO[] = [];
  chart: any;

  constructor(private statisticsService: StatisticsService) {}

  ngOnInit(): void {
    this.loadStatistics();
  }

  loadStatistics(): void {
    this.statisticsService.getTotalNumberOfProjects().subscribe(data => this.totalProjects = data);
    this.statisticsService.getTotalNumberOfTasks().subscribe(data => this.totalTasks = data);
    this.statisticsService.getTotalNumberOfFeedbacks().subscribe(data => this.totalFeedbacks = data);
    this.statisticsService.getAllProjectsWithStatistics().subscribe(data => {
      this.projectStatistics = data;
      this.createChart();
    });
  }

  createChart(): void {
    const projectNames = this.projectStatistics.map(stats => stats.name);
    const projectFeedbacks = this.projectStatistics.map(stats => stats.numberOfFeedbacks);

    this.chart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: projectNames,
        datasets: [{
          data: projectFeedbacks,
          backgroundColor: [
            '#FF6384', '#36A2EB', '#FFCE56', '#8BC34A', '#9C27B0', 
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Project Feedbacks'
          }
        }
      }
    });
  }
}