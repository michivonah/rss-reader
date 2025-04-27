import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default function NewsCard(){
    return (
        <Card>
            <CardHeader>
                <CardTitle>News title</CardTitle>
                <CardDescription>That's just some story</CardDescription>
            </CardHeader>
            <CardContent>
                <Image
                    src="/example-image.jpg"
                    width="640"
                    height="360"
                    className="block rounded-lg"
                    alt="News article"
                />
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button>Read more...</Button>
                <Button variant="outline">Save for later</Button>
            </CardFooter>
        </Card>
    );
}