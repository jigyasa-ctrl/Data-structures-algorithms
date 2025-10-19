// Implement an router middleware

// Implement a middleware router for our web service, which based on the path returns different strings (these would represent “functions to invoke” in a real application)

// router.addRoute("/bar", "result")
// router.callRoute("/bar") -> "result"

const router = {
    routes: [],
  
    addRoute: function (path, value) {
      const regex = this.wildcardPattern(path);
      this.routes.push({ pattern: path, regex, value });
    },
  
    wildcardPattern: function (pattern) {
      // Convert wildcard to regex
      const regexStr = "^" +
        pattern
          .replace(/\./g, "\\.")    // escape dots
          .replace(/\*\*/g, ".*")   // ** → match any depth
          .replace(/\*/g, "[^/]+")  // * → single path segment
        + "$";
      return new RegExp(regexStr);
    },
  
    callRoute: function (path) {
      for (const route of this.routes) {
        if (route.regex.test(path)) {
          console.log(route.value);
          return route.value;
        }
      }
      console.log("No match");
    }
  };
  
  // ✅ Tests
  router.addRoute("/bar/*/baz", "bar");
  router.addRoute("/foo/**", "foo deep");
  
  router.callRoute("/bar/a/baz");   // "bar"
  router.callRoute("/foo/a/b/c");   // "foo deep"
  router.callRoute("/bar/b/baz");   // "bar"
  router.callRoute("/bar/xyz");     // "No match"
  
