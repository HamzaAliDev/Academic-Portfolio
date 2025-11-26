
export default function LayeredText({ heading, subheading }: { heading: string, subheading: string }) {
    return (
        <div className=" mx-auto mb-10">
            {/* Main heading  */}
                <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-1 ">
                    {heading}
                </h1>

            {/* Foreground Text */}
                <h2 className="ms-1 text-lg md:text-xl lg:text-xl font-semibold text-gray-500/80 dark:text-gray-500 leading-tight" >
                    {subheading}
                </h2>
        </div>
    )
}
