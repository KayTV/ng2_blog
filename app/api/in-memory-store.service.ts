export class InMemoryStoreService {

  createDb() {
    let posts = [
      {
        'id': 1,
        'name': 'Angular 2 Quickstart',
        'description': 'Quick setup for angular 2 using a dist folder to seperate ts from map.js and .js files'
      },
      {
        'id': 2,
        'name': 'Angular 2 Routing',
        'description': 'Routing for angular 2 using multiple routing files'
      },
      {
        'id': 3,
        'name': 'Angular 2 Http Calls',
        'description': 'Basic CRUD app set up for Http Calls'
      }
    ];
    let comments = [
      {
        'id': 1,
        'name': '',
        'comment': ''
      },
      {
        'id': 2,
        'name': '',
        'comment': ''
      }
    ]
    return { posts, comments };
  }
}
