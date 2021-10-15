import { Component, OnInit } from '@angular/core';
import { HelloWorldBean, WelcomeDataService } from'./../service/data/welcome-data.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcomeMessageFromService!: string;
  name: any;

  constructor(private service:WelcomeDataService) { 
  }

  ngOnInit(): void {
  }

  getWelcomeMessage(){
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  
  }

  getWelcomeMessageWithParameter(){
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  
  }

  handleSuccessfulResponse(response: HelloWorldBean){
    this.welcomeMessageFromService = response.message;
    
  }

  handleErrorResponse(error:any){
   
    this.welcomeMessageFromService = error.error.message;
  }

}
