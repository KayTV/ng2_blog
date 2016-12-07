export class InMemoryStoreService {

  createDb() {
    let posts = [
      {
        'id': 1,
        'name': 'Bones',
        'description': '',
        'showtime': ''
      },
      {
        'id': 2,
        'name': 'Criminal Minds',
        'description': '',
        'showtime': 'usually night time, sometimes all day marathons'
      },
      {
        'id': 3,
        'name': 'NCIS',
        'description': '',
        'showtime': ''
      }
    ];
    let research = [
      {
        'id': 1,
        'name': ''
      },
      {
        'id': 2,
        'name': ''
      }
    ]
    return { posts, research };
  }
}
