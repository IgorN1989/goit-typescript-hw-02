/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Part {
  title: string;
}

class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component<Part> {
  pageInfo (): void {
    console.log(this.props.title);
  }
}

export {};