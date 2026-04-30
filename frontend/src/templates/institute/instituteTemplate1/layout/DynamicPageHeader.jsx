export default function DynamicPageHeader({
    title = "About Our Institute",
    description = "Discover our story, mission, and why thousands of students choose us for their education journey.",
    image,
    theme
}) {
    const primaryColor = theme?.primary || "#2A5B75";

    // If an image is provided, apply it as a background with a primary color overlay.
    // Otherwise, fallback to the solid primary color.
    const backgroundStyle = image
        ? {
            backgroundImage: `linear-gradient(to right, ${primaryColor}E6, ${primaryColor}CC), url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }
        : { backgroundColor: primaryColor };

    return (
        <div
            className="relative py-24 px-4 text-center text-white shadow-inner"
            style={backgroundStyle}
        >
            {/* Content wrapper with z-index to stay above the background */}
            <div className="relative z-10 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-md font-serif">
                    {title}
                </h1>

                {description && (
                    <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}