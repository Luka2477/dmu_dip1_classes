function Observer(id) {
  this.id = id;

  this.notify = () => {
    console.log(`OBSERVER ${this.id} NOTIFIED`);
  };
}

function Subject() {
  this.observers = [];

  this.registerObserver = (observer) => {
    this.observers.push(observer);
    console.log(`REGISTERED OBSERVER ${observer.id}`);
  };

  this.notifyObservers = () => {
    console.log("NOTIFYING OBSERVERS");
    this.observers.forEach((observer) => observer.notify());
  };
}

const subject1 = new Subject();
subject1.registerObserver(new Observer(1));
subject1.registerObserver(new Observer(2));

const subject2 = new Subject();
subject2.registerObserver(new Observer(3));

subject1.notifyObservers();
subject2.notifyObservers();
