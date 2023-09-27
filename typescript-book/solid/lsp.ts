// Liskov Substitution Principle
interface PersistanceServiceInterface {
  save(entity: any): number;
}

class Cookie implements PersistanceServiceInterface {
  public save(entity: any): number {
    console.log("Using Cookie");
    console.log("Saving Data: " + entity);

    let id = Math.floor(Math.random() * 100 + 1);
    return id;
  }
}

class LocalStorage implements PersistanceServiceInterface {
  public save(entity: any): number {
    console.log("Using LocalStorage");
    console.log("Saving Data: " + entity);

    let id = Math.floor(Math.random() * 100 + 1);
    return id;
  }
}

class Controller {
  private _persistance: PersistanceServiceInterface;

  constructor(persistance_service: PersistanceServiceInterface) {
    this._persistance = persistance_service;
  }

  public saveFavorite(id: number) {
    return this._persistance.save(id);
  }
}

const controller = new Controller(new Cookie());
controller.saveFavorite(200);

const controller_two = new Controller(new LocalStorage());
controller_two.saveFavorite(200);
