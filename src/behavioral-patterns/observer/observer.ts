/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 *
 * Design Patterns Presentation.
 * Programación de Interfaces Interactivas
 *
 * @file bridge_bad.ts
 * @author Igor Dragone <igor.dragone.13@ull.edu.es>
 * @author José Ramóon Morera Campos  <jose.morera.27@ull.edu.es>
 * @date  12/03/2024
 * @brief Explicative implementation of observer pattern.
 *        Observer is a behavioral design pattern.
 * @see {@link https://refactoring.guru/design-patterns/observer}
 * @see {@link https://dofactory.com/net/observer-design-pattern}
 */


/**
 * The Publisher interface declares a set of methods for managing subscribers.
 */
interface Publisher {
  // Attach an observer to the subject.
  attach(subscriber: Subscriber): void;

  // Detach an observer from the subject.
  detach(subscriber: Subscriber): void;

  // Notify all observers about an event.
  notify(): void;
}

/**
* Apple Store notifies observers when a new iPhone is launched.
*/
class AppleStore implements Publisher {
  /* Last iPhone launched */
  private lastIphoneLaunched: number = 15;

  /* List of subscribers. */
  private subscribers: Subscriber[] = [];

  /**
   * Method to attach a subscriber. If the subscriber is already attached, it
   * will return a message. Otherwise, it will attach the subscriber.
   */
  public attach(subscriber: Subscriber): void {
      const isSubscribed = this.subscribers.includes(subscriber);
      if (isSubscribed) {
          return console.log('Store: User is already subscribed');
      }

      console.log('Store: Attached a subscriber');
      this.subscribers.push(subscriber);
  }

  /**
   * Method to detach a subscriber. If the subscriber is not attached, it will
   * return a message. Otherwise, it will detach the subscriber.
   */
  public detach(subscriber: Subscriber): void {
      const subscriberIndex = this.subscribers.indexOf(subscriber);
      if (subscriberIndex === -1) {
          return console.log('Store: Nonexistent subscriber.');
      }

      this.subscribers.splice(subscriberIndex, 1);
      console.log('Store: Detached a subscriber.');
  }

  /**
   * Trigger an update in each subscriber.
   */
  public notify(): void {
      console.log('Store: Notifying subscribers...');
      for (const subscriber of this.subscribers) {
          subscriber.update(this);
      }
  }

  /**
   * Method to get the last iPhone launched.
   */
  public getLastIphoneLaunched(): number {
      return this.lastIphoneLaunched;
  }

  /**
   * Method to launch a new iPhone. It will notify all subscribers.
   */
  public launchNewPhone(): void {
      console.log('Store: Launching new iPhone');
      this.lastIphoneLaunched++;
      console.log(`Store: The last iphone launched is : ${this.lastIphoneLaunched}`);
      this.notify();
  }
}

/**
* The Subscriber interface declares the update method, used by subscribers.
*/
interface Subscriber {
  // Receive update from publisher.
  update(publisher: Publisher): void;
}

/**
* Concrete Subscribers react to the updates issued by the Publisher they had been
* attached to.
*/
class AppleCustomer implements Subscriber {
  public update(publisher: Publisher): void {
      if (publisher instanceof AppleStore) {
          console.log(`Customer: YAY! Iphone ${publisher.getLastIphoneLaunched()} is out!`);
      }
  }
}

/**
 * Client code
 */
function main() {
  let appleStore = new AppleStore();
  let robert = new AppleCustomer();
  appleStore.attach(robert);

  appleStore.launchNewPhone();
}

main();
