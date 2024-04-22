import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ServiceCard from "@/components/serviceCard";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Ambaari</h1>

      <div className=""><Card>
        <CardHeader>
          <CardTitle>Laundry</CardTitle>
          
        </CardHeader>
       
        <CardFooter>
          <p>See menu</p>
        </CardFooter>
      </Card></div>

      <div className=""><Card>
        <CardHeader>
          <CardTitle>Food</CardTitle>
          
        </CardHeader>
       
        <CardFooter>
          <p>See menu</p>
        </CardFooter>
      </Card></div>

      <div className=""><Card>
        <CardHeader>
          <CardTitle>Spa</CardTitle>
          
        </CardHeader>
       
        <CardFooter>
          <p>See menu</p>
        </CardFooter>
      </Card></div>

    </main>
  );
}
