import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Ambaari</h1>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          
        </CardHeader>
       
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

    </main>
  );
}
