import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectStatisticsDTO } from '../models/ProjectStatisticsDTO';


@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private baseUrl = 'http://localhost:9090/statistics'; 

  constructor(private http: HttpClient) {}

  getTotalNumberOfProjects(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/total-projects`);
  }

  getTotalNumberOfTasks(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/total-tasks`);
  }

  getTotalNumberOfFeedbacks(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/total-feedbacks`);
  }

  getAllProjectsWithStatistics(): Observable<ProjectStatisticsDTO[]> {
    return this.http.get<ProjectStatisticsDTO[]>(`${this.baseUrl}/all-projects`);
  }
}
