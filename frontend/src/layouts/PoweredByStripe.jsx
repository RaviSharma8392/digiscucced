import React from 'react';

export default function PoweredByStripe({
    companyName = "etrynic",
    redirectUrl = "https://etrynic.com",
    logoUrl = null
}) {
    return (
        <div className="relative z-[9999] w-full bg-white py-4 border-t border-slate-200 flex items-center justify-center">
            <a
                href={redirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 text-[13px] font-medium text-slate-500 hover:text-slate-800 transition-all duration-300"
                aria-label={`Powered by ${companyName}`}
            >
                <span>Powered by</span>

                <div className="flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">

                    {logoUrl ? (
                        <img
                            src={logoUrl}
                            alt={`${companyName} logo`}
                            className="h-4 w-auto object-contain"
                        />
                    ) : (
                        <div className="flex items-center gap-1.5">
                            <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center relative overflow-hidden shadow-sm">
                                <div className="absolute bottom-0 left-0 w-2 h-2 bg-slate-900"></div>
                                <div className="absolute top-0 right-0 w-2 h-2 bg-blue-300"></div>
                            </div>
                            <span className="font-bold text-slate-700 tracking-tight text-sm">
                                {companyName}
                            </span>
                        </div>
                    )}

                </div>
            </a>
        </div>
    );
}