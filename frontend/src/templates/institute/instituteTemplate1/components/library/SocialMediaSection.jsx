import { Facebook, Instagram, Twitter } from 'lucide-react';
import React from 'react'

const SocialMediaSection = ({ socialMedia }) => {
    if (!socialMedia) return null;
    const { facebook: fb, instagram: ig, twitter: tw } = socialMedia;
    if (!fb && !ig && !tw) return null;

    return (
        <section
            aria-labelledby="social-heading"
            className="py-24 lg:py-32 px-4 bg-slate-100 border-t border-slate-200"
        >
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-16 flex flex-col items-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mb-6 border border-slate-200" aria-hidden="true">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-ping" />
                    </div>
                    <h2 id="social-heading" className="text-4xl md:text-5xl font-serif font-bold text-slate-800 tracking-tight">
                        Social Media Posts
                    </h2>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {fb && (
                        <article className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
                            <header className="p-4 border-b border-slate-100 flex items-center gap-3">
                                <img src={fb.logo} alt={`${fb.pageName} logo`} className="w-10 h-10 rounded-full object-cover border border-slate-200" loading="lazy" width="40" height="40" />
                                <div>
                                    <h3 className="text-[#1877F2] font-semibold text-sm">{fb.pageName}</h3>
                                    <p className="text-slate-500 text-xs">{fb.followers}</p>
                                </div>
                            </header>
                            <div className="p-3">
                                <a
                                    href={fb.pageUrl || 'https://facebook.com'}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-md hover:bg-slate-200 transition w-max"
                                    aria-label={`Follow ${fb.pageName} on Facebook`}
                                >
                                    <Facebook className="w-4 h-4 text-[#1877F2]" aria-hidden="true" /> Follow Page
                                </a>
                            </div>
                            <div className="mt-2 flex-grow bg-[#88A967] flex flex-row">
                                <div className="w-1/2 h-64">
                                    <img src={fb.image} alt="Library campus" className="w-full h-full object-cover" loading="lazy" />
                                </div>
                                <div className="w-1/2 p-6 flex flex-col justify-center text-white">
                                    <span className="text-4xl font-serif leading-none mb-2 text-green-100" aria-hidden="true">"</span>
                                    <p className="text-lg font-medium leading-snug">{fb.quote}</p>
                                </div>
                            </div>
                            <footer className="p-4 border-t border-slate-100 bg-slate-50 flex items-center gap-3 text-sm font-semibold text-slate-700">
                                <img src={fb.logo} alt="" className="w-6 h-6 rounded-full" aria-hidden="true" />
                                {fb.pageName}
                                <Facebook className="w-4 h-4 text-[#1877F2] ml-auto" aria-hidden="true" />
                            </footer>
                        </article>
                    )}

                    {ig && (
                        <article className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
                            <header className="p-5 flex items-center gap-4">
                                <img src={ig.logo} alt={`${ig.name} logo`} className="w-14 h-14 rounded-full object-cover border-2 border-pink-500 p-0.5" loading="lazy" width="56" height="56" />
                                <div className="flex-grow">
                                    <div className="flex items-center justify-between w-full">
                                        <h3 className="font-bold text-slate-900 text-sm">{ig.handle}</h3>
                                        <Instagram className="w-5 h-5 text-pink-600" aria-hidden="true" />
                                    </div>
                                    <p className="text-slate-500 text-xs">{ig.name}</p>
                                    <div className="flex gap-4 mt-1.5 text-xs text-slate-600">
                                        <span><strong className="text-slate-900">{ig.followers}</strong> followers</span>
                                        <span><strong className="text-slate-900">{ig.posts}</strong> posts</span>
                                    </div>
                                </div>
                            </header>
                            {ig.grid?.length > 0 && (
                                <div className="grid grid-cols-3 gap-1 p-1 mt-auto" aria-label="Instagram photo grid">
                                    {ig.grid.map((img, i) => (
                                        <div key={i} className="aspect-square overflow-hidden bg-slate-100">
                                            <img
                                                src={img}
                                                alt={`Instagram post ${i + 1}`}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </article>
                    )}

                    {tw && (
                        <article className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col p-6">
                            <header className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                                <h3 className="font-serif text-slate-700 font-semibold text-sm">Tweets by {tw.name}</h3>
                            </header>
                            <div className="mb-4">
                                <a
                                    href={`https://twitter.com/${tw.handle?.replace('@', '')}`}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="flex items-center gap-2 bg-black text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-slate-800 transition w-max"
                                    aria-label={`Follow ${tw.handle} on Twitter`}
                                >
                                    <Twitter className="w-3 h-3 fill-white" aria-hidden="true" /> Follow {tw.handle}
                                </a>
                            </div>
                            <div className="flex-grow flex flex-col gap-4">
                                <p className="text-slate-800 text-sm md:text-base leading-relaxed font-serif">{tw.tweet}</p>
                                {tw.image && (
                                    <div className="rounded-xl overflow-hidden border border-slate-100 mt-auto">
                                        <img src={tw.image} alt="Tweet attachment" className="w-full h-48 object-cover" loading="lazy" />
                                    </div>
                                )}
                            </div>
                        </article>
                    )}

                </div>
            </div>
        </section>
    );
}

export default SocialMediaSection