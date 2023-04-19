import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { Vacancy } from './models';



@Injectable({
  providedIn: 'root'
})

export class VacancyService {

  BASE_URL = 'http://127.0.0.1:8000/'

  constructor(private client: HttpClient) {
  }

  getVacancies(): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies`)
  }

  createVacancy(vacancyName: string): Observable<Vacancy> {
    return this.client.post<Vacancy>(
      `${this.BASE_URL}/api/vacancies`,
      {name: vacancyName}
    )
  }

  deleteVacancy(company_id: number): Observable<any> {
    return this.client.delete(
      `${this.BASE_URL}/api/vacancies/${company_id}/`
    )
  }
}
