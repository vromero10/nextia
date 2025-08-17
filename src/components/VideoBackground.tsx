export default function VideoBackground() {
    return (
      <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-black pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/bg-space.webm" type="video/webm" />
          <source src="/bg-space.mp4" type="video/mp4" />
        </video>
      </div>
    )
  }