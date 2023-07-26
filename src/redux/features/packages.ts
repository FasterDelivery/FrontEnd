import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { Package } from "app/interfaces/packages";

// Define the type for the payload of the 'setUser' action
type SetPackagesPayload = Package[];

// Define the 'setUser' action creator with the appropriate payload type
export const setPackages = createAction<SetPackagesPayload>("SET_PACKAGES");

interface PackageStatusArrays {
  entregado: Package[];
  pendiente: Package[];
  "en curso": Package[];
}

const initialState: PackageStatusArrays = {
  entregado: [],
  pendiente: [],
  "en curso": []
};

const packagesReducer = createReducer(initialState, (builder) => {
  builder.addCase(
    setPackages,
    (state, action: PayloadAction<SetPackagesPayload>) => {
      // Clear previous arrays
      state.entregado = [];
      state.pendiente = [];
      state["en curso"] = [];

      // Populate the arrays based on the status of each package
      action.payload.forEach((packageItem) => {
        switch (packageItem.status) {
          case "entregado":
            state.entregado.push(packageItem);
            break;
          case "pendiente":
            state.pendiente.push(packageItem);
            break;
          case "en curso":
            state["en curso"].push(packageItem);
            break;
          default:
            break;
        }
      });
    }
  );
});

export default packagesReducer;
