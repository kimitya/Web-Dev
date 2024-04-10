import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Company } from '../models';
import { CompaniesService } from '../companies.service';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent implements OnInit{
  companies!: Company[];

  constructor(private companyService: CompaniesService) {
  }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companyService.getCompanies().subscribe((companies) => {
      this.companies = companies;
    });
  }

}
