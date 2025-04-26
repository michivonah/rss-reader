import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function Page(){
    return (
        <div>
            <div>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Home
                </h1>
            </div>
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>News title</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Hello World!</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}