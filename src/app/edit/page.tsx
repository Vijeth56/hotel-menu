"use client";
import React, { useState, FormEvent, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UploadButton } from "@/utils/uploadthing";
import axios from 'axios';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Page() {
  const [password, setPassword] = useState<string>('');
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [type, setType] = useState<string>("food");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password === 'password123') {
      setLoggedIn(true);
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div>
      {!loggedIn ? (
        <div className="flex justify-center items-center h-screen">
          <form onSubmit={handleSubmit} className="w-full max-w-xs">
            <Input
              type="password"
              value={password}
              placeholder='Enter password'
              onChange={(e) => setPassword(e.target.value)}
              className="mb-2"
            />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-10">
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Select Menu: {type}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={type} onValueChange={setType}>
                  <DropdownMenuRadioItem value="laundry">Laundry</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="food">Food</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="spa">Spa</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="mt-4">
            <Button variant="outline" onClick={async () => {
              const data = { type };

              try {
                const response = await axios.post(
                  'http://localhost:5000/api/deleteMenu',
                  data
                );

                if (response.status === 200) {
                  alert(response.data);
                } else {
                  alert('Error: ' + response.data);
                }
              } catch (error) {
                alert('Error deleting menu!');
                console.error('Error deleting menu:', error);
              }
            }}>Delete existing {type} menu</Button>
          </div>
          <div className="mt-4">
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={async (res: any) => {
                const data = { type, url: res[0].url };

                try {
                  const response = await axios.post(
                    'http://localhost:5000/api/updateMenu',
                    data
                  );

                  if (response.status === 200) {
                    alert(response.data);
                  } else {
                    alert('Error: ' + response.data);
                  }
                } catch (error) {
                  alert('Error updating menu!');
                  console.error('Error updating menu:', error);
                }
                alert("Upload Completed");
              }}
              onUploadError={(error: Error) => {
                alert(`ERROR! ${error.message}`);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
