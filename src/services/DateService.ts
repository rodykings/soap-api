import * as soap from "soap";

interface GetCurrentDateArgs {}

interface GetCurrentDateResponse {
  currentDate: string;
}

export const dateService: soap.IServices = {
  DateService: {
    DatePort: {
      getCurrentDate: function (args, callback) {
        // Check if callback is defined before invoking
        if (callback) {
          const currentDate = new Date().toISOString();
          callback({ currentDate });
        } else {
          // Handle the case where callback is undefined (optional)
          console.error("Callback function is undefined.");
        }
      },
    },
  },
};
