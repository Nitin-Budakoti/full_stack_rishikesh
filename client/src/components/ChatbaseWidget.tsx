import React, { useEffect, useState } from "react";

const ChatbotWidget: React.FC = () => {
  const [isOpen] = useState(false);


  useEffect(() => {
    if (
      !(window as any).chatbase ||
      (window as any).chatbase("getState") !== "initialized"
    ) {
      (window as any).chatbase = (...args: any[]) => {
        if (!(window as any).chatbase.q) {
          (window as any).chatbase.q = [];
        }
        (window as any).chatbase.q.push(args);
      };

      (window as any).chatbase = new Proxy((window as any).chatbase, {
        get(target, prop) {
          if (prop === "q") return target.q;
          return (...args: any[]) => target(prop, ...args);
        },
      });
    }

    const loadScript = () => {
      if (!document.getElementById("wiCTDDDqoiGE1-QYbOgH-")) {
        const script = document.createElement("script");
        script.src = "https://www.chatbase.co/embed.min.js";
        script.id = "wiCTDDDqoiGE1-QYbOgH-"; // Your bot ID
        script.setAttribute("domain", "www.chatbase.co");
        document.body.appendChild(script);
      }
    };

    if (document.readyState === "complete") {
      loadScript();
    } else {
      window.addEventListener("load", loadScript);
    }
  }, []);

  return (
    <>
      {/* Chat Panel */}
      <div
        className={`fixed bottom-20 left-6 w-[350px] h-[500px] bg-white border rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          <p>Chatbot is loading...</p>
        </div>
      </div>

    
    </>
  );
};

export default ChatbotWidget;
