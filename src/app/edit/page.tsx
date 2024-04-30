"use client"
import React, { useState, FormEvent } from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { UploadButton } from "@/utils/uploadthing";

function Page() {
  const [password, setPassword] = useState<string>('');
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Check if password is correct (for demonstration, let's say the password is 'password123')
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
          

<Input type="password"
              value={password}
              placeholder='Enter password'
              onChange={(e) => setPassword(e.target.value)} 
              className="mb-2"
              />
          
          <Button type="submit">Submit</Button>

        </form>
      </div>
      
        
      ) : (
        <div>
          <h1>This is the edit page</h1>
          <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res: any) => {
          // Do something with the response
          res[0].customId = 123;
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
        </div>
      )}
    </div>
  );
}

export default Page;
