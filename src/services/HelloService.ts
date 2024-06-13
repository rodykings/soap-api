import * as soap from "soap";

export const helloService: soap.IServices = {
  HelloWorldService: {
    HelloWorldPort: {
      sayHello: function (args, callback) {
        // Check if callback is defined before invoking
        if (callback) {
          const response = {
            greeting: `Hello, ${args?.name ?? "Anonymous"}`, // Use optional chaining and nullish coalescing
          };
          callback(response);
        } else {
          // Handle the case where callback is undefined (optional)
          console.error("Callback function is undefined.");
        }
      },
    },
  },
};
