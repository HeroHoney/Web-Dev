import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';
import { VacancyService } from './vacancy.service';
import { Company, Vacancy } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hh-front';

  companies: Company[];
  newCompany: string = '';
  vacancies: Vacancy[];
  newVacancy: string = '';

  constructor(private companyService: CompanyService, private vacancyService: VacancyService) {
    this.companies=[]
    this.vacancies=[]
  }

  ngOnInit() {
    this.getCompanies();
    this.getVacancies();
  }

  getCompanies() {
    this.companyService.getCompanies().subscribe((companies) => {
      this.companies = companies;
    });
  }

  addCompany() {
    if (this.newCompany.length) {
      this.companyService.createCompany(this.newCompany).subscribe((company) => {
        this.companies.push(company);
        this.newCompany = '';
      });
    }
  }

  getVacancies() {
    this.vacancyService.getVacancies().subscribe((vacancies) => {
      this.vacancies = vacancies;
    });
  }

  addVacancy() {
    if (this.newVacancy.length) {
      this.vacancyService.createVacancy(this.newVacancy).subscribe((vacancy) => {
        this.vacancies.push(vacancy);
        this.newVacancy = '';
      });
    }
  }

  
}
