const platforms = {
    google: true,
    facebook: false
  };

  const adapters = {
    google: {
      send: ({ eventname, props }) => {
        console.log("Google:", eventname, props);
        return Promise.resolve();
      }
    },
    facebook: {
      send: ({ eventname, props }) => {
        console.log("Facebook:", eventname, props);
        return Promise.resolve();
      }
    }
  };
  
  class SDK {
    constructor(adapters, concurrency = 3) {
      this.queue = [];
      this.adapters = adapters; // actual platform handlers
      this.platforms = Object.entries(platforms);
      this.running = 0;
      this.concurrency = concurrency;
    }
  
    track(eventname, props = {}) {
      this.queue.push({ eventname, props });
      this.process(); // start processing immediately
    }
  
    async process() {
      if (this.running >= this.concurrency) return;
      if (this.queue.length === 0) return;
  
      const item = this.queue.shift();
      this.running++;
  
      await this.callEvent(item);
  
      this.running--;
      this.process(); // process next
    }
  
    async callEvent(item) {
      const activePlatforms = this.platforms
        .filter(([name, enabled]) => enabled)
        .map(([name]) => name);
  
      await Promise.all(
        activePlatforms.map((platform) => {
          const adapter = this.adapters[platform];
          return this.retry(() => adapter.send(item));
        })
      );
    }
  
    retry(fn, retries = 3, delay = 500) {
      return fn().catch(() => {
        if (retries === 0) return;
  
        return new Promise((resolve) =>
          setTimeout(() => {
            resolve(this.retry(fn, retries - 1, delay * 2));
          }, delay)
        );
      });
    }
  }

  const sdk = new SDK(adapters);

sdk.track("add-to-cart", { userId: 1 });
sdk.track("checkout");
sdk.track("payment");