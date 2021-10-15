import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date

  ){}
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],


})
export class ListTodosComponent implements OnInit {
 

  todos!: Todo[];
  message!: string;

  constructor(
    private todoService:TodoDataService, 
    private route: ActivatedRoute,
    private _router: Router,){
    
  }
  
  ngOnInit() {
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response =>{
        this.todos = response;
      }
    )
  }
  deleteTodo(id: any){
    this.todoService.deleteTodo('in28minutes', id).subscribe(
      response =>{        
        this.message = `Delete of Todo ${id} Successful!`;
        this.refresh();
      }
  )}

  refresh(): void {
    window.location.reload();
}

updateTodo(id:any){
  console.log(`update ${id}`);
  this._router.navigate(['todo', id]);
  
}
}
  

    /*
    const todos: never[] = [];
    for (let i = 0; i < myJson.length; i++) {
      const todo = myJson[i];
      this.todos.push(todo);
    }
    
  }  */ 
  
  /*todos: any;
  url: string | undefined;
  images: any = {}
  datas: any;
  items: any;
  ids: any;
  element: any;

  constructor(private http: HttpClient) {
    this.todos = [];
    this.url = '';
    this.datas = [];
    this.element = [];
    this.ids = [];

  }
      ngOnInit() {
        const todos: never[] = [];
        for (let i = 0; i < myJson.length; i++) {
          const todo = myJson[i];
          this.todos.push(todo);

        }

      }
  ulrjson() {
    const features: any[] = [];
    this.http.get("https://gis.epa.ie/geoserver/EPA/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=EPA:LEMA_EMISSIONPTSSNAPPED&maxFeatures=50&outputFormat=application%2Fjson&srsName=EPSG:4326").subscribe(data => {
      this.items = data;
      for (let i = 0; i < this.items.features.length; i++) {
        features.push(this.items.features[i]);
      }
      for (let j = 0; j < features.length; j++) {
        const id = features[j];
        this.ids.push(id);
      }
    });
  }
}
*/
