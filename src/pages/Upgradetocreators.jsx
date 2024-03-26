import React from "react";
import { Label, TextInput } from "flowbite-react";

function Upgradetocreators() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md">
        <div className="mb-2 block text-black">
          <Label htmlFor="email3" value="Upgrade to creator" color="black" />
        </div>
        <TextInput
          id="email3"
          type="email"
          placeholder="Username creator"
          required
          helperText={
            <>
              We’ll never share your details. Read our
              <a
                href="#"
                className="ml-1 font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Privacy Policy
              </a>
              .
            </>
          }
        />
      </div>
    </div>
  );
}

export default Upgradetocreators;
