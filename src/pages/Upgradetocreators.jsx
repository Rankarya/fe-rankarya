import React from "react";
import { Label, TextInput, Button } from "flowbite-react";

function Upgradetocreators() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-xl text-center">
        <div className="mb-6 text-black" style={{ fontSize: "1.875rem", fontWeight: "bold" }}>
          <Label htmlFor="email3" value="UPGRADE TO CREATOR" color="black" />
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
        <div className="relative mt-4">
          <Button
            size="lg"
            color="cyan-600"
            bgColor="white"
            className="w-full border border-cyan-600"
            style={{ borderRadius: "0" }}
          >
            Upgrade
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Upgradetocreators;
