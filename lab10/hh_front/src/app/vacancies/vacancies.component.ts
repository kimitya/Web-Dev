
import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Vacancy } from '../models';
import { CompaniesService } from '../companies.service';
import { ActivatedRoute, RouterModule } from "@angular/router";
@Component({
  selector: 'app-vacancies',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.css'
})
export class VacanciesComponent {
  vacancies!: Vacancy[];

  constructor(private route: ActivatedRoute, private companyService: CompaniesService) {
  }

  ngOnInit() {
    this.getVacancies();
  }

  getVacancies() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.companyService.getCompanyVacancies(id).subscribe((vacancies) => {
        this.vacancies = vacancies;
      });
    });
  }
}
