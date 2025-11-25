
export default function Footer() {
    return (
        <>
            <hr />
            <footer className="bg-theme text-theme text-center py-8 mt-auto">
                <p className="text-md">
                    Design & Developed by <span className="font-bold">Ali Hamza</span>
                </p>
                <p className="text-md">
                    &copy; {new Date().getFullYear()}. All rights reserved.
                </p>
            </footer>
        </>
    )
}
