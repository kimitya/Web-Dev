import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Company, Vacancy} from "./models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private client: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.client.get<Company[]>('http://127.0.0.1:8000/api/companies/');
  }

  getCompany(id: number): Observable<Company> {
    return this.client.get<Company>(`http://127.0.0.1:8000/api/companies/${id}`);
  }

  getCompanyVacancies(id: number): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`http://127.0.0.1:8000/api/companies/${id}/vacancies`)
  }
}
