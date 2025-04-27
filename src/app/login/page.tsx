import LoginForm from "@/components/login/login-form";
import { Suspense } from "react";

export default function LoginPage(){
    return (
        <main className="h-screen flex justify-center items-center">
            <Suspense>
                <LoginForm />
            </Suspense>
        </main>
    );
}