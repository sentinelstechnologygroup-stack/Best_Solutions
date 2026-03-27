// src/components/shared/MissionBanner.jsx
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function MissionBanner({
  className = "",
  foundationBadge = "/images/mission_banner/sentinels-foundation-badge.png",
  sdlLogo = "/images/mission_banner/sdl-logo.png", // USE CROPPED VERSION
}) {
  return (
    <section
      className={`bg-gradient-to-r from-[#0f2341] via-[#11284a] to-[#0f2341] text-white ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 border-t border-white/10 lg:grid-cols-2">
          
          {/* LEFT: FOUNDATION */}
          <div className="flex h-full flex-col justify-between border-b border-white/10 p-6 lg:border-b-0 lg:p-8">
            <div className="flex items-start gap-5">
              <img
                src={foundationBadge}
                alt="Sentinels Foundation"
                className="h-24 w-24 shrink-0 object-contain sm:h-28 sm:w-28 lg:h-32 lg:w-32"
              />

              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f6b221]">
                  Supporting the Mission
                </p>

                <h3 className="mt-1 text-xl font-bold leading-tight text-white">
                  Sentinels Foundation/Sentinels K9 Rescue
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/80 sm:text-[15px]">
                  Supporting K9 rescue and mission-driven community initiatives
                  through early awareness, future fundraising, and long-term
                  nonprofit development.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/sentinels-foundation"
                className="inline-flex items-center gap-2 rounded-md bg-[#f6b221] px-5 py-2.5 font-semibold text-[#0f2341] transition hover:bg-[#ffbf3f]"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* RIGHT: SDL */}
<div className="flex h-full flex-col justify-between p-6 lg:p-8">
  <div className="flex items-center gap-8">
    {/* Larger SDL logo area */}
    <div className="w-[190px] sm:w-[230px] lg:w-[270px] shrink-0">
      <img
        src={sdlLogo}
        alt="Sentinels Design Lab"
        className="h-50 w-auto object-contain sm:h-54 lg:h-58"
      />
    </div>

    <div className="min-w-0 max-w-[420px]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f6b221]">
        Built by SDL
      </p>

      <h3 className="mt-1 text-xl font-bold leading-tight text-white">
        Sentinels Design Lab
      </h3>

      <p className="mt-2 text-sm leading-6 text-white/80 sm:text-[15px]">
        Strategic websites and digital systems built to help service
        businesses grow, operate more efficiently, and present
        themselves with authority online.
      </p>
    </div>
  </div>

  <div className="mt-6">
    <Link
      to="/contact"
      className="inline-flex items-center gap-2 rounded-md border border-[#f6b221] px-5 py-2.5 font-semibold text-[#f6b221] transition hover:bg-[#f6b221] hover:text-[#0f2341]"
    >
      Work With SDL
      <ArrowRight className="h-4 w-4" />
    </Link>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}